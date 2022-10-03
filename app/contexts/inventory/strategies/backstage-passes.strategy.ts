import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "../../../gilded-rose";
import {MAX_QUALITY_ITEM} from "../../../helpers/constants.helper";

export class BackstagePassesStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  private getUpdatedQualityOfItem = (
    item: Item
  ): number => {
    if (item.sellIn < 0) {
      return 0;
    }

    let updatedQuality = item.quality + 1;

    if (item.sellIn < 11) {
      updatedQuality++;
    }

    if (item.sellIn < 6) {
      updatedQuality++;
    }

    return (updatedQuality < MAX_QUALITY_ITEM) ? updatedQuality : MAX_QUALITY_ITEM;
  };

  matchesStrategy(item: Item): boolean {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }
}
