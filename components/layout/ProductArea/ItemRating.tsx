export default function ItemRating({ rating }) {
  const stars = [];
  for (let i = 0; i < Math.ceil(rating); i++) {
    // Use rating prop directly
    stars.push(
      <span key={i} className="icon-star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffde00"
        >
          <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </span>
    );
  }

  return <div className="rating flex mb-3">{stars}</div>;
}
