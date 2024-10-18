import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductArea.module.css";
import ProductThumb from "./ProductThumb";

export default function ProductArea() {
  const products = [
    {
      imageUrl: "/images/9.webp",
      title: "Product 1",
      price: 199.99,
      rating: 4.5,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 2",
      price: 299.99,
      rating: 4.2,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 3",
      price: 349.99,
      rating: 4.8,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 4",
      price: 179.99,
      rating: 4.7,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 5",
      price: 229.99,
      rating: 4.3,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 6",
      price: 159.99,
      rating: 4.6,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 7",
      price: 249.99,
      rating: 4.1,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 8",
      price: 189.99,
      rating: 4.9,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 9",
      price: 219.99,
      rating: 4.4,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 10",
      price: 169.99,
      rating: 4.5,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 11",
      price: 239.99,
      rating: 4.2,
    },
    {
      imageUrl: "/images/9.webp",
      title: "Product 12",
      price: 179.99,
      rating: 4.8,
    },
  ];
  return (
    <section className={`w-full`}>
      <div className={`container w-auto text-center ${styles.container}`}>
        <h2 className={`title text-4xl sm:mb-4 md:mb-6`}>Recommended</h2>
        <div className={`row`}>
          <div className={`col-12 ${styles.item_list}`}>
            {products.slice(0, 4).map((product, index) => (
              <ProductThumb key={index} product={product} />
            ))}
            {/* <div className={`${styles.product_item}`}>
              <div className="product-thumb">
                <Image
                  src="/images/9.webp"
                  alt="Image"
                  width={164}
                  height={198}
                />
                <div className="product-action">
                  <Link
                    className="action-quick-view"
                    href="shop-cart.html"
                    tabindex="0"
                  >
                    <i className="ion-ios-cart"></i>
                  </Link>
                  <Link
                    className="action-quick-view"
                    href="javascript:void(0)"
                    tabindex="0"
                  >
                    <i className="ion-arrow-expand"></i>
                  </Link>
                  <Link
                    className="action-quick-view"
                    href="shop-wishlist.html"
                    tabindex="0"
                  >
                    <i className="ion-heart"></i>
                  </Link>
                  <Link
                    className="action-quick-view"
                    href="shop-compare.html"
                    tabindex="0"
                  >
                    <i className="ion-shuffle"></i>
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <h4 className="title">
                  <Link href="#" tabindex="0">
                    Funskool Teddy Brown
                  </Link>
                </h4>
                <div className="prices">
                  <span className="price">$190.12</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
