/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
	healthcheck: publicProcedure.query(() => 'yay!'),
	hello: publicProcedure.query(() => {
		return {
			greeting: 'hello world',
		};
	}),
});

export type AppRouter = typeof appRouter;
