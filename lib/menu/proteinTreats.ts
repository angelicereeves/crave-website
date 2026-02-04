import type { MenuCategory } from "./types";

export const proteinTreats: MenuCategory = {
  id: "protein-treats",
  title: "Protein Treats",
  subtitle: "Bowls, waffles, and protein-friendly sweets.",
  items: [
    {
      name: "BUILD A Bowl",
      description:
        "Select your favorite shake, add 3 toppings, comes with granola.",
      tags: ["Protein Bowls"],
    },
    {
      name: "Berry Blast*",
      description:
        "Vanilla/cookies & cream soy isolate protein topped with fresh strawberries, blueberries, granola, chia seeds, coconut, honey, almonds.",
      tags: ["Protein Bowls"],
    },
    {
      name: "Chunky Monkey*",
      description:
        "Chocolate/banana soy isolate protein topped with granola, chunky peanut butter, chocolate chips, chocolate drizzle, chia seeds, fresh banana.",
      tags: ["Protein Bowls"],
    },
    {
      name: "Dark Dream",
      description:
        "Chocolate protein base with dark chocolate chips, powdered sugar, strawberries, chocolate drizzle, whipped cream.",
      tags: ["Waffles"],
    },
    {
      name: "Classic",
      description:
        "Vanilla protein base with powdered sugar and strawberries.",
      tags: ["Waffles"],
    },
    {
      name: "Banana Nut*",
      description:
        "Vanilla protein base with banana, walnuts, pecans, coconut flakes, caramel drizzle, whipped cream, and cinnamon.",
      tags: ["Waffles"],
    },
    {
      name: "The Everything Waffle*",
      description:
        "Vanilla protein base with strawberries, banana, blueberries, coconut flakes, almonds, chocolate drizzle, caramel drizzle, powdered sugar, and whipped cream.",
      tags: ["Waffles"],
    },
    {
      name: "Protein Donuts",
      description:
        "1 donut = 120 calories, 9g protein, 1.7g fat, 16g carbs, 2g sugar.",
      tags: ["Protein Donuts"],
    },
    {
      name: "Protein Balls",
      description:
        "Gluten/dairy free. 1 ball = 90 calories, 4g protein, 5g fat, 6g carbs.",
      tags: ["Protein Balls"],
    },
  ],
};
