import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class LegendaryStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      quality: LegendaryStrategy.getUpdatedQualityOfItem(item)
    }
  }

  private static getUpdatedQualityOfItem(
    item: Item
  ): number {
      return item.quality;
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }
}
