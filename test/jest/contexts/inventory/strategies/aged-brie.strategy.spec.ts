import {Item, GildedRose} from '@/gilded-rose';
import {AgedBrieStrategy} from "@/contexts/inventory/strategies/aged-brie.strategy";

const createItem = (sellIn = 3, quality = 5) => {
  return {
    name: 'Aged Brie',
    sellIn: sellIn,
    quality: quality,
  }
}

describe('Aged Brie Strategy', () => {
  it('should decrement item sell in with 1', () => {
    const item: Item = createItem(2)
    const agedBrieStrategy = new AgedBrieStrategy();

    const updatedItem = agedBrieStrategy.getUpdatedItem(item);

    expect(updatedItem.sellIn).toBe(1);
  });

  it('should update quality of item correctly', () => {
    const dataSet = [
      {
        currentQuality: 50,
        expectedQuality: 50
      },
      {
        currentQuality: 0,
        expectedQuality: 0
      },
      {
        currentQuality: 49,
        expectedQuality: 50
      },
      {
        currentQuality: 50,
        expectedQuality: 50
      },
      {
        currentQuality: 50,
        expectedQuality: 50
      },
      {
        currentQuality: 50,
        expectedQuality: 50
      },

    ]

    dataSet.forEach((data) => {
      const item: Item = createItem(2, data.currentQuality)
      const agedBrieStrategy = new AgedBrieStrategy();

      const updatedItem = agedBrieStrategy.getUpdatedItem(item);

      expect(updatedItem.quality).toBe(data.expectedQuality);
    })
  });
});
