import { FunctionComponent, memo } from "react";

const HomeComponent: FunctionComponent = () => {
  return <div>Home</div>;
};

export const Home = memo(HomeComponent);
