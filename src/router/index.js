import HomePage from "@/containers/HomePage/HomePage";
import PeoplePage from "@/containers/PeoplePage/PeoplePage";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/people", exact: true, component: PeoplePage },
];
