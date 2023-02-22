import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/toggleMenu/actions";

export const UseToggleMenu = (num: any) => {
  const [clickedId, setClickedId] = useState(null);
  console.log("clickedId: ", clickedId);

  const dispatch = useDispatch();

  setClickedId(num);

  if (num === clickedId) {
    dispatch(toggleMenu);
  }
  return;
};
