import CreateUser from '../../services/createUser';
import prisma from '../../lib/prisma';
import { deleteAllRecords } from '../helpers/prisma';
import bcrypt from 'bcrypt';

afterAll(() => {
	deleteAllRecords();
});

let email;
let password;
let service;

beforeAll(async () => {
	email = 'test@gmail.com';
	password = 'test';
	service = new CreateUser({ email, password });
	await service.process();
});

test('create user in databse', async () => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	expect(user).not.toBeNull();
	expect(user.email).toBe(email);
});

test('save hashed password in database', async () => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	expect(user).not.toBeNull();
	expect(user.passwordHash).not.toBe(password);
	expect(bcrypt.compareSync(password, user.passwordHash)).toBeTruthy();
});
