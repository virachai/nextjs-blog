// import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CategorieArea.module.css';

export default function CategorieArea() {
  const catalog = [];
  const list = [
    'Pretend Play',
    'Learning & Education',
    'Music',
    'Water Play',
    'Active Play',
    'Others'
  ];

  list.forEach((element, i) => {
    catalog.push(
      <div key={i} className={`${styles.itemcard}`}>
        <Image
          className=""
          src="/images/300x300.avif"
          alt="Pretend Play"
          width={300}
          height={300}
        />
        <div className="py-2">
          <div className="text-base text-gray-700">{element}</div>
        </div>
      </div>
    );
  });

  return (
    <section className={'w-full mb-16'}>
      <div className={'w-full text-center'}>
        <h2 className={'title text-4xl sm:mb-4 md:mb-6'}>Categories</h2>
        <div className={'row'}>
          <div
            className={'col-12 flex justify-center gap-x-2 gap-y-2 flex-wrap'}
          >
            {catalog}
          </div>
        </div>
      </div>
    </section>
  );
}
