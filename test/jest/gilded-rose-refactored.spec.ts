import {GildedRose, Item} from "@/gilded-rose";

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Conjured Mana Cake", 3, 6)
];

describe('Gilded Rose Functional Test', () => {
  it('should update quality of items', () => {
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();

    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(19);
    expect(gildedRose.items[1].sellIn).toBe(1);
    expect(gildedRose.items[1].quality).toBe(1);
    expect(gildedRose.items[2].sellIn).toBe(4);
    expect(gildedRose.items[2].quality).toBe(6);
    expect(gildedRose.items[3].sellIn).toBe(0);
    expect(gildedRose.items[3].quality).toBe(80);
    expect(gildedRose.items[4].sellIn).toBe(14);
    expect(gildedRose.items[4].quality).toBe(21);
    expect(gildedRose.items[5].sellIn).toBe(2);
    expect(gildedRose.items[5].quality).toBe(4);
  });
});
