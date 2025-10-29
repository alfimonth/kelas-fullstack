import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <>
      <h1>
        {status} {statusText}{" "}
      </h1>
      <div>Its like a glitch in our universe</div>
    </>
  );
};

export default ErrorPage;
