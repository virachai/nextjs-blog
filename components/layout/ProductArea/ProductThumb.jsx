import Image from "next/image";
import Link from "next/link";
import styles from "./ProductArea.module.css";
import ItemRating from "./ItemRating";

export default function ProductArea({ product }) {
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
        </div>
        <div className={`${styles.product_info}`}>
          <ItemRating rating={rating} />{" "}
          <h4 className="title text-base">
            <Link
              href="#"
              className="text-black no-underline hover:no-underline"
            >
              {title}
            </Link>
          </h4>
          <div className="prices">
            <span className="price text-lg font-medium text-black opacity-70">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
