import { PageNames } from "../../../enum";
import { TabListsParams } from "./interface";

export const tabLists: TabListsParams = {
  [PageNames.welcome]: {
    path: "",
    imgSrc:
      "https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_reactts.svg",
  },
  [PageNames.home]: {
    path: "home.tsx",
    imgSrc:
      "https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_typescript.svg",
  },
  [PageNames.readme]: {
    path: "README.md",
    imgSrc:
      "https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_markdown.svg",
  },
  [PageNames.skills]: {
    path: "skills.js",
    imgSrc:
      "https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_js.svg",
  },
  [PageNames.portfolio]: {
    path: "portfolio.html",
    imgSrc:
      "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_html.svg",
  },
  [PageNames.contact]: {
    path: "contact.json",
    imgSrc:
      "https://github.com/vscode-icons/vscode-icons/raw/master/icons/file_type_json.svg",
  },
};
