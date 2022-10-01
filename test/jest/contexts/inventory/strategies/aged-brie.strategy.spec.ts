import {Item, GildedRose} from '@/gilded-rose';
import {AgedBrieStrategy} from "@/contexts/inventory/strategies/aged-brie.strategy";

const createItem = (sellIn = 3, quality = 5, name = "Aged Brie") => {
  return {
    name,
    sellIn,
    quality,
  }
}

const dataSet = [
  {
    currentQuality: 50,
    sellIn: 2,
    expectedQuality: 50
  },
  {
    currentQuality: 0,
    sellIn: 2,
    expectedQuality: 1
  },
  {
    currentQuality: 49,
    sellIn: 2,
    expectedQuality: 50
  },
  {
    currentQuality: 48,
    sellIn: -1,
    expectedQuality: 50
  },
  {
    currentQuality: 49,
    sellIn: -1,
    expectedQuality: 50
  }
]

describe('Aged Brie Strategy', () => {
  describe.each(dataSet)(`test getUpdatedItem when`, (data) => {
    it(`current quality ${data.currentQuality} should result in ${data.expectedQuality}`, () => {
      const item: Item = createItem(data.sellIn ?? 2, data.currentQuality)
      const agedBrieStrategy = new AgedBrieStrategy();

      const updatedItem = agedBrieStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    });
  });

  it('should decrement item sell in with 1', () => {
    const item: Item = createItem(2)
    const agedBrieStrategy = new AgedBrieStrategy();

    const updatedItem = agedBrieStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(1);
  });

  it('it matches strategy', () => {
    const item: Item = createItem(2,1, "Aged Brie")
    const agedBrieStrategy = new AgedBrieStrategy();

    const result = agedBrieStrategy.matchesStrategy(item);

    expect(result).toBeTruthy();
  });

  it('it does not matches strategy when name is wrong', () => {
    const item: Item = createItem(2,1, "wrong-name")
    const agedBrieStrategy = new AgedBrieStrategy();

    const result = agedBrieStrategy.matchesStrategy(item);

    expect(result).toBeFalsy();
  });
});
