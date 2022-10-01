import {Item} from "../../../gilded-rose-refactored"

export interface InventoryStrategy {
  getUpdatedItem(item: Item): Item
  matchesStrategy(item: Item): boolean
}
