import { useQuery } from '@apollo/client';
import { PRODUCT_SLUGS} from '../queries/productQueries';
import { CATEGORY_SLUGS } from '../queries/categoryQueries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Image from 'next/image';
import Link from 'next/link';
import 'sc-ecommerce/styles/home.css'

export default function Home() {
    const { loading: productLoading, error: productError, data: productData } = useQuery(PRODUCT_SLUGS, {
        variables: { first: 5 }, // Sadece ilk 5 ürünü getirecek
    });

    const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(CATEGORY_SLUGS);

    if (productLoading || categoryLoading) return <p>Loading...</p>;
    if (productError || categoryError) return <p>Error: {productError?.message || categoryError?.message}</p>;

    const products = productData.products.nodes;
    const categories = categoryData.productCategories.nodes;

    return (
        <div>
            <Header />
            <main className="home-page">
                <Slider />

                <section className="featured-products">
                    <h2>Öne Çıkan Ürünler</h2>
                    <div className="products-grid">
                        {products.map((product: any) => (
                            <div className="product-card" key={product.id}>
                                <Image src={product.image.sourceUrl} alt={product.image.altText} width={200} height={200} />
                                <h3>{product.name}</h3>
                                <Link href={`/product/${product.slug}`}>
                                    <div className="view-product">Ürünü Gör</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="categories">
                    <h2>Kategoriler</h2>
                    <div className="categories-grid">
                        {categories.map((category: any) => (
                            <div className="category-card" key={category.id}>
                                <Link href={`/category/${category.slug}`}>
                                        <h3>{category.name}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
