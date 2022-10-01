import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "../../../gilded-rose-refactored";

export class LegendaryStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  getUpdatedQualityOfItem(
    item: Item
  ): number {
      return item.quality
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }
}
