import {InventoryStrategy} from "./inventory.strategy";
import {DefaultStrategy} from "./default.strategy";
import {Item} from "@/gilded-rose";

export class ConjuredStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: ConjuredStrategy.getUpdatedQualityOfItem(item)
    }
  }

  private static getUpdatedQualityOfItem(item: Item): number {
    if (item.quality === 0) {
      return 0;
    }

    if (item.sellIn < 0) {
      return (item.quality - 4) < 0 ? 0 : (item.quality - 4);
    }

    return (item.quality - 2) < 0 ? 0 : (item.quality - 2);
  }

  matchesStrategy(item: Item): boolean {
    return item.name.toLowerCase().includes("conjured");
  }
}
