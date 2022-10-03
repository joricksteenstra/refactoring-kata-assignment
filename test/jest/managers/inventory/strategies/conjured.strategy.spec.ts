import {Item} from '@/gilded-rose';
import {ConjuredStrategy} from "@/managers/inventory/strategies/conjured.strategy";

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
    expectedQuality: 0
  },
  {
    currentQuality: 2,
    sellIn: 0,
    expectedQuality: 0
  },
  {
    currentQuality: 5,
    sellIn: -1,
    expectedQuality: 1
  },
  {
    currentQuality: 3,
    sellIn: -1,
    expectedQuality: 0
  },
  {
    currentQuality: 1,
    sellIn: 1,
    expectedQuality: 0
  },
]

describe('Conjured Strategy', () => {
  describe.each(dataSet)(`test getUpdatedItem when`, (data) => {
    it(`current quality ${data.currentQuality} should result in ${data.expectedQuality}`, () => {
      const item: Item = createItem(data.sellIn ?? 2, data.currentQuality)
      const conjureStrategy = new ConjuredStrategy();

      const updatedItem = conjureStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    });
  });

  it('should decrement item sell in with 1', () => {
    const item: Item = createItem(2)
    const conjureStrategy = new ConjuredStrategy();

    const updatedItem = conjureStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(1);
  });

  it('it matches strategy when conjured is included in the name', () => {
    const item: Item = createItem(2,1, "Conjured Cake")
    const conjureStrategy = new ConjuredStrategy();

    const result = conjureStrategy.matchesStrategy(item);

    expect(result).toBeTruthy();
  });

  it('it does not matches strategy when name is wrong', () => {
    const item: Item = createItem(2,1, "wrong")
    const conjureStrategy = new ConjuredStrategy();

    const result = conjureStrategy.matchesStrategy(item);

    expect(result).toBeFalsy();
  });
});
