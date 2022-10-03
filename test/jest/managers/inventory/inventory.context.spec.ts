import {Item} from '@/gilded-rose';
import {DefaultStrategy} from "@/managers/inventory/strategies/default.strategy";
import {InventoryManager} from "@/managers/inventory/inventory.manager";
import {ConjuredStrategy} from "@/managers/inventory/strategies/conjured.strategy";

const createItem = (sellIn = 3, quality = 5, name = "Conjured Mana Cake") => {
  return {
    name,
    sellIn,
    quality,
  }
}

describe('Inventory Context', () => {
  it('sets strategy to default', () => {
    const item: Item = createItem(2,1, "tdfsa")
    const inventoryContext = new InventoryManager(item);

    const inventoryStrategy = inventoryContext.getInventoryStrategy();

    expect(inventoryStrategy).toBeInstanceOf(DefaultStrategy);
  });

  it('sets strategy to conjured when it matches', () => {
    const item: Item = createItem(2,1, "Conjured")
    const inventoryContext = new InventoryManager(item);

    const inventoryStrategy = inventoryContext.getInventoryStrategy();

    expect(inventoryStrategy).toBeInstanceOf(ConjuredStrategy);
  });
});
