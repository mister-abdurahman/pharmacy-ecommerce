// import { isUserAuthenticated } from "@/services/apiAuth";
import { AuthContext } from "@/store/authStore";
import { AuthDialog } from "@/ui/Auth/AuthDialog";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Session } from "@supabase/supabase-js";
import { signIn, signOut, useSession } from "next-auth/react";
import { auth } from "@/_lib/auth";
// import { auth } from "@/app/api/auth/[...nextauth]/route";

interface ExtendedSession extends Session {
  user_id: string;
}

async function AuthUISwitch() {
  const session: any = await auth();
  // const { data: session }: any = useSession();
  // console.log(session);

  if (session?.user)
    return (
      <Button>
        <Link href={`/profile`}>View Profile</Link>
        {/* <Link href={`/profile/${session?.user?.user_id}`}>View Profile</Link> */}
      </Button>
    );
  else
    return (
      <Button>
        <Link href={`/login`}>Log In</Link>
      </Button>
    );
}

export default AuthUISwitch;
