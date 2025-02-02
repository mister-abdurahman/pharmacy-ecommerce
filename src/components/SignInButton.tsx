// "use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { signInAction } from "@/_lib/actions";

function SignInButton() {
  return (
    // <Button onClick={() => signIn("google", { redirect: true })}>
    //   Continue with google
    // </Button>
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
