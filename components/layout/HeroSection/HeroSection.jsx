import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={`w-full`}>
      <div
        className={`relative overflow-y-hidden max-h-[500px] md:max-h-[620px] lg:max-h-[737px]`}
      >
        <div
          className={`${styles.home_slider_item}`}
          data-bg-img="https://template.hasthemes.com/kidol/kidol/assets/img/slider/3.jpg"
        ></div>
        <div className={`${styles.slider_content_area}`}>
          <div className="container flex justify-center md:justify-end">
            <div className="row w-[370px] md:w-7/12 lg:w-1/2">
              <div className=" flex justify-center lg:justify-start">
                <div className="content max-w-[400px]">
                  <div className="inner-content">
                    <h4 className="subtitle text-xl text-center mb-[22px]">
                      New Arrivals
                    </h4>
                    <h2 className="text-4xl sm:text-5xl text-center mb-[45px]">
                      Best&nbsp;Kids&nbsp;Store &amp;&nbsp;Online&nbsp;Shop
                    </h2>
                    <Link href="/toy" className={`${styles.bt}`}>
                      Discover Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
