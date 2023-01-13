import { appRouter } from '../../../server/routers/_app';
import { createContextInner } from '../../../server/context';
import { deleteAllRecords } from '../../helpers/prisma';
import CreateUser from '../../../services/createUser';
jest.mock('../../../services/createUser');

afterAll(() => {
	deleteAllRecords();
});
test('run CreateUser service', async () => {
	const ctx = await createContextInner({});
	const client = appRouter.createCaller(ctx);

	const email = 'test@gmail.com';
	const password = 'test';
	await client.user.create({
		email,
		password,
	});

	expect(CreateUser.mock.calls[0][0]).toStrictEqual({
		email,
		password,
	});
	expect(CreateUser).toHaveBeenCalledTimes(1);
	expect(CreateUser.mock.instances[0].process).toHaveBeenCalledTimes(1);
});
