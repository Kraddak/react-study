import { useGlobalContext } from "./ContextUnsplash";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      console.log("no search term found!");
      return;
    }
    console.log(searchValue);
    setSearchTerm(searchValue);
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
            name="search" // .targets.elements.search
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
