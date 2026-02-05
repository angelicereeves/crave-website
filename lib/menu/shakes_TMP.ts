import type { MenuCategory } from "./types";

export const shakes: MenuCategory = {
  id: "shakes",
  title: "Shakes",
  subtitle: "Dessert-inspired, protein-packed favorites.",

  // ✅ Shake sizes (data only)
  sizes: [
    { label: "Small", volume: "16 oz" },
    { label: "Medium", volume: "24 oz" },
    { label: "Large", volume: "32 oz" },
  ],

  items: [
    {
      name: "Oreo Java Chip",
      description:
        "Cafe latte, chocolate, and cookies & cream protein blended with fresh ground coffee and chocolate chips. Garnished with a sugar-free chocolate rim, Oreos, and sugar-free whipped cream.",
      tags: ["Coffee"],
    },
    {
      name: "Peppermint Mocha",
      description:
        "Cafe latte, chocolate, and mint protein blended with ground coffee. Garnished with sugar-free chocolate drizzle, peppermint bark, and chocolate chips.",
      tags: ["Coffee"],
    },
    {
      name: "German Chocolate Cake*",
      description:
        "Chocolate and Dutch chocolate protein base. Garnished with sugar-free caramel drizzle, pecans, and coconut flakes.",
      tags: ["Chocolate"],
    },
    {
      name: "Ultimate Brownie",
      description:
        "Chocolate and Dutch chocolate protein base. Garnished with sugar-free chocolate drizzle, chocolate chips, and confetti sprinkles.",
      tags: ["Chocolate"],
    },
    {
      name: "Monster Cookie",
      description:
        "Chocolate and cookies & cream protein base. Garnished with rolled oats, M&M’s, and sugar-free caramel drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "S'mores",
      description:
        "Chocolate and Dutch chocolate protein base. Garnished with marshmallow, graham cracker, and chocolate chips.",
      tags: ["Chocolate"],
    },
    {
      name: "Rocky Road*",
      description:
        "Chocolate and Dutch chocolate protein base. Garnished with peanuts, chocolate chips, marshmallow, and sugar-free chocolate drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Mint Chocolate Chip",
      description:
        "Chocolate and mint protein base. Garnished with sugar-free chocolate drizzle, Oreo, and chocolate chips.",
      tags: ["Chocolate"],
    },
    {
      name: "Snickers Bar*",
      description:
        "Chocolate, peanut, cookies & cream, and dulce de leche protein base. Garnished with peanuts, chocolate chips, and sugar-free caramel drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "PB Banana Chocolate*",
      description:
        "Chocolate, peanut, and banana protein base. Garnished with sugar-free chocolate drizzle and peanuts.",
      tags: ["Peanut Butter"],
    },
    {
      name: "Banana Split*",
      description:
        "Chocolate, vanilla, and banana protein base. Garnished with peanuts, sugar-free chocolate drizzle, whipped cream, and a fresh strawberry.",
      tags: ["Chocolate"],
    },

    // ⬇️ rest of your items stay exactly the same
  ],
};
