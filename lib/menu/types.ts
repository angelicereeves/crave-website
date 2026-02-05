export type MenuItem = {
  name: string;
  description: string;
  tags?: string[];
};

export type MenuSize = {
  label: string;
  volume: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;

  // ✅ optional (only shakes uses it for now)
  sizes?: MenuSize[];

  items: MenuItem[];
};
