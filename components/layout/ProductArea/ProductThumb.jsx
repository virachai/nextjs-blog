import Image from "next/image";
import Link from "next/link";
import styles from "./ProductArea.module.css";

const ProductThumb = ({ product }) => {
  // Product data should be passed as props
  const { imageUrl, title, price, rating } = product;

  return (
    <div className={`${styles.product_item}`}>
      <div className={`${styles.product_content}`}>
        <div className={`${styles.product_thumb}`}>
          <div className={`${styles.thumb}`}>
            <Image
              src={imageUrl}
              alt="Product Image"
              width={164}
              height={198}
              className={``}
            />
          </div>
          <div className="product-action">
            {/* ... other action links ... */}
          </div>
        </div>
        <div className="product-info">{/* ... product information ... */}</div>
      </div>
    </div>
  );
};

export default ProductThumb;
