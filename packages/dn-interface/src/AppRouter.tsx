import {
  createMemoryHistory,
  DefaultGenerics,
  Navigate,
  ReactLocation,
  Route,
  Router,
} from "@tanstack/react-location";
import AppLayout from "./AppLayout";
import DraftsScreen from "./screens/DraftsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import RecentScreen from "./screens/RecentScreen";
import TrashScreen from "./screens/TrashScreen";

const routes: Route<DefaultGenerics>[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/drafts" />,
      },
      {
        path: "drafts",
        element: <DraftsScreen />,
      },
      {
        path: "favorites",
        element: <FavoritesScreen />,
      },
      {
        path: "recent",
        element: <RecentScreen />,
      },
      {
        path: "trash",
        element: <TrashScreen />,
      },
    ],
  },
];

const history = createMemoryHistory();

const location = new ReactLocation({
  history,
});

const AppRouter = () => {
  return <Router routes={routes} location={location} />;
};

export default AppRouter;
