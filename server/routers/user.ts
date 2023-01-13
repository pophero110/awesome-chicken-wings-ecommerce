import { publicProcedure, router } from '../trpc';
import CreateUser from '../../services/createUser';
export const userRoute = router({
	create: publicProcedure
		.input((input: { email: string; password: string }) => {
			return input;
		})
		.mutation(async ({ input }) => {
			const { email, password } = input;
			const service = new CreateUser({ email, password });
			const result = await service.process();

			return result;
		}),
});
