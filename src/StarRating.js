// import { useState } from 'react';

const containerStyle = { display: 'flex', alignItems: 'center', gap: '16px' };
const starContainerStyle = { display: 'flex', gap: '4px' };
const textStyle = { lineHeight: '0', margin: '0' };

export default function StarRating({ maxRating = 5 }) {
  //   const [rating, setRating] = useState(defaultRating);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i + 1}>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
