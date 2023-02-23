import { LEVELS } from "../index";

export default (totalExp: number) => {
  return LEVELS.findIndex((totalExpNeeded) => totalExpNeeded > totalExp) - 1;
};
