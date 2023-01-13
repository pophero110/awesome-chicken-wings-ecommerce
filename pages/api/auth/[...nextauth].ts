import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';
import { randomBytes, randomUUID } from 'crypto';
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: { label: 'Password', type: 'password' },
			},
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
					return { email: user.email };
					// return null;
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
		// 	signOut: '/auth/signout',
		// error: '/auth/signin', // Error code passed in query string as ?error=
		// 	verifyRequest: '/auth/verify-request', // (used for check email message)
		// 	newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
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
};
export default NextAuth(authOptions);
