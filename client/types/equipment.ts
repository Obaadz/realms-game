import { Character } from "./character";
import { Item } from "./item";

export type Equipment = {
  _id: string;
  character: Character;
  head?: Item | string;
  chest?: Item | string;
  boot?: Item | string;
  weapon?: Item | string;
  backpack?: Item | string;
};
