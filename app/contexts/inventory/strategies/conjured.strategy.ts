import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "../../../gilded-rose-refactored";
import {DefaultStrategy} from "./default.strategy";

export class ConjuredStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  getUpdatedQualityOfItem(item: Item): number {
    if (item.quality === 0) {
      return 0;
    }

    if (item.sellIn < 0) {
      return (item.quality - 4) < 0 ? 0 : (item.quality - 4);
    }

    return (item.quality - 2) < 0 ? 0 : (item.quality - 2);
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Conjured Mana Cake";
  }
}
