import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { PRODUCT_BY_CATEGORY_SLUG } from '../../queries/categoryQueries';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import 'sc-ecommerce/styles/categories.css'
import Link from "next/link";

export default function CategoryPage() {
    const router = useRouter();
    const { slug } = router.query;

    const { loading, error, data } = useQuery(PRODUCT_BY_CATEGORY_SLUG, {
        variables: { slug },
        skip: !slug,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.productCategory) return <p>Kategori bulunamadı</p>;

    const products = data.productCategory.products.nodes;

    return (
        <div>
            <Header />
            <main className="category-content">
                <div className="container">
                    <h1>{data.productCategory.name}</h1>
                    <div className="products-grid">
                        {products.map((product: any) => (
                            <Link href={`/product/${product.slug}`} key={product.slug}>
                                <div className="product-card" key={product.id}>
                                    <Image src={product.image.sourceUrl} alt={product.image.altText} width={200} height={200} />
                                    <h2 className="product-name">{product.name}</h2>
                                    <p className="product-price">{product.price}</p>
                                    <button className="add-to-cart">Sepete Ekle</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
