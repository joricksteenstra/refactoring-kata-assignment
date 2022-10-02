import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class AgedBrieStrategy implements InventoryStrategy {

  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: AgedBrieStrategy.getUpdatedQualityOfItem(item)
    }
  }

  private static getUpdatedQualityOfItem(
    item: Item
  ): number {
    if (item.quality < 50) {
      if (item.sellIn < 0) {
        const updatedQuality = item.quality + 2;
        return updatedQuality < 50 ? updatedQuality : 50;
      }

      return item.quality + 1;
    }

    return 50;
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Aged Brie";
  }
}
