import { useState } from "react";

const Tour = ({ id, image, info, name, price, children }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? `${info.substring(0, 100)}...` : info}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >{`${readMore ? "read more" : "show less"}`}</button>
        </p>
        {children}
      </div>
    </article>
  );
};
export default Tour;
