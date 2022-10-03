import {InventoryStrategy} from "./inventory.strategy";
import {Item} from "@/gilded-rose";

export class ConjuredStrategy implements InventoryStrategy {
  getUpdatedItem(item: Item): Item {
    return {
      ...item,
      sellIn: item.sellIn - 1,
      quality: this.getUpdatedQualityOfItem(item)
    }
  }

  private getUpdatedQualityOfItem = (item: Item): number => {
    if (item.quality === 0) {
      return 0;
    }

    let updatedQuality = item.sellIn < 0 ? item.quality - 4 : item.quality - 2;

    return (updatedQuality < 0) ? 0 : updatedQuality;
  };

  matchesStrategy(item: Item): boolean {
    return item.name.toLowerCase().includes("conjured");
  }
}
