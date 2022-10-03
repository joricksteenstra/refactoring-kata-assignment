import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "../../../gilded-rose";
import {MAX_QUALITY_ITEM} from "../../../helpers/constants.helper";

export class AgedBrieStrategy implements InventoryStrategy {
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
    if (item.quality === MAX_QUALITY_ITEM) {
      return item.quality;
    }

    let updatedQuality = item.quality + 1;

    if (item.sellIn < 0) {
      updatedQuality++;
    }

    return (updatedQuality > MAX_QUALITY_ITEM) ? MAX_QUALITY_ITEM : updatedQuality;
  };

  matchesStrategy(item: Item): boolean {
    return item.name === "Aged Brie";
  }
}
