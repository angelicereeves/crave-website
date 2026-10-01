import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Monthly Specials",
  subtitle: "October Specials — limited-time favorites.",
  items: [
  // =========================
  // 🎀 PINKTOBER SPECIALS — TEAS
  // =========================

  {
    name: "Survivor",
    description:
      "Peach tea, piña colada, strawberry kiwi, tropical B12, mango aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  {
    name: "Save The Ta-Ta’s",
    description:
      "Original tea, rainbow candy, pomegranate, cranberry, pomegranate B12, cranberry aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  {
    name: "Stronger Together",
    description:
      "Raspberry tea, cherry lime, orange, melon, orange B12, cranberry aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  {
    name: "Pink Ice",
    description:
      "Raspberry tea, raspberry, cucumber lime, lemon B12, cranberry aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  {
    name: "Fight Like A Girl",
    description:
      "Peach tea, strawberry, coconut, mango, tropical B12, mango aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  {
    name: "Think Pink",
    description:
      "Lemon tea, watermelon, rainbow candy, pomegranate B12, cranberry aloe.",
    tags: ["Tea", "Refresher", "Pinktober", "October"],
  },

  // =========================
  // 🎃 HALLOWEEN SPECIALS — SHAKES
  // =========================

  {
    name: "Count Chocula",
    description:
      "Chocolate and Dutch chocolate protein, chocolate chips, raspberry, chocolate drizzle.",
    tags: ["Shake", "Halloween", "October"],
  },

  {
    name: "Boo Berry",
    description:
      "Vanilla, mango pineapple, and banana protein, strawberries, blueberries, marshmallow ghost.",
    tags: ["Shake", "Halloween", "October"],
  },

  {
    name: "Cookies N Scream",
    description:
      "Vanilla, cookies n cream, Oreos, sprinkles, chocolate drizzle, marshmallow ghost.",
    tags: ["Shake", "Halloween", "October"],
  },

  {
    name: "Spooky Snickers",
    description:
      "Chocolate, dulce, cookies n cream, and peanut cookie protein, peanut butter, marshmallow ghost, peanuts, chocolate chips, chocolate and caramel drizzle.",
    tags: ["Shake", "Halloween", "October"],
  },

  // =========================
  // 👻 HALLOWEEN SPECIALS — TEAS
  // =========================

  {
    name: "Berry Bloody",
    description:
      "Raspberry tea, cherry lime, blackberry, rainbow candy, pomegranate B12, cranberry aloe, gummy eyeball.",
    tags: ["Tea", "Refresher", "Halloween", "October"],
  },

  {
    name: "Hocus Pocus",
    description:
      "Peach tea, pomegranate, pineapple, cranberry, tropical B12, mango aloe.",
    tags: ["Tea", "Refresher", "Halloween", "October"],
  },

  {
    name: "Monster Mash",
    description:
      "Lemon tea, green apple, lemon B12, cranberry aloe, layered grape.",
    tags: ["Tea", "Refresher", "Halloween", "October"],
  },

  {
    name: "Witches Brew",
    description:
      "Raspberry tea, blackberry, orange, passionfruit, orange B12, mango aloe.",
    tags: ["Tea", "Refresher", "Halloween", "October"],
  },

  // =========================
  // 🍁 FALL SPECIALS — TEAS
  // =========================

  {
    name: "Autumn Breeze",
    description:
      "Orange B12, raspberry tea, pineapple, cherry lime, mango aloe.",
    tags: ["Tea", "Refresher", "Fall", "October"],
  },

  {
    name: "Caramel Apple",
    description:
      "Pomegranate B12, cinnamon tea, green apple, cranberry aloe, sucker.",
    tags: ["Tea", "Refresher", "Fall", "October"],
  },

  {
    name: "Spiced Sangria",
    description:
      "Orange B12, chai tea, blueberry, orange pineapple, mango aloe.",
    tags: ["Tea", "Refresher", "Fall", "October"],
  },

  {
    name: "Fall-Ada",
    description:
      "Tropical B12, peach tea, blackberry, peach, lemonade, cranberry aloe.",
    tags: ["Tea", "Refresher", "Fall", "October"],
  },

  {
    name: "Sweater Weather",
    description:
      "Pomegranate B12, original tea, rainbow candy, blue blast, cranberry aloe.",
    tags: ["Tea", "Refresher", "Fall", "October"],
  },

  // =========================
  // 🍁 FALL SPECIALS — SHAKES
  // =========================

  {
    name: "Pumpkin Banana Bread",
    description:
      "Vanilla, banana, pumpkin spice protein, cinnamon, pumpkin spice drizzle.",
    tags: ["Shake", "Fall", "October"],
  },

  {
    name: "Pumpkin Pie",
    description:
      "Vanilla, pumpkin spice protein, graham cracker, pumpkin spice drizzle, cinnamon.",
    tags: ["Shake", "Fall", "October"],
  },

  {
    name: "PB Smores",
    description:
      "Dutch and chocolate protein, marshmallow, sugar-free s'mores syrup, peanut butter, chocolate chips, sugar-free chocolate drizzle, graham cracker.",
    tags: ["Shake", "Fall", "October"],
  },

  {
    name: "Pumpkin Oreo Crumble",
    description:
      "Cookies n cream, vanilla, pumpkin spice, Oreo, sugar-free chocolate and pumpkin drizzle.",
    tags: ["Shake", "Fall", "October"],
  },

  {
    name: "Pecan Pie",
    description:
      "2 dulce, 2 vanilla, pecans, graham cracker, caramel drizzle.",
    tags: ["Shake", "Fall", "October"],
  },

  // =========================
  // ☕ FALL SPECIALS — COFFEE
  // =========================

  {
    name: "Pumpkin Spice Frappe",
    description:
      "2 vanilla, 1 cafe latte, 1 pumpkin spice, ground coffee, cinnamon, whipped cream.",
    tags: ["Coffee", "Frappe", "Fall", "October"],
  },

  {
    name: "Pumpkin Spice Hot/Iced",
    description:
      "2 house blend, 1 pumpkin spice, cinnamon, whipped cream.",
    tags: ["Coffee", "Hot/Iced", "Fall", "October"],
  },

  {
    name: "Hazel Nut Iced Latte",
    description:
      "2 house blend, 1 cafe latte, hazelnut sugar-free syrup, whipped cream.",
    tags: ["Coffee", "Iced", "Fall", "October"],
  },

  {
    name: "Salted Caramel Mocha Frappe",
    description:
      "2 cafe latte, 2 chocolate, ground coffee, sugar-free caramel syrup, sugar-free mocha, Himalayan salt, whipped cream.",
    tags: ["Coffee", "Frappe", "Fall", "October"],
  },

  {
    name: "Salted Caramel Mocha Hot/Iced",
    description:
      "2 mocha coffee, 1 cafe latte, sugar-free caramel syrup, Himalayan salt, whipped cream.",
    tags: ["Coffee", "Hot/Iced", "Fall", "October"],
  },

  {
    name: "Snickerdoodle Latte",
    description:
      "Banana caramel, peanut cookie protein, house blend, cinnamon, sugar-free caramel.",
    tags: ["Coffee", "Latte", "Fall", "October"],
  },
],
};