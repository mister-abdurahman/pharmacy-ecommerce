import { supabase } from "./supabase";

export async function getProducts() {
  let { data: Products, error } = await supabase
    .from("Products")
    .select("name");

  if (error) throw new Error("Products could not be fetched!.");

  return Products;
}
