import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class LegendaryStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return item;
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }
}
