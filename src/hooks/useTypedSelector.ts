import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../redux/store.interface";

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
