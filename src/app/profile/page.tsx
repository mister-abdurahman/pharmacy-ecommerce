import { auth } from "@/lib/auth";
import Spinner from "@/components/Spinner";
import { getProfileById } from "@/services/apiProfile";
import ProfileForm from "@/ui/Profile/ProfileForm";
import React, { Suspense } from "react";

async function page() {
  const session: any = await auth();
  const profileDetails = await getProfileById(session.user.id);
  //   const profileDetails = await getProfileById(
  //     "2760e249-ca51-4f5e-97e9-4383b9c57f74"
  //   );
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileForm defaultProfile={profileDetails} />
    </Suspense>
  );
}

export default page;
