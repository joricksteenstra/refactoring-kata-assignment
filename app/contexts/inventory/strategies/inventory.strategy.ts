import {Item} from "@/gilded-rose";


export interface InventoryStrategy {
  getUpdatedItem(item: Item): Item
  matchesStrategy(item: Item): boolean
}
