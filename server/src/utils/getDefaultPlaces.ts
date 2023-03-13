import { insertInventory } from "../services/inventory";
import { Place } from "../types/place";

export default async (): Promise<{ [key: string]: Place }> => ({
  townHall: {
    name: "قاعة المدينة",
    type: "townHall",
    description:
      "المركز الرئيسي للمدينه, تستطيع رفع مستوى المدينه ومستوى المباني الاخرى من هنا او تحديد ما سيتم بناءه لاحقا",
    image: "ABGDHOZ",
    location: { x: 0, y: 0 },
    level: 1,
    requirements: [
      {
        forLevel: 1,
        neededItems: [],
        newEffect: { type: "زيادة حد البناء", value: "10" },
      },
    ],
    inventory: (await insertInventory({ max: undefined }))._id,
    effect: { type: "زيادة حد البناء", value: "5" },
  },
});
