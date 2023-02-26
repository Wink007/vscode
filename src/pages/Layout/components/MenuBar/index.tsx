import { memo, FunctionComponent, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { ListItem } from "./components/ListItem";
import { Settings } from "./components/Settings";
import { addPage } from "../../../../redux/addPages/actions";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";
import { menuItems } from "./data";

import { MenuBarWrapper } from "./style";

const MenuBarComponent: FunctionComponent = () => {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const {
    isActivityBarOpened,
    isPrimarySideBarOpened,
    setIsPrimarySideBarOpened,
  } = useContext(CustomLayoutContext);
  const dispatch = useDispatch();

  const checkParent = (id: number, link: string) => {
    setClickedId(id);
    dispatch(addPage(link));

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
            onClick={() => checkParent(i, link)}
            localeKey={localeKey}
          />
        ))}
      </div>
      <Settings />
    </MenuBarWrapper>
  );
};

export const MenuBar = memo(MenuBarComponent);
