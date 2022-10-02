import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class DefaultStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: DefaultStrategy.getUpdatedQualityOfItem(item)
    }
  }

  private static getUpdatedQualityOfItem(
    item: Item
  ): number {
    if (item.quality === 0) {
      return 0;
    }

    if (item.sellIn < 0) {
       return (item.quality - 2) < 0 ? 0 : (item.quality - 2);
    }

    return (item.quality - 1) < 0 ? 0 : (item.quality - 1);
  }

  matchesStrategy(item: Item): boolean {
    return false;
  }
}
