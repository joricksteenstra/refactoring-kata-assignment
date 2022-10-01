import {Item} from "../../gilded-rose-refactored";
import {InventoryStrategy} from "./strategies/inventory.strategy";
import {AgedBrieStrategy} from "./strategies/aged-brie.strategy";
import {DefaultStrategy} from "./strategies/default.strategy";
import {BackstagePassesStrategy} from "./strategies/backstage-passes.strategy";
import {ConjuredStrategy} from "./strategies/conjured.strategy";
import {LegendaryStrategy} from "./strategies/legendary.strategy";

export class InventoryContext {
  private inventoryStrategy: InventoryStrategy;
  private customQualityStrategies: InventoryStrategy[] = [
    new AgedBrieStrategy(),
    new BackstagePassesStrategy(),
    new ConjuredStrategy(),
    new LegendaryStrategy()
  ];

  constructor(item: Item) {
    this.inventoryStrategy = this.getStrategy(item)
  }

  public updateQuality(item: Item): Item {
    return this.inventoryStrategy.getUpdatedItem(item)
  }

  private getStrategy(item: Item) {
    for (const strategy of this.customQualityStrategies) {
      if (strategy.matchesStrategy(item)) {
        return strategy
      }
    }

    return new DefaultStrategy()
  }
}
