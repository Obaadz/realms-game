import { ERROR_MESSAGES } from "../types/enums";
import { IStateDocument, State } from "../types/state";
import StateModel from "../models/state";
import { FilterQuery } from "mongoose";

export async function findState(
  query: FilterQuery<IStateDocument>,
  selectedItems?: string | string[]
) {
  const dbState: IStateDocument = await StateModel.findOne(query).select(
    selectedItems ? selectedItems : undefined
  );

  if (!dbState) throw new Error(ERROR_MESSAGES.ERROR_ON_FINDING_STATE);

  return dbState;
}

export async function insertState(state: State) {
  const dbState: IStateDocument = new StateModel<State>({
    ...state,
  });

  await dbState.save();

  return findState({ _id: dbState._id }, ["-_id"]);
}

export async function updateState(state: Partial<IStateDocument>) {
  await StateModel.updateOne({ _id: state._id }, { $set: { ...state } });

  return true;
}

export async function deleteState(state: Partial<IStateDocument>) {
  await StateModel.updateOne({ _id: state._id }, { $unset: { _id: 1 } });

  return true;
}
