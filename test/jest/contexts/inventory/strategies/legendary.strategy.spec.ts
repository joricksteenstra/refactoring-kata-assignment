import {Item} from '@/gilded-rose';
import {LegendaryStrategy} from "@/contexts/inventory/strategies/legendary.strategy";

const createItem = (sellIn = 3, quality = 5, name = "Sulfuras, Hand of Ragnaros") => {
  return {
    name,
    sellIn,
    quality,
  }
}

const dataSet = [
  {
    currentQuality: 2,
    sellIn: 55,
    expectedQuality: 2
  },
  {
    currentQuality: 5,
    sellIn: 80,
    expectedQuality: 5
  },
]

describe('Legendary Strategy', () => {
  describe.each(dataSet)(`test getUpdatedItem when`, (data) => {
    it(`current quality ${data.currentQuality} should result in ${data.expectedQuality}`, () => {
      const item: Item = createItem(data.sellIn ?? 2, data.currentQuality)
      const legendaryStrategy = new LegendaryStrategy();

      const updatedItem = legendaryStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    });
  });

  it('should not decrement sell in', () => {
    const item: Item = createItem(2)
    const legendaryStrategy = new LegendaryStrategy();

    const updatedItem = legendaryStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(2);
  });

  it('matches strategy', () => {
    const item: Item = createItem(1,1, 'Sulfuras, Hand of Ragnaros')
    const legendaryStrategy = new LegendaryStrategy();

    const result = legendaryStrategy.matchesStrategy(item);

    expect(result).toBeTruthy();
  });

  it('does not matches strategy', () => {
    const item: Item = createItem(1,1, 'Sulf123uras, Hand of Ragnaros')
    const legendaryStrategy = new LegendaryStrategy();

    const result = legendaryStrategy.matchesStrategy(item);

    expect(result).toBeFalsy();
  });
});
