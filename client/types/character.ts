import { Equipment } from "./equipment";
import { Inventory } from "./inventory";
import { Race } from "./race";
import { State } from "./state";

export type Character = {
  race: Race;
  name: string;
  description: string;
  image: String;
  state: State;
  inventory: Inventory;
  equipment: Equipment;
};
