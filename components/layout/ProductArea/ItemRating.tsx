import React from 'react';

interface ItemRatingProps {
  rating: number; // Explicitly type the rating prop as a number
}

const ItemRating: React.FC<ItemRatingProps> = ({ rating }) => {
  // Use Math.ceil to round up, but let's also handle fractional stars if needed
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Assuming 5 stars total

  // Generate star elements
  const stars = [
    ...Array(fullStars).fill('full'), // Full stars
    ...(hasHalfStar ? ['half'] : []), // Half star if applicable
    ...Array(emptyStars).fill('empty') // Empty stars
  ];

  return (
    <div className="rating flex mb-3">
      {stars.map((type, i) => (
        <span key={i} className={`icon-star ${type}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={
              type === 'full' ? '#ffde00' : type === 'half' ? '#ffd700' : '#ccc'
            }
          >
            <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default ItemRating;
