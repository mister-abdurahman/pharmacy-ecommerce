// import { getUser } from "@/_lib/actions";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }: any) {
//       if (token) {
//         session.user.id = token.id;
//       }
//       const user = await getUser(session?.user?.email);
//       session.user.id = user.id;
//       return session;
//     },
//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : "/"; // Redirect to dashboard
//     },
//     async jwt({ token, user }: any) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: "/login", // Optional: Custom sign-in page
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// // const { auth } = handler;

// export { handler as GET, handler as POST };
export { GET, POST } from "@/_lib/auth";
