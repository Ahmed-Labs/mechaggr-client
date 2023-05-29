import { createTRPCRouter } from "~/server/api/trpc";
import { redditPostRouter } from "./routers/redditPostRouter";
import { userAlertsRouter } from "./routers/userAlertsRouter";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  redditPost: redditPostRouter,
  userAlerts: userAlertsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
