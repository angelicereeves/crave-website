import type { MenuCategory } from "./types";

export const specials: MenuCategory = {
  id: "monthly-specials",
  title: "Monthly Specials",
  subtitle: "February Specials — limited-time favorites.",
  items: [
    // --- SHAKES ---
    {
      name: "Red Velvet Oreo",
      description:
        "Vanilla, wild berry protein, red velvet, dark chocolate drizzle, oreo.",
      tags: ["Shake"],
    },
    {
      name: "Raspberry Truffle",
      description:
        "Chocolate, cookies n cream, and dulce protein, raspberry syrup, choco chips, dark chocolate rim.",
      tags: ["Shake"],
    },
    {
      name: "I Love You S'more",
      description:
        "Dutch and chocolate protein, marshmallow and raspberry rim, graham crackers, choco chips, mini marshmallows.",
      tags: ["Shake"],
    },
    {
      name: "Funfetti Cupcake",
      description:
        "Vanilla and french vanilla protein, sprinkles, graham crackers, white choco chips.",
      tags: ["Shake"],
    },

    // --- TEAS ---
    {
      name: "Coconut Cutie",
      description:
        "Peach tea, tropical b12, coconut, strawberry, mango aloe.",
      tags: ["Tea"],
    },
    {
      name: "Valentine’s Baby",
      description:
        "Raspberry tea, pom b12, cherry lime, blue razz, raspberry, pina colada, cranberry aloe.",
      tags: ["Tea"],
    },
    {
      name: "Watermelon Sugar",
      description:
        "Lemon tea, lemon lime b12, watermelon, green apple, cranberry aloe.",
      tags: ["Tea"],
    },
    {
      name: "Cotton Candy Colada",
      description:
        "Raspberry tea, pom b12, cotton candy, pina colada, blueberry, cranberry aloe.",
      tags: ["Tea"],
    },

    // --- VALENTINE'S (from the other post) ---
    {
      name: "Heart Throb",
      description:
        "Chocolate & banana caramel & dutch chocolate protein. Strawberries, chocolate drizzle.",
      tags: ["Shake", "Valentine’s"],
    },
    {
      name: "Smooches",
      description:
        "Vanilla & strawberry cheesecake & french vanilla protein. Strawberries, sprinkles.",
      tags: ["Shake", "Valentine’s"],
    },
    {
      name: "Nutty Bout You",
      description:
        "Peanut cookie & dulce & pralines protein. Peanut butter, caramel drizzle, walnuts.",
      tags: ["Shake", "Valentine’s"],
    },
    {
      name: "Cupid’s Kiss",
      description:
        "Watermelon, peach, raspberry tea, orange b12, cranberry aloe.",
      tags: ["Tea", "Valentine’s"],
    },
    {
      name: "Heartbreaker",
      description:
        "Strawberry, melon, pineapple, raspberry tea, pomegranate b12, cranberry aloe.",
      tags: ["Tea", "Valentine’s"],
    },
    {
      name: "Single & Thrivin",
      description:
        "Lemon tea, lemon-lime b12, cherry, passion fruit, cucumber, mango aloe.",
      tags: ["Tea", "Valentine’s"],
    },
    {
      name: "Crazy Ex",
      description:
        "Green apple, pineapple, coconut, peach tea, tropical b12, mango aloe.",
      tags: ["Tea", "Valentine’s"],
    },
    {
      name: "Candy Hearts",
      description:
        "Rainbow candy, pomegranate, raspberry, lemon tea, lemon-lime b12, cranberry aloe, candy hearts.",
      tags: ["Tea", "Valentine’s"],
    },
  ],
};
