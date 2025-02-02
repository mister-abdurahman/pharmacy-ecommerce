import SignInButton from "@/components/SignInButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="sm:text-3xl text-xl font-semibold">
        Sign in to access your account
      </h2>
      <SignInButton />
    </div>
  );
}
