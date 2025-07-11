const url = "https://www.course-api.com/react-tours-project";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import useResource from "./components/useResource";
import { useEffect, useState } from "react";

const App = () => {
  const [toursData, loading, error, refresh] = useResource(url);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    if (toursData) setTours(toursData); // sync once fetched
  }, [toursData]);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );
  if (error) return <p>Error: {error.message}</p>;

  const removeTours = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => refresh()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  //return Tours(tourData);
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};
export default App;
