import type { MenuCategory } from "./types";

export const loadedCoffee: MenuCategory = {
  id: "loaded-coffee",
  title: "Loaded Coffee",
  subtitle: "Protein-packed iced coffee favorites.",
  sizes: [
    { label: "Hot Coffee", volume: "20 oz" },
    { label: "Iced or Blended: Medium", volume: "24 oz" },
    { label: "Iced or Blended: Large", volume: "32 oz" },
  ],
  items: [
    
    
    {
      name: "Caramel Iced Latte",
      description:
        "15 grams of protein, 2 grams of sugar.",
      tags: ["Iced Protein Coffee"],
    },
    {
      name: "Dirty Chai",
      description:
        "15 grams of protein, 2 grams of sugar.",
      tags: ["Iced Protein Coffee"],
    },
    {
      name: "White Chocolate Mocha",
      description:
        "15 grams of protein, 2 grams of sugar.",
      tags: ["Iced Protein Coffee"],
    },
    {
      name: "Cookie Butter",
      description:
        "Cookies & cream, café latte, and house blend coffee protein blended with almond extract and chocolate chips. Garnished with a sugar-free caramel rim and whipped cream.",
      tags: ["Iced Protein Coffee"],
    },
    {
      name: "Jumping Monkey",
      description:
        "Banana caramel and house blend coffee protein blended and poured over ice. Garnished with a sugar-free caramel rim and whipped cream.",
      tags: ["Iced Protein Coffee"],
    },
  ],
};
