import {Item} from "../../../gilded-rose-refactored";
import {InventoryStrategy} from "./inventory.strategy";

export class BackstagePassesStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  getUpdatedQualityOfItem(
    item: Item
  ): number {
    if (item.sellIn < 0) {
      return 0;
    }

    if (item.sellIn < 6) {
      const quality = item.quality + 3;
      return quality < 50 ? quality : 50;
    }

    if (item.sellIn < 11) {
      const quality = item.quality + 3;
      return quality < 50 ? quality : 50;
    }

    return (item.quality + 1) < 50 ? item.quality + 1 : 50;
  }

  matchesStrategy(item: Item): boolean {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
  }
}
