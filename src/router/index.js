import HomePage from "@/containers/HomePage/HomePage";
import PeoplePage from "@/containers/PeoplePage/PeoplePage";
import PersonPage from "@/containers/PersonPage/PersonPage";
import NotFoundPage from "@/containers/NotFoundPage/NotFoundPage";
import FavoritesPage from "@/containers/FavoritesPage";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/people", exact: true, component: PeoplePage },
  { path: "/people/:id", exact: true, component: PersonPage },
  { path: "/favorites", exact: true, component: FavoritesPage },
  { path: "/not-found", exact: true, component: NotFoundPage },
  { path: "*", exact: false, component: NotFoundPage },
];
