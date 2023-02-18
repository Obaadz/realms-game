import mongoose from "mongoose";
import type { Character } from "../types/character";
import { User } from "../types/user";

export function getCharactersByUserId(userId: mongoose.Types.ObjectId) {}

export function insertCharacter(character: Character) {}

export function updateCharacter(character: Partial<Character>) {}
