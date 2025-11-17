// import { useState } from "react";

import { useFetchImages } from "./UnsplashQueryHooks";

const Gallery = () => {
  const { isError, isPending, error, data } = useFetchImages();
  //
  if (isPending) return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  //
  if (isError) {
    console.log(error);
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;
  }

  console.log(data.data);
  //
  return (
    <section className="image-container">
      {data.data.results.map((item) => {
        const imageUrl = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={imageUrl}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
