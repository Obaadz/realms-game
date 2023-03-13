import { Document, Types } from "mongoose";
import { Character } from "./character";
import { Item } from "./item";

export type Equipment = {
  character: Character;
  head?: Item | Types.ObjectId;
  chest?: Item | Types.ObjectId;
  boot?: Item | Types.ObjectId;
  weapon?: Item | Types.ObjectId;
  backpack?: Item | Types.ObjectId;
};

export interface IEquipmentDocument extends Document, Equipment {}
