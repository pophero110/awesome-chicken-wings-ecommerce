import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

const saltRounds = 10;
export default class CreateUser {
	email: string;
	password: string;

	constructor({ email, password }: { email: string; password: string }) {
		this.email = email;
		this.password = password;
	}

	async process() {
		await bcrypt.hash(this.password, saltRounds).then(async (hash) => {
			await prisma.user.create({
				data: {
					email: this.email,
					passwordHash: hash,
				},
			});
		});
	}
}
