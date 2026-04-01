import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Seasonal Specials",
  subtitle: "Spring, April & Easter limited-time favorites.",
  items: [
    // =========================
    // 🌸 SPRING SPECIALS
    // =========================

    // TEAS
    {
      name: "Orange Soda",
      description:
        "Peach tea, orange, orange B12, mango aloe, carbonated.",
      tags: ["Tea", "Spring"],
    },
    {
      name: "Spring Fever",
      description:
        "Raspberry tea, blue razz, piña colada, cherry lime, orange B12, cranberry aloe.",
      tags: ["Tea", "Spring"],
    },
    {
      name: "Pollen Punch",
      description:
        "Lemon tea, passion fruit, strawberry, pomegranate B12, cranberry aloe.",
      tags: ["Tea", "Spring"],
    },
    {
      name: "Peach Nectar",
      description:
        "Peach tea, raspberry, orange, watermelon, tropical B12, mango aloe.",
      tags: ["Tea", "Spring"],
    },

    // SHAKES
    {
      name: "Wild Cherry",
      description:
        "Vanilla and French vanilla protein, frozen cherries.",
      tags: ["Shake", "Spring"],
    },
    {
      name: "Strawberry Mango",
      description:
        "Vanilla, strawberry, mango, pineapple protein, frozen strawberries and mangoes.",
      tags: ["Shake", "Spring"],
    },
    {
      name: "Lemon Coconut Bar",
      description:
        "Vanilla, French vanilla, coconut extract, graham cracker, coconut flakes.",
      tags: ["Shake", "Spring"],
    },
    {
      name: "White Chocolate Reese’s",
      description:
        "Vanilla, French vanilla, peanut cookie, cookies & cream protein, peanut butter, caramel rim, white chocolate chips, peanuts.",
      tags: ["Shake", "Spring"],
    },

    // =========================
    // 🌼 APRIL SPECIALS
    // =========================

    // TEAS
    {
      name: "Spring Punch",
      description:
        "Raspberry tea, pomegranate, tropical fruit, cranberry aloe, pomegranate B12.",
      tags: ["Tea", "April"],
    },
    {
      name: "Cool Chick",
      description:
        "Peach tea, peach, watermelon, pineapple, coconut, blue razz, mango aloe, tropical B12.",
      tags: ["Tea", "April"],
    },
    {
      name: "April Showers",
      description:
        "Lemon tea, strawberry kiwi, cucumber, orange, cranberry aloe, orange B12.",
      tags: ["Tea", "April"],
    },

    // SHAKES
    {
      name: "Dirt Cake",
      description:
        "Chocolate and Dutch chocolate protein, caramel syrup, graham crackers, caramel and chocolate rim.",
      tags: ["Shake", "April"],
    },
    {
      name: "Crème Egg",
      description:
        "Chocolate, orange cream, and dulce protein.",
      tags: ["Shake", "April"],
    },
    {
      name: "Chubby Bunny",
      description:
        "Vanilla, French vanilla, and strawberry protein, strawberry syrup, marshmallow powder, marshmallows.",
      tags: ["Shake", "April"],
    },

    // =========================
    // 🐰 EASTER SPECIALS
    // =========================

    // TEAS
    {
      name: "The Dyed Egg",
      description:
        "Pomegranate B12, blue razz, watermelon, rainbow candy, cranberry aloe.",
      tags: ["Tea", "Easter"],
    },
    {
      name: "Silly Rabbit",
      description:
        "Lime B12, watermelon, tropical fruit, grape, cranberry aloe.",
      tags: ["Tea", "Easter"],
    },
    {
      name: "Jellybean",
      description:
        "Lime B12, blue raspberry, green apple, strawberry, blueberry, lavender lemon, cranberry aloe.",
      tags: ["Tea", "Easter"],
    },

    // SHAKES
    {
      name: "Pink Peep",
      description:
        "Vanilla and French vanilla protein, marshmallows.",
      tags: ["Shake", "Easter"],
    },
    {
      name: "Bad Bunny",
      description:
        "Chocolate and Dutch chocolate protein, caramel rim, chocolate chips.",
      tags: ["Shake", "Easter"],
    },
    {
      name: "Carrot Cake",
      description:
        "Vanilla and praline protein, carrot cake pudding, coconut flakes.",
      tags: ["Shake", "Easter"],
    },
  ],
};