import { publicProcedure, router } from '../trpc';
import prisma from '../../lib/prisma';
export const itemRoute = router({
	get: publicProcedure.query(async () => {
		const items = await prisma.item.findMany();
		return items;
	}),
});
