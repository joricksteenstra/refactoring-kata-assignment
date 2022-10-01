import {Item} from '@/gilded-rose';
import {DefaultStrategy} from "@/contexts/inventory/strategies/default.strategy";

const createItem = (sellIn = 3, quality = 5, name = "Conjured Mana Cake") => {
  return {
    name,
    sellIn,
    quality,
  }
}

const dataSet = [
  {
    currentQuality: 2,
    sellIn: 10,
    expectedQuality: 1
  },
  {
    currentQuality: 5,
    sellIn: -1,
    expectedQuality: 3
  },
]

describe('Default Strategy', () => {
  describe.each(dataSet)(`test getUpdatedItem when`, (data) => {
    it(`current quality ${data.currentQuality} should result in ${data.expectedQuality}`, () => {
      const item: Item = createItem(data.sellIn ?? 2, data.currentQuality)
      const defaultStrategy = new DefaultStrategy();

      const updatedItem = defaultStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    });
  });

  it('should decrement item sell in with 1', () => {
    const item: Item = createItem(2)
    const defaultStrategy = new DefaultStrategy();

    const updatedItem = defaultStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(1);
  });

  it('matches strategy is always false', () => {
    const item: Item = createItem()
    const defaultStrategy = new DefaultStrategy();

    const result = defaultStrategy.matchesStrategy(item);

    expect(result).toBeFalsy();
  });
});
