import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "../../../gilded-rose-refactored";

export class AgedBrieStrategy implements InventoryStrategy {

  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  private getUpdatedQualityOfItem(
    item: Item
  ): number {
    if (item.quality < 50) {
      if (item.sellIn < 0) {
        return item.quality + 2
      }

      return item.quality + 1
    }

    return 50;
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Aged Brie";
  }
}
