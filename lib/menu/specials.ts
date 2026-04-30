import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Seasonal Specials",
  subtitle: "May Specials — limited-time favorites.",
  items: [
    // =========================
    // 🎉 CINCO DE MAYO SPECIALS
    // =========================
    {
      name: "Cactus Cooler",
      description:
        "Peach tea, pineapple, green apple, cucumber lime, tropical B12, mango aloe.",
      tags: ["Tea", "Cinco de Mayo", "May"],
    },
    {
      name: "Cha Cha Chai",
      description:
        "Vanilla protein, café latte protein, French vanilla protein, ground coffee, chai tea, caramel, sprinkles.",
      tags: ["Shake", "Cinco de Mayo", "May"],
    },

    // =========================
    // 🌸 MAY SPECIALS — TEAS
    // =========================
    {
      name: "Strawberry Dragonfruit",
      description:
        "Lemon tea, lemon lime B12, strawberry, lemonade, dehydrated dragonfruit, cranberry aloe.",
      tags: ["Tea", "May"],
    },
    {
      name: "In Bloom",
      description:
        "Pomegranate B12, raspberry tea, blueberry, cherry, cranberry aloe.",
      tags: ["Tea", "May"],
    },
    {
      name: "Sunshine",
      description:
        "Orange B12, peach tea, peach, coconut, lemonade, blue raspberry, mango aloe.",
      tags: ["Tea", "May"],
    },
    {
      name: "Spring Breeze",
      description:
        "Raspberry tea, pomegranate B12, cucumber, strawberry, cranberry aloe.",
      tags: ["Tea", "May"],
    },

    // =========================
    // 🌸 MAY SPECIALS — SHAKES
    // =========================
    {
      name: "Piña Colada",
      description:
        "Vanilla and piña colada protein, coconut extract, frozen pineapple.",
      tags: ["Shake", "May"],
    },
    {
      name: "Island Breeze",
      description:
        "Orange, vanilla protein, frozen mangoes and pineapple.",
      tags: ["Shake", "May"],
    },
    {
      name: "Monkey Bread",
      description:
        "Vanilla, dulce, and praline protein, cinnamon, caramel rim.",
      tags: ["Shake", "May"],
    },
    {
      name: "Honey Breeze",
      description:
        "Vanilla, French vanilla protein, lemon extract, honey drizzle.",
      tags: ["Shake", "May"],
    },

    // =========================
    // 🇺🇸 MEMORIAL DAY SPECIALS
    // =========================
    {
      name: "Patriotic Punch",
      description:
        "Razz tea, pomegranate B12, cherry lime, blue raspberry, cranberry aloe.",
      tags: ["Tea", "Memorial Day", "May"],
    },
    {
      name: "Freedom Shake",
      description:
        "Vanilla, French vanilla protein, lemon extract, blueberries.",
      tags: ["Shake", "Memorial Day", "May"],
    },

    // =========================
    // 🥧 PI DAY SPECIALS
    // =========================
    {
      name: "Apple Pie",
      description:
        "Vanilla, dulce, and pralines protein, apple pie spice, caramel drizzle, graham cracker.",
      tags: ["Shake", "Pi Day"],
    },
    {
      name: "Blueberry Pie",
      description:
        "Vanilla and French vanilla protein, blueberries, graham crackers.",
      tags: ["Shake", "Pi Day"],
    },
    {
      name: "French Silk Pie",
      description:
        "Chocolate, Dutch, and vanilla protein, chocolate drizzle, chocolate chips, graham cracker.",
      tags: ["Shake", "Pi Day"],
    },
    {
      name: "Key Lime Pie",
      description:
        "Vanilla and French vanilla protein, lime extract, graham crackers.",
      tags: ["Shake", "Pi Day"],
    },
    {
      name: "Banana Cream Pie",
      description:
        "Vanilla, French vanilla, and banana protein, caramel drizzle, graham crackers.",
      tags: ["Shake", "Pi Day"],
    },
    {
      name: "Pumpkin Pie",
      description:
        "Vanilla and pumpkin protein, cinnamon, caramel drizzle, graham crackers.",
      tags: ["Shake", "Pi Day"],
    },

    // =========================
    // ⭐ MAY THE 4TH SPECIALS
    // =========================
    {
      name: "Yoda",
      description:
        "Lemon lime B12, lemon tea, mango aloe, green apple, cucumber lime.",
      tags: ["Tea", "May the 4th", "May"],
    },
    {
      name: "Darth Vader",
      description:
        "Pomegranate B12, raspberry tea, cranberry aloe, grape, blue blast.",
      tags: ["Tea", "May the 4th", "May"],
    },
  ],
};