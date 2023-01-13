import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';
export const authOptions = {
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				const { email, password } = credentials;
				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				});
				const result = bcrypt.compareSync(password, user.passwordHash);
				if (result) {
					// Any object returned will be saved in `user` property of the JWT
					return { name: user.id, email: user.email };
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;
					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
		error: '/auth/signin', // Error code passed in query string as ?error=
		verifyRequest: '/auth/verify-request', // (used for check email message)
		newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
	},
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
		maxAge: 24 * 60 * 60, // 30 days
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
		encryption: true,
	},
	useSecureCookies: process.env.NODE_ENV === 'production',
	events: {},
};
export default NextAuth(authOptions);
