
interface subLinks {
  label: string;
  href: string;
  sublinks?: NavItem[];
}
export interface NavItem {
  label: string;
  href: string;
  sublinks?: subLinks[];
}