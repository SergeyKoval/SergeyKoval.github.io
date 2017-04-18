type MenuItem = {
  type: string,
  name: string,
  href: string,
  countLabel?: number,
  icon?: string,
  subItems?: MenuItem[],
};
