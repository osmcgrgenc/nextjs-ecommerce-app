import { useQuery } from '@apollo/client';
import { GET_CART } from '../queries/cartQueries';
import { CartItem } from '../types';
import Image from 'next/image';

export default function Checkout() {
    const { loading, error, data } = useQuery(GET_CART);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Verinin yapısını kontrol ederek kart öğelerini alalım
    const cartItems: CartItem[] = data.cart.contents.nodes.map((node: any) => ({
        id: node.product.node.id,
        name: node.product.node.name,
        price: node.product.node.price,
        image: {
            src: node.product.node.image.sourceUrl,
            altText: node.product.node.image.altText,
        },
    }));

    const handleCheckout = () => {
        // Ödeme işlemini başlat
    };

    return (
        <div>
            <h1>Ödeme Sayfası</h1>
            <div>
                {cartItems.length === 0 ? (
                    <p>Sepetiniz boş</p>
                ) : (
                    cartItems.map((item: CartItem) => (
                        <div key={item.id}>
                            <Image src={item.image.src} alt={item.image.altText} width={200} height={200} />
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <button onClick={() => {
                            }}>
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
            <button onClick={handleCheckout}>Ödeme Yap</button>
        </div>
    );
}
