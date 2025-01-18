"use server";
import { redirect } from "next/navigation";
import { supabase } from "./supabase";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// export async function getServerSideProps(context) {
//   const supabase = createServerComponentClient({
//     cookies: context.req.cookies,
//   });
//   const { data: session } = await supabase.auth.getSession();

//   if (!session) {
//     return { redirect: { destination: "/login", permanent: false } };
//   }

//   return { props: { user: session.session.user } };
// }

// export async function signOut() {
//   try {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;
//     redirect("/");
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }
