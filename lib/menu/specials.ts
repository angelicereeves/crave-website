import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Monthly Specials",
  subtitle: "March Specials — limited-time favorites.",
  items: [
    // =========================
    // MARCH SPECIALS — SHAKES
    // =========================
    {
      name: "Birthday Cake Oreo",
      description:
        "Vanilla, french vanilla, cookies n’ cream, oreos, graham crackers, sprinkles.",
      tags: ["Shake", "March"],
    },
    {
      name: "Key Lime Pie",
      description:
        "Vanilla, french vanilla, lime extract, graham crackers, whipped cream.",
      tags: ["Shake", "March"],
    },
    {
      name: "Irish Mudslide",
      description:
        "Chocolate, cookies n cream, and mint chip protein, oreos, chocolate chips, chocolate drizzle.",
      tags: ["Shake", "March"],
    },
    {
      name: "Rainbow Sherbert",
      description:
        "Strawberry cheesecake, orange cream, vanilla protein, lime extract, strawberries, sprinkles.",
      tags: ["Shake", "March"],
    },

    // =========================
    // MARCH SPECIALS — TEAS
    // =========================
    {
      name: "Spring Break",
      description:
        "Cucumber lime, orange, raspberry, lemon tea, cranberry aloe, lemon b12.",
      tags: ["Tea", "March"],
    },
    {
      name: "Pixie Stick",
      description:
        "Strawberry, watermelon, blue raspberry, raspberry tea, cranberry aloe, pomegranate b12.",
      tags: ["Tea", "March"],
    },
    {
      name: "Emerald Isle",
      description:
        "Blue blast, green apple, melon, cucumber, lemon tea, cranberry aloe, lemon lime b12.",
      tags: ["Tea", "March"],
    },
    {
      name: "March Margarita",
      description:
        "Orange, peach, raspberry, cherry, raspberry tea, cranberry aloe, pomegranate b12.",
      tags: ["Tea", "March"],
    },

    // ==================================
    // SAINT PATRICK’S DAY — LIMITED TIME
    // ==================================
    {
      name: "Shamrock Shake",
      description:
        "Vanilla, mint chip protein, sf chocolate drizzle, choco chips, oreos.",
      tags: ["Shake", "St. Patrick’s"],
    },
    {
      name: "Lucky Charms",
      description:
        "Vanilla, french vanilla protein, marshmallow, lucky charm cereal.",
      tags: ["Shake", "St. Patrick’s"],
    },
    {
      name: "Lucky Leprechaun",
      description:
        "Lemon tea, cranberry aloe, cucumber lime, pineapple, green apple, lemon b12.",
      tags: ["Tea", "St. Patrick’s"],
    },
    {
      name: "Rainbows End",
      description:
        "Peach tea, orange b12, strawberry, blue razzz, pineapple, cranberry aloe.",
      tags: ["Tea", "St. Patrick’s"],
    },
    {
      name: "Clover Tea",
      description:
        "Raspberry tea, lavender lemon, green apple, mango aloe, tropical b12.",
      tags: ["Tea", "St. Patrick’s"],
    },

    // =========================
    // MARCH MADNESS SPECIALS
    // =========================
    {
      name: "Nothin' But Net",
      description:
        "Strawberry, pineapple, coconut, original tea, tropical b12, mango aloe.",
      tags: ["Tea", "March Madness"],
    },
    {
      name: "Three Pointer",
      description:
        "Chocolate & dutch protein, caramel rim, choco chips, whipped cream.",
      tags: ["Shake", "March Madness"],
    },
    {
      name: "Melon Madness",
      description:
        "Melon, watermelon, peach tea, orange b12, mango aloe.",
      tags: ["Tea", "March Madness"],
    },
    {
      name: "Courtside Crunch",
      description:
        "Vanilla & cookies n’ cream protein, oreos, M&M’s, whipped cream.",
      tags: ["Shake", "March Madness"],
    },
    {
      name: "Pregame Punch",
      description:
        "Pomegranate, raspberry, lemonade, raspberry tea, pomegranate b12, cranberry aloe.",
      tags: ["Tea", "March Madness"],
    },
    {
      name: "Baller Berry",
      description:
        "Vanilla & mango protein, strawberries, mango.",
      tags: ["Shake", "March Madness"],
    },
  ],
};