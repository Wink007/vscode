import { PageNames } from "../../../enum";

interface MenuItemsProps {
  icon: string;
  link: string;
  localeKey: string;
}

export const menuItems: MenuItemsProps[] = [
  {
    icon: "files",
    link: PageNames.home,
    localeKey: "Home",
  },
  {
    icon: "jersey",
    link: PageNames.readme,
    localeKey: "README",
  },
  {
    icon: "source-control",
    link: PageNames.skills,
    localeKey: "Skills",
  },
  {
    icon: "extensions",
    link: PageNames.portfolio,
    localeKey: "Portfolio",
  },
  {
    icon: "mail",
    link: PageNames.contact,
    localeKey: "Contact",
  },
];
