import { Character } from "./character";
import { Item } from "./item";

export type Equipment = {
  character: Character;
  head?: Item;
  chest?: Item;
  boot?: Item;
  weapon?: Item;
  backpack?: Item;
};
