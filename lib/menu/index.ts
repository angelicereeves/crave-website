export type { MenuCategory, MenuItem } from "./types";

import { loadedRefreshers } from "./loadedRefreshers";
import { loadedCoffee } from "./loadedCoffee";
import { shakes } from "./shakes_TMP";
import { specialtyTeas } from "./specialtyTeas";
import { proteinTreats } from "./proteinTreats";
import { specials } from "./specials";


export const menuCategories = [
  loadedRefreshers,
  loadedCoffee,
  shakes,
  specialtyTeas,
  proteinTreats,
  specials
];

