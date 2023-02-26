import { memo, FunctionComponent, useContext } from "react";

import { ContentInsideStyleWrapper, ItemStyle, LabelStyle } from "./style";
import { PopupContext } from "../../../../../../../../components/Popup/components/PopupContext";
import { useDispatch } from "react-redux";
import { popupType } from "../../../../../../../../redux/popupType/actions";
import { Settings } from "./data";

export interface ContentInsideProps {
  onClick: () => void;
}

const ContentInsideComponent: FunctionComponent<ContentInsideProps> = ({
  onClick,
}) => {
  const { isPopupOpened, handlePopupToggle } = useContext(PopupContext);
  const dispatch = useDispatch();

  const handleItemClick = (type: Settings) => () => {
    dispatch(popupType(type));

    onClick();
    if (!isPopupOpened) {
      handlePopupToggle();
    }
  };

  return (
    <ContentInsideStyleWrapper>
      <ItemStyle onClick={handleItemClick(Settings.theme)}>
        <LabelStyle>Color Theme</LabelStyle>
      </ItemStyle>
      <ItemStyle onClick={handleItemClick(Settings.customizeLayout)}>
        <LabelStyle>Customize Layout</LabelStyle>
      </ItemStyle>
    </ContentInsideStyleWrapper>
  );
};

export const ContentInside = memo(ContentInsideComponent);
