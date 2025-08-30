import { notFound } from 'next/navigation';
import { getProductById } from '@/data/products';
import ProductDetail from '@/components/product-detail';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  // Import products at build time to generate static paths
  const { products } = await import('@/data/products');
  
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Produkt inte hittad',
    };
  }

  return {
    title: `${product.name} - Print on Demand`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.images.main],
    },
  };
}
