import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductArea.module.css';
import ItemRating from './ItemRating';

// Define the product type for better TypeScript integration
interface ProductProps {
  product: {
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
  };
}

const ProductArea: React.FC<ProductProps> = ({ product }) => {
  const { imageUrl, title, price, rating } = product;

  return (
    <div className={styles.product_item}>
      <div className={styles.product_content}>
        <div className={styles.product_thumb}>
          <div className={styles.thumb}>
            <Image
              src={imageUrl}
              alt={`Image of ${title}`}
              width={164}
              height={198}
              className={styles.image} // If you want to style the image
              priority={true} // Optionally, you can add `priority` for images above the fold
            />
          </div>
        </div>
        <div className={styles.product_info}>
          <ItemRating rating={rating} />
          <h4 className="title text-base">
            <Link
              href={`/products/${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-black no-underline hover:no-underline"
            >
              {title}
            </Link>
          </h4>
          <div className="prices">
            <span className="price text-lg font-medium text-black opacity-70">
              ${price.toFixed(2)} {/* Ensure consistent formatting */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
