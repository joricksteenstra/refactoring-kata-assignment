import {Item} from "@/gilded-rose-refactored";
import {InventoryStrategy} from "./strategies/inventory.strategy";
import {AgedBrieStrategy} from "./strategies/aged-brie.strategy";
import {DefaultStrategy} from "./strategies/default.strategy";
import {BackstagePassesStrategy} from "./strategies/backstage-passes.strategy";
import {ConjuredStrategy} from "./strategies/conjured.strategy";
import {LegendaryStrategy} from "./strategies/legendary.strategy";

export class InventoryContext {
  private readonly inventoryStrategy: InventoryStrategy;
  private customQualityStrategies: InventoryStrategy[] = [
    new AgedBrieStrategy(),
    new BackstagePassesStrategy(),
    new ConjuredStrategy(),
    new LegendaryStrategy()
  ];

  constructor(item: Item) {
    this.inventoryStrategy = this.getStrategyForItem(item);
  }

  public updateQuality(item: Item): Item {
    return this.getInventoryStrategy().getUpdatedItem(item);
  }

  public getInventoryStrategy(): InventoryStrategy {
    return this.inventoryStrategy;
  }

  private getStrategyForItem(item: Item) {
    for (const strategy of this.customQualityStrategies) {
      if (strategy.matchesStrategy(item)) {
        return strategy;
      }
    }

    return new DefaultStrategy()
  }
}
