import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">{err.status}</h1>
        <h2 className="error-message">Oops! {err.statusText}</h2>
        <p className="error-description">
          {err?.error?.message}
        </p>
        <Link to={"/"} className="home-button">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error