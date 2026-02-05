import type { MenuCategory } from "./types";

export const specialtyTeas: MenuCategory = {
  id: "specialty-teas",
  title: "Specialty Teas",
  subtitle: "Enhanced teas with boosters and bold flavors.",
    sizes: [
    { label: "Medium", volume: "24 oz" },
    { label: "Large", volume: "32 oz" },
  ],
  items: [
    {
      name: "Books and Roses",
      description:
        "Pomegranate B12, raspberry tea, strawberry, pineapple, collagen, cranberry aloe",
      tags: ["Special-Teas"],
    },
    {
      name: "Pretty Young Thing",
      description:
        "Peach tea, orange liftoff, collagen, peach mango protein",
      tags: ["Special-Teas"],
    },
    {
      name: "Give Me Life",
      description:
        "Lemon tea, orange liftoff, H3O, vitamin C booster",
      tags: ["Special-Teas"],
    },
    {
      name: "Pink Starburst",
      description:
        "Raspberry tea, pomegranate liftoff, collagen, peach mango protein",
      tags: ["Special-Teas"],
    },
    {
      name: "Just Peachy",
      description:
        "Peach tea, orange liftoff, peach mango beverage mix, collagen",
      tags: ["Special-Teas"],
    },
    {
      name: "Hakuna Matata",
      description:
        "Original tea, lime liftoff, pineapple, tropical fruit, blue blast, H3O",
      tags: ["Special-Teas"],
    },
    {
      name: "Fruit Roll-Up",
      description:
        "Raspberry tea, orange liftoff, strawberry, blue blast, H3O",
      tags: ["Special-Teas"],
    },
  ],
};
