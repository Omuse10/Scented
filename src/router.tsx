import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { createHashHistory, createMemoryHistory } from "@tanstack/history";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const history = typeof window === "undefined"
    ? createMemoryHistory({ initialEntries: ["/"] })
    : createHashHistory();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
