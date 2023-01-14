import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
const saltRounds = 10;
export default class CreateUser {
	email: string;
	password: string;

	constructor({ email, password }: { email: string; password: string }) {
		this.email = email;
		this.password = password;
	}

	async process() {
		try {
			await bcrypt.hash(this.password, saltRounds).then(async (hash) => {
				await prisma.user.create({
					data: {
						email: this.email,
						passwordHash: hash,
					},
				});
			});
			return { error: '' };
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					return { error: 'Email has been taken' };
				}
			}
		}
	}
}
