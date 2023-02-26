interface Values {
  path: string;
  imgSrc: string;
}

export interface TabListsParams {
  [key: string]: Values;
}

export interface TabProps {
  item: string;
  onClose: () => void;
}
