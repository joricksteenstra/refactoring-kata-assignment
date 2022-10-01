import {Item} from '@/gilded-rose';
import {BackstagePassesStrategy} from "@/contexts/inventory/strategies/backstage-passes.strategy";

const createItem = (sellIn = 3, quality = 5, name = "Backstage passes to a TAFKAL80ETC concert") => {
  return {
    name,
    sellIn,
    quality,
  }
}

const dataSet = [
  {
    currentQuality: 8,
    sellIn: 10,
    expectedQuality: 10
  },
  {
    currentQuality: 8,
    sellIn: 5,
    expectedQuality: 11
  },
  {
    currentQuality: 8,
    sellIn: 9,
    expectedQuality: 10
  },
  {
    currentQuality: 8,
    sellIn: 4,
    expectedQuality: 11
  },
  {
    currentQuality: 49,
    sellIn: -1,
    expectedQuality: 0
  }
]

describe('Backstage Passes Strategy', () => {
  describe.each(dataSet)(`test getUpdatedItem when`, (data) => {
    it(`current quality ${data.currentQuality} should result in ${data.expectedQuality}`, () => {
      const item: Item = createItem(data.sellIn ?? 2, data.currentQuality)
      const backstagePassesStrategy = new BackstagePassesStrategy();

      const updatedItem = backstagePassesStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    });
  });

  it('should decrement item sell in with 1', () => {
    const item: Item = createItem(2)
    const backstagePassesStrategy = new BackstagePassesStrategy();

    const updatedItem = backstagePassesStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(1);
  });

  it('it matches strategy', () => {
    const item: Item = createItem(2,1, "Backstage passes to a TAFKAL80ETC concert")
    const backstagePassesStrategy = new BackstagePassesStrategy();

    const result = backstagePassesStrategy.matchesStrategy(item);

    expect(result).toBeTruthy();
  });

  it('it does not matches strategy when name is wrong', () => {
    const item: Item = createItem(2,1, "wrong")
    const backstagePassesStrategy = new BackstagePassesStrategy();

    const result = backstagePassesStrategy.matchesStrategy(item);

    expect(result).toBeFalsy();
  });
});
