/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { userRoute } from './user';
import { itemRoute } from './item';
export const appRouter = router({
	user: userRoute,
	item: itemRoute,
});

export type AppRouter = typeof appRouter;
