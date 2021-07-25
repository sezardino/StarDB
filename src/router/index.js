import HomePage from "@/containers/HomePage/HomePage";
import PeoplePage from "@/containers/PeoplePage/PeoplePage";
import NotFoundPage from "@/containers/NotFoundPage/NotFoundPage";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/people", exact: true, component: PeoplePage },
  { path: "/not-found", exact: true, component: NotFoundPage },
  { path: "*", exact: false, component: NotFoundPage },
];
