import { supabase } from "@/lib/supabase";
import { ICart, ICategory, IProduct } from "@/lib/types";
import { boolean } from "zod";

export async function getProducts(): Promise<IProduct[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("products")
      .select("*");

    if (error) {
      throw new Error(error);
    }
    return data as IProduct[];
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getProductById(id: string): Promise<IProduct> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    return data as IProduct;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getProductsByCategoryId(
  categoryId: string
): Promise<IProduct[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("products")
      .select("id, name, price, status, img_url")
      .eq("category_id", categoryId);

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    return data as IProduct[];
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getProductsBySearch(
  searchText: string
): Promise<IProduct[]> {
  try {
    const { data, error } = await supabase.rpc("search_products_05", {
      search_term: searchText,
    });
    if (error) throw new Error(error.message);
    else console.log(data);

    return data as IProduct[];
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getCategoryById(id: number): Promise<ICategory> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // throw new Error(`Category with id ${id} not Found`);
      throw new Error(error);
    }
    return data as ICategory;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getCategorys(): Promise<ICategory[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("categories")
      .select("*");

    if (error) {
      throw new Error(error);
    }
    return data as ICategory[];
  } catch (error) {
    console.error(error);
    return error;
  }
}

// CREATE OR REPLACE FUNCTION search_products_04(search_term TEXT)
// RETURNS TABLE(
//     id INT8,
//     name TEXT,
//     price INT4,
//     status boolean,
//     imgUrl TEXT
// ) AS $$
// BEGIN
//     RETURN QUERY
//     SELECT
//         p.id AS id,
//         p.name AS name,
//         p.price AS price,
//         p.status AS status,
//         p."imgUrl" AS imgUrl
//     FROM products p
//     JOIN brands b ON b.id = p.brand_id
//     JOIN categories c ON c.id = p.category_id
//     WHERE p.name ILIKE '%' || search_term || '%'
//        OR b.name ILIKE '%' || search_term || '%'
//        OR c.name ILIKE '%' || search_term || '%';
// END;
// $$ LANGUAGE plpgsql;

// SELECT * FROM search_products_04('Over');
