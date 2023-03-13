import { Equipment } from "./equipment";
import { Inventory } from "./inventory";
import { Race } from "./race";
import { State } from "./state";

export type Character = {
  _id: string;
  race: Race | string;
  name: string;
  description: string;
  image: string;
  experience: number;
  experience_percentage: number;
  level: number;
  state: State | string;
  inventory: Inventory | string;
  equipment: Equipment | string;
};
