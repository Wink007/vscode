import { PageNames } from "../../pages/enum";
import { FooterDataParams } from "./interface";

export const currentFileFormat: FooterDataParams = {
  [PageNames.welcome]: "TypeScript JSX",
  [PageNames.home]: "TypeScript",
  [PageNames.readme]: "Markdown",
  [PageNames.skills]: "Babel JavaScript",
  [PageNames.portfolio]: "HTML",
  [PageNames.contact]: "JSON",
};
