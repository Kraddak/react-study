//
import Wrapper from "../assets/wrappers/ErrorPage";
import imgNotFound from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
import { PageList } from ".";

const Error = () => {
  const error = useRouteError();
  let img = imgNotFound;
  let heading = "Ohh!";
  let paragraph = "We can't seem to find the page you are looking for";
  let alt = "not found";
  switch (error.status) {
    default:
      break;
  }
  return (
    <Wrapper>
      <div>
        <img src={img} alt={alt}></img>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <Link to={PageList.HomeLayout}>back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
