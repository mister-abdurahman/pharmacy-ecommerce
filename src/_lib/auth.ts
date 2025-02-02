import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";
import getEnvVariable from "./getEnv";
import { createUser, getUser } from "./actions";

interface sessionType {
  session: { user: { id: string; email: string } };
  user: string;
}
interface signinType {
  user: { guestId: string; email: string; name: string };
  account: string;
  profile: { given_name: string; family_name: string };
}

const authConfig: any = {
  secret: getEnvVariable("NEXTAUTH_SECRET"),
  providers: [
    Google({
      clientId: getEnvVariable("AUTH_GOOGLE_ID"),
      clientSecret: getEnvVariable("AUTH_GOOGLE_SECRET"),
    }),
  ],
  callbacks: {
    authorized({ auth, request }: { auth: { user: string }; request: any }) {
      return !!auth?.user; //!! converts condition to a boolean.
    },
    async signIn({ user, account, profile }: signinType) {
      try {
        const userExists = await getUser(user.email);
        if (!userExists) {
          await createUser({
            email: user.email,
            first_name: profile.given_name,
            last_name: profile.family_name,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session }: sessionType) {
      const user = await getUser(session?.user?.email);
      session.user.id = user.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    // signOut: "/logout"
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);

// export const { auth } = NextAuth(authConfig);
// export { auth as GET, auth as POST };
