import Link from 'next/link';
import {useQuery} from "@apollo/client";
import {PRODUCT_CATEGORIES_SLUGS} from "sc-ecommerce/queries/categoryQueries";
import {Category} from "sc-ecommerce/types";

export default function Header() {
    const { loading, error, data } = useQuery(PRODUCT_CATEGORIES_SLUGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const categories: Category[] = data.productCategories.nodes;
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        Marka Adı
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link href={`/category/${category.slug}`}>{category.name}</Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/cart">Sepet Sayfası</Link>
                        </li>
                        <li>
                            <Link href="/account">Hesabım Sayfası</Link>
                        </li>
                        <li>
                            <Link href="/login">Giriş Yap</Link>
                        </li>
                        <li>
                            <Link href="/register">Kayıt Ol</Link>
                        </li>
                    </ul>
                </nav>
                <div className="user-actions">
                    <Link href="/search"><img src="/icons/search.svg" alt="Search" /></Link>
                    <Link href="/account"><img src="/icons/user.svg" alt="Account" /></Link>
                    <Link href="/cart"><img src="/icons/cart.svg" alt="Cart" /></Link>
                </div>
            </div>
        </header>
    );
}
