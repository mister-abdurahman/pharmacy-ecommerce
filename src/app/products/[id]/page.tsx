import React, { Suspense } from "react";
import BackButton from "@/components/BackButton";
import ViewedProduct from "@/ui/Product/ViewedProduct";
import Spinner from "@/components/Spinner";
import { getCategoryById, getProductById } from "@/services/apiProducts";
import PageContainer from "@/components/PageContainer";

interface PageProps {
  params: {
    id: string;
  };
}

async function page({ params }: PageProps) {
  const product = await getProductById(params.id);
  const category = await getCategoryById(product.category_id);

  return (
    <PageContainer>
      <Suspense fallback={<Spinner />}>
        <ViewedProduct product={product} category={category} />
      </Suspense>
    </PageContainer>
  );
}

export default page;
