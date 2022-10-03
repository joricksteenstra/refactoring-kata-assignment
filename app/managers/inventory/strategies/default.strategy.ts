import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class DefaultStrategy implements InventoryStrategy {
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
    let updatedQuality = item.quality - 1;

    if (item.sellIn < 0) {
      updatedQuality--
    }

    return (updatedQuality < 0) ? 0 : updatedQuality;
  };

  matchesStrategy(item: Item): boolean {
    return false;
  }
}
