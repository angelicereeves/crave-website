export type MenuItem = {
  name: string;
  description?: string;
  price?: string; // e.g. "$8" or "from $7"
  tags?: string[]; // e.g. ["high protein", "low sugar"]
};

export type MenuCategory = {
  id: string; // used for anchors like #protein-shakes
  title: string;
  subtitle?: string;
  items: MenuItem[];
};
