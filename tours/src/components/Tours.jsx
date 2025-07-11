import { useEffect, useState } from "react";
import Tour from "./Tour";

const url = "https://api.github.com/users";

const Tours = ({ tours, removeTours }) => {
  if (!tours) {
    return <div>Tours data is not available</div>;
  }

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} {...tour}>
                <button
                  type="button"
                  className="btn btn-block delete-btn"
                  onClick={() => removeTours(tour.id)}
                >
                  Remove tour
                </button>
              </Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Tours;
