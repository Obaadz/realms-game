import { LEVELS } from "../index";

export default (totalExperience: number, level: number) => {
  const experiencePercentage =
    (totalExperience - LEVELS[level]) / (LEVELS[level + 1] - LEVELS[level]);
  return experiencePercentage >= 0 && experiencePercentage <= 1
    ? experiencePercentage
    : 0;
};
