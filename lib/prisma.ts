import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else if (process.env.NODE_ENV === 'test') {
	prisma = new PrismaClient({
		datasources: {
			db: {
				url: process.env.TEST_DATABASE_URL,
			},
		},
	});
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;
