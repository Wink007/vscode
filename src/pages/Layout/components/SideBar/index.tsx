/* eslint-disable react-hooks/exhaustive-deps */
import {
  memo,
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import { useDispatch } from "react-redux";
import { useElementResize } from "../../../../utils/useElementResize";
import { Navigation } from "./components/Navigation";
import { CustomLayoutContext } from "../../../../components/CustomizeLayout/CustomLayoutContext/CustomLayoutContext";

import {
  SideBarWrapper,
  SideBarContent,
  DragElementStyle,
  ResizePanelStyle,
} from "./style";

const SideBarComponent: FunctionComponent = () => {
  const {
    layoutSideBarPosition,
    isPrimarySideBarOpened,
    setIsPrimarySideBarOpened,
  } = useContext(CustomLayoutContext);
  const isLeftPosition = layoutSideBarPosition === "left";
  const [hoveredClass, setHoveredClass] = useState(false);
  const [isSideBarHovered, setIsSideBarHovered] = useState(false);
  const draggableDiv = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const { resize, initial, width } = useElementResize(
    draggableDiv,
    isLeftPosition
  );

  const updateHovered = (e: any) => {
    resize(e);
    setHoveredClass(true);
  };

  useEffect(() => {
    if (draggableDiv.current && draggableDiv.current.clientWidth < 90) {
      setIsPrimarySideBarOpened(!isPrimarySideBarOpened);
      return;
    }
  }, [dispatch, width]);

  const removeHovered = () => {
    setHoveredClass(false);
  };

  return (
    <SideBarWrapper
      onMouseEnter={() => setIsSideBarHovered(true)}
      onMouseLeave={() => setIsSideBarHovered(false)}
    >
      {isPrimarySideBarOpened && (
        <SideBarContent ref={draggableDiv} isOpen={isPrimarySideBarOpened}>
          <span className="title">EXPLORER</span>
          <Navigation isHovered={isSideBarHovered} />
        </SideBarContent>
      )}
      <ResizePanelStyle
        draggable="true"
        onMouseEnter={() => setHoveredClass(true)}
        onMouseLeave={removeHovered}
        onDragStart={initial}
        onDrag={updateHovered}
        onDragEnd={removeHovered}
        isLeftPosition={isLeftPosition}
      />
      <DragElementStyle
        hoveredClass={hoveredClass}
        isLeftPosition={isLeftPosition}
      />
    </SideBarWrapper>
  );
};

export const SideBar = memo(SideBarComponent);
