import { memo, FunctionComponent, useState, useContext } from "react";
import { menuItems } from "./data";
import { MenuBarWrapper } from "./style";
import { ListItem } from "./components/ListItem";
import { Settings } from "./components/Settings";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";

const MenuBarComponent: FunctionComponent = () => {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const {
    isActivityBarOpened,
    isPrimarySideBarOpened,
    setIsPrimarySideBarOpened,
  } = useContext(CustomLayoutContext);

  const checkParent = (id: number) => {
    setClickedId(id);

    if (id === clickedId) {
      setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
    }

    if (!isPrimarySideBarOpened && id !== clickedId) {
      setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
    }
  };

  if (!isActivityBarOpened) {
    return null;
  }

  return (
    <MenuBarWrapper>
      <div>
        {menuItems.map(({ localeKey, link, icon }, i) => (
          <ListItem
            key={localeKey}
            link={link}
            icon={icon}
            onClick={() => checkParent(i)}
            localeKey={localeKey}
          />
        ))}
      </div>
      <Settings />
    </MenuBarWrapper>
  );
};

export const MenuBar = memo(MenuBarComponent);
