import NextAuth from 'next-auth/next'

import CredentialsProvider from 'next-auth/providers/credentials'
import { client } from '../../../../../lib/client';




// Credencialts auth

const Credentials = CredentialsProvider({
    name:"credentials",
    credentials:{
        email: { label: 'Username', type: 'email' },
		password: { label: 'Password', type: 'password' },
		
    },
    authorize: async (credentials) => {
		try {
			console.log(credentials?.email);
			console.log(credentials?.password);
			console.log(['CREDENTIALS AUTHORIZE'])
			const { data } = await client.post('/auth', {
				...credentials,
				external: false,
			})

			if (!data.ok) {
				return null
			}

			return {
				id: `${credentials?.email}`,
				email: `${credentials?.email}`,
				
			}
		} catch (err) {
			console.log(['CREDENTIALS AUTHORIZE ERROR'])
			return null
		}
	},

});


const handler = NextAuth({
	providers: [Credentials],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
	callbacks: {
		signIn: async ({ user, account }) => {
			try {
				if (account?.provider === 'credentials') return true

			

				return true
			} catch (err) {
				console.log(['CALLBACKS SIGNIN ERROR'])
				return false
			}
		},
	},
})

export { handler as GET, handler as POST }