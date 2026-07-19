import type { MenuCategory } from "./types";

export const shakes: MenuCategory = {
  id: "shakes",
  title: "Shakes",
  subtitle: "Dessert-inspired, protein-packed favorites.",

  sizes: [
    { label: "Small", volume: "16 oz" },
    { label: "Medium", volume: "24 oz" },
    { label: "Large", volume: "32 oz" },
  ],

  items: [
    // Coffee
    {
      name: "Oreo Java Chip",
      description:
        "Cafe latte, chocolate, and cookies & cream protein blended with fresh ground coffee and chocolate chips. Topped with an Oreo, sugar-free whipped cream, and a sugar-free chocolate rim.",
      tags: ["Coffee"],
    },
    {
      name: "Peppermint Mocha",
      description:
        "Cafe latte, chocolate, and mint protein blended with ground coffee. Topped with peppermint bark, chocolate chips, and sugar-free chocolate drizzle.",
      tags: ["Coffee"],
    },
    {
      name: "Toffee Coffee",
      description:
        "Vanilla, cafe latte, and pralines & cream protein blended with ground coffee and sugar-free toffee syrup. Topped with toffee bits and sugar-free caramel drizzle.",
      tags: ["Coffee"],
    },
    {
      name: "Caramel Frappe",
      description:
        "Vanilla, cafe latte, and dulce de leche protein blended with ground coffee and sugar-free caramel syrup. Finished with a sugar-free caramel rim.",
      tags: ["Coffee"],
    },
    {
      name: "Mocha Frappe",
      description:
        "Cafe latte and chocolate protein blended with ground coffee. Finished with a sugar-free chocolate rim.",
      tags: ["Coffee"],
    },
    {
      name: "Brown Sugar Cinnamon",
      description:
        "Cookies & cream, cafe latte, and vanilla protein blended with ground coffee and cinnamon. Topped with sugar-free caramel drizzle.",
      tags: ["Coffee"],
    },

    // Chocolate
    {
      name: "German Chocolate Cake*",
      description:
        "Chocolate and Dutch chocolate protein base. Topped with pecans, coconut flakes, and sugar-free caramel drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Ultimate Brownie",
      description:
        "Chocolate and Dutch chocolate protein base. Topped with chocolate chips, confetti sprinkles, and sugar-free chocolate drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Monster Cookie",
      description:
        "Chocolate and cookies & cream protein base. Topped with rolled oats, M&M’s, and sugar-free caramel drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "S'mores",
      description:
        "Chocolate and Dutch chocolate protein base. Topped with marshmallows, graham cracker, and chocolate chips.",
      tags: ["Chocolate"],
    },
    {
      name: "Rocky Road*",
      description:
        "Chocolate and Dutch chocolate protein base. Topped with peanuts, chocolate chips, marshmallows, and sugar-free chocolate drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Mint Chocolate Chip",
      description:
        "Chocolate and mint protein base. Topped with an Oreo, chocolate chips, and sugar-free chocolate drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Snickers Bar*",
      description:
        "Chocolate, peanut cookie, cookies & cream, and dulce de leche protein base. Topped with peanuts, chocolate chips, and sugar-free caramel drizzle.",
      tags: ["Chocolate"],
    },
    {
      name: "Banana Split*",
      description:
        "Chocolate, vanilla, and banana protein base. Topped with peanuts, a fresh strawberry, sugar-free whipped cream, and sugar-free chocolate drizzle.",
      tags: ["Chocolate"],
    },

    // Peanut Butter
    {
      name: "Praline Dream",
      description:
        "Pralines & cream and peanut cookie protein blended with a scoop of peanut butter. Topped with toffee bits and sugar-free caramel drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "Reese's",
      description:
        "Chocolate, Dutch chocolate, cookies & cream, and peanut cookie protein blended with a scoop of peanut butter. Topped with peanuts and sugar-free dark chocolate drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "PB Banana",
      description:
        "Banana and peanut cookie protein blended with a scoop of peanut butter. Topped with peanuts and sugar-free caramel drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "Peanut Cookie",
      description:
        "Peanut cookie and dulce de leche protein blended with a scoop of peanut butter. Topped with peanuts and sugar-free caramel drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "PB Oreo",
      description:
        "Peanut cookie and cookies & cream protein blended with a scoop of peanut butter. Topped with an Oreo and sugar-free chocolate drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "Snickerdoodle",
      description:
        "French vanilla, peanut cookie, and dulce de leche protein blended with a scoop of peanut butter. Topped with cinnamon and sugar-free caramel drizzle.",
      tags: ["Peanut Butter"],
    },
    {
      name: "PB Banana Chocolate*",
      description:
        "Chocolate, peanut cookie, and banana protein base. Topped with peanuts and sugar-free chocolate drizzle.",
      tags: ["Peanut Butter"],
    },

    // Fruity
    {
      name: "Banana Berry",
      description:
        "Vanilla and banana protein blended with frozen blueberries.",
      tags: ["Fruity"],
    },
    {
      name: "Strawberry Cheesecake",
      description:
        "Strawberry cheesecake and vanilla protein blended with frozen strawberries. Topped with graham cracker and a fresh strawberry.",
      tags: ["Fruity"],
    },
    {
      name: "Blueberry Danish",
      description:
        "Vanilla and French vanilla protein blended with frozen blueberries. Topped with graham cracker.",
      tags: ["Fruity"],
    },
    {
      name: "Lemon Cake",
      description:
        "Vanilla and French vanilla protein blended with lemon extract. Topped with graham cracker.",
      tags: ["Fruity"],
    },
    {
      name: "Strawberry Banana",
      description:
        "Vanilla, banana, and strawberry protein blended with frozen strawberries.",
      tags: ["Fruity"],
    },
    {
      name: "Mango Pineapple",
      description:
        "Vanilla and mango pineapple protein blended with frozen mango and pineapple.",
      tags: ["Fruity"],
    },
    {
      name: "Fruity Pebbles",
      description:
        "Vanilla and orange cream protein blended with lemon extract. Topped with Fruity Pebbles cereal.",
      tags: ["Fruity"],
    },

    // Vanilla
    {
      name: "Rice Krispy",
      description:
        "Vanilla, French vanilla, and cookies & cream protein. Topped with Rice Krispies cereal and marshmallows.",
      tags: ["Vanilla"],
    },
    {
      name: "Shamrock",
      description:
        "Vanilla and French vanilla protein blended with mint extract. Topped with an Oreo, chocolate chips, and sugar-free chocolate drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Birthday Cake",
      description:
        "Vanilla and French vanilla protein. Topped with graham cracker and sprinkles.",
      tags: ["Vanilla"],
    },
    {
      name: "Orange Julius",
      description:
        "Orange cream and vanilla protein blended with orange extract.",
      tags: ["Vanilla"],
    },
    {
      name: "Apple Pie",
      description:
        "Vanilla, pralines & cream, and dulce de leche protein blended with apple pie spice. Topped with graham cracker and sugar-free caramel drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Butter Pecan",
      description:
        "Vanilla, dulce de leche, and French vanilla protein. Topped with pecans and sugar-free caramel drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Cinnamon Toast Crunch",
      description:
        "Vanilla, cookies & cream, and dulce de leche protein blended with cinnamon. Topped with Cinnamon Toast Crunch cereal and sugar-free caramel drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Chocolate Chip Cookie Dough",
      description:
        "Vanilla and cookies & cream protein. Topped with graham cracker, chocolate chips, and sugar-free chocolate drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Cookies & Cream",
      description:
        "Vanilla and cookies & cream protein. Topped with an Oreo and sugar-free chocolate drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Banana Nut Bread",
      description:
        "Vanilla, banana, and dulce de leche protein blended with cinnamon. Topped with pecans or walnuts and sugar-free caramel drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Carrot Cake",
      description:
        "Vanilla, pumpkin, and pralines & cream protein blended with cinnamon. Topped with coconut flakes and sugar-free caramel drizzle.",
      tags: ["Vanilla"],
    },
    {
      name: "Salted Caramel Pretzel",
      description:
        "Vanilla, French vanilla, and cookies & cream protein. Topped with pretzel pieces and Himalayan pink salt, with a sugar-free caramel rim.",
      tags: ["Vanilla"],
    },
    {
      name: "Oatmeal Cookie",
      description:
        "Vanilla and cookies & cream protein blended with cinnamon and rolled oats. Topped with chocolate chips and a sugar-free chocolate rim.",
      tags: ["Vanilla"],
    },
    {
      name: "Frosted Animal Cracker",
      description:
        "Vanilla, French vanilla, and cookies & cream protein. Topped with sprinkles and a frosted animal cracker.",
      tags: ["Vanilla"],
    },
    {
      name: "Biscoff",
      description:
        "Vanilla and cookies & cream protein. Finished with a Biscoff cookie spread rim and Biscoff cookie pieces.",
      tags: ["Vanilla"],
    },
  ],
};