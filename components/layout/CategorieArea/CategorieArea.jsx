import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategorieArea.module.css";

export default function CategorieArea() {
  const activities = [
    "Pretend Play",
    "Learning & Education",
    "Music",
    "Water Play",
    "Active Play",
  ];

  return (
    <section className={`w-full`}>
      <div className={`container w-auto text-center`}>
        <h2 className={`title text-4xl sm:mb-4 md:mb-6`}>Categories</h2>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className="overflow-hidden max-w-[255px] relative">
              <Image
                className="w-full rounded-[36px] overflow-hiddenW"
                src="/images/300x300.avif"
                alt="Pretend Play"
                width={300}
                height={300}
              />
              <div className="py-2">
                <div className="text-base text-gray-900">Pretend Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
