interface childObject {
  title: string;
  path?: string;
}

export interface MenuType {
  title: string;
  path?: string;
  icon: JSX.Element;
  children?: childObject[];
}

export interface PathsType {
  [key: string]: {
    title: string;
    path?: string;
    children?: childObject[];
  };
}
