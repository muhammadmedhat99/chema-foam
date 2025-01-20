export interface NavItem {
  label: string;
  href: string;
  sublinks?: NavItem[];
}