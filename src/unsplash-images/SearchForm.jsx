// import { useState } from "react";
const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.targets.elements.search.value;
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            className="form-input search-input"
            placeholder="cat"
            // .targets.elements.search
            name="search"
            onChange={() => {}}
          />
        </div>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

/*

        <label htmlFor="name" className="form-label">
          name
        </label>
*/
