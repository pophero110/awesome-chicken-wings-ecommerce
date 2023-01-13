/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { userRoute } from './user';
export const appRouter = router({
	user: userRoute,
});

export type AppRouter = typeof appRouter;
