import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Monthly Specials",
  subtitle: "November Specials — limited-time favorites.",

  items: [
    // =========================
    // 🍁 NOVEMBER SPECIALS — SHAKES
    // =========================
    {
      name: "Pumpkin Caramel Brownie",
      description:
        "Pumpkin spice, chocolate, and Dutch chocolate protein, chocolate chips, caramel drizzle, pumpkin drizzle.",
      tags: ["Shake", "November"],
    },
    {
      name: "Blackberry Cobbler",
      description:
        "Vanilla, French vanilla protein, frozen blackberries, graham crackers.",
      tags: ["Shake", "November"],
    },
    {
      name: "Salted Peppermint Pretzel",
      description:
        "Vanilla, French vanilla protein, peppermint extract, chocolate drizzle, peppermint flakes, pretzels.",
      tags: ["Shake", "November"],
    },
    {
      name: "White Chocolate Maple",
      description:
        "Vanilla, French vanilla, maple extract, white chocolate chips, caramel drizzle.",
      tags: ["Shake", "November"],
    },

    // =========================
    // 🍁 NOVEMBER SPECIALS — TEAS
    // =========================
    {
      name: "Harvest Punch",
      description:
        "Peach tea, tropical fruit, piña colada, orange pineapple, pomegranate B12, mango aloe.",
      tags: ["Tea", "Refresher", "November"],
    },
    {
      name: "Cranberry Sangria",
      description:
        "Raspberry tea, cranberry, passion fruit, strawberry, orange B12, cranberry aloe.",
      tags: ["Tea", "Refresher", "November"],
    },
    {
      name: "Spiced Candy Apple",
      description:
        "Chai tea, pomegranate, green apple, lemon lime B12, cranberry aloe.",
      tags: ["Tea", "Refresher", "November"],
    },
    {
      name: "Peach Crisp",
      description:
        "Peach tea, peach, raspberry, tropical B12, mango aloe.",
      tags: ["Tea", "Refresher", "November"],
    },

    // =========================
    // 🦃 THANKSGIVING SPECIALS — TEAS
    // =========================
    {
      name: "Cranberry Jam",
      description:
        "Raspberry tea, pomegranate, cranberry, piña colada, cranberry aloe, pomegranate B12.",
      tags: ["Tea", "Refresher", "Thanksgiving", "November"],
    },
    {
      name: "Black Friday",
      description:
        "Raspberry tea, cherry, grape, strawberry, blue raspberry, cranberry aloe, pomegranate B12.",
      tags: ["Tea", "Refresher", "Thanksgiving", "November"],
    },
    {
      name: "Bonfire",
      description:
        "Peach tea, melon, pineapple, tropical fruit, mango aloe, orange B12.",
      tags: ["Tea", "Refresher", "Thanksgiving", "November"],
    },
    {
      name: "Turkey Trot",
      description:
        "Lemon tea, blue blast, green apple, dragonfruit, cranberry aloe, lemon lime B12.",
      tags: ["Tea", "Refresher", "Thanksgiving", "November"],
    },

    // =========================
    // 🦃 THANKSGIVING SPECIALS — SHAKES
    // =========================
    {
      name: "Carrot Cake",
      description:
        "Vanilla, French vanilla protein, graham crackers, coconut flakes, cinnamon.",
      tags: ["Shake", "Thanksgiving", "November"],
    },
    {
      name: "Pumpkin B-Day Cake",
      description:
        "Pumpkin, French vanilla, vanilla protein, pumpkin drizzle, cinnamon, sprinkles.",
      tags: ["Shake", "Thanksgiving", "November"],
    },
    {
      name: "Apple Pie",
      description:
        "Vanilla, dulce, and praline protein, apple pie spice, graham crackers, caramel drizzle.",
      tags: ["Shake", "Thanksgiving", "November"],
    },
    {
      name: "PB Cookie Dough",
      description:
        "Peanut cookie, cookies n cream, vanilla protein, peanut butter, chocolate drizzle, graham cracker, chocolate chips.",
      tags: ["Shake", "Thanksgiving", "November"],
    },

    // =========================
    // 🍁 FALL SPECIALS — TEAS
    // =========================
    {
      name: "Autumn Breeze",
      description:
        "Orange B12, raspberry tea, pineapple, cherry lime, mango aloe.",
      tags: ["Tea", "Refresher", "Fall", "November"],
    },
    {
      name: "Caramel Apple",
      description:
        "Pomegranate B12, cinnamon tea, green apple, cranberry aloe, sucker.",
      tags: ["Tea", "Refresher", "Fall", "November"],
    },
    {
      name: "Spiced Sangria",
      description:
        "Orange B12, chai tea, blueberry, orange pineapple, mango aloe.",
      tags: ["Tea", "Refresher", "Fall", "November"],
    },
    {
      name: "Fall-Ada",
      description:
        "Tropical B12, peach tea, blackberry, peach, lemonade, cranberry aloe.",
      tags: ["Tea", "Refresher", "Fall", "November"],
    },
    {
      name: "Sweater Weather",
      description:
        "Pomegranate B12, original tea, rainbow candy, blue blast, cranberry aloe.",
      tags: ["Tea", "Refresher", "Fall", "November"],
    },

    // =========================
    // 🍁 FALL SPECIALS — SHAKES
    // =========================
    {
      name: "Pumpkin Banana Bread",
      description:
        "Vanilla, banana, pumpkin spice protein, cinnamon, pumpkin spice drizzle.",
      tags: ["Shake", "Fall", "November"],
    },
    {
      name: "Pumpkin Pie",
      description:
        "Vanilla, pumpkin spice protein, graham cracker, pumpkin spice drizzle, cinnamon.",
      tags: ["Shake", "Fall", "November"],
    },
    {
      name: "PB Smores",
      description:
        "Dutch and chocolate protein, marshmallow, sugar-free s'mores syrup, peanut butter, chocolate chips, sugar-free chocolate drizzle, graham cracker.",
      tags: ["Shake", "Fall", "November"],
    },
    {
      name: "Pumpkin Oreo Crumble",
      description:
        "Cookies n cream, vanilla, pumpkin spice, Oreo, sugar-free chocolate and pumpkin drizzle.",
      tags: ["Shake", "Fall", "November"],
    },
    {
      name: "Pecan Pie",
      description:
        "2 dulce, 2 vanilla, pecans, graham cracker, caramel drizzle.",
      tags: ["Shake", "Fall", "November"],
    },

    // =========================
    // ☕ FALL SPECIALS — COFFEE
    // =========================
    {
      name: "Pumpkin Spice Frappe",
      description:
        "2 vanilla, 1 cafe latte, 1 pumpkin spice, ground coffee, cinnamon, whipped cream.",
      tags: ["Coffee", "Frappe", "Fall", "November"],
    },
    {
      name: "Pumpkin Spice Hot/Iced",
      description:
        "2 house blend, 1 pumpkin spice, cinnamon, whipped cream.",
      tags: ["Coffee", "Hot/Iced", "Fall", "November"],
    },
    {
      name: "Hazel Nut Iced Latte",
      description:
        "2 house blend, 1 cafe latte, hazelnut sugar-free syrup, whipped cream.",
      tags: ["Coffee", "Iced", "Fall", "November"],
    },
    {
      name: "Salted Caramel Mocha Frappe",
      description:
        "2 cafe latte, 2 chocolate, ground coffee, sugar-free caramel syrup, sugar-free mocha, Himalayan salt, whipped cream.",
      tags: ["Coffee", "Frappe", "Fall", "November"],
    },
    {
      name: "Salted Caramel Mocha Hot/Iced",
      description:
        "2 mocha coffee, 1 cafe latte, sugar-free caramel syrup, Himalayan salt, whipped cream.",
      tags: ["Coffee", "Hot/Iced", "Fall", "November"],
    },
    {
      name: "Snickerdoodle Latte",
      description:
        "Banana caramel, peanut cookie protein, house blend, cinnamon, sugar-free caramel.",
      tags: ["Coffee", "Latte", "Fall", "November"],
    },
  ],
};