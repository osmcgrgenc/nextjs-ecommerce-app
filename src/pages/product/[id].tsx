import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { PRODUCT_BY_SLUG_QUERY } from '../../queries/productQueries';
import { CartItem } from '../../types';

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const slug = id;
    const { loading, error, data } = useQuery(PRODUCT_BY_SLUG_QUERY, {
        variables: { slug },
        skip: !slug,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.product) return <p>No product found</p>;

    const product = data.product;

    return (
        <div>
            <h1>{product.name}</h1>
            <Image src={product.image.sourceUrl} alt={product.image.title} width={400} height={400} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}
