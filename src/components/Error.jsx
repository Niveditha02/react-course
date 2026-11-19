import {isRouteErrorResponse, useRouteError} from "react-router";

const Error = () => {
    const err = useRouteError();
    console.error(err);
    const message = err instanceof globalThis.Error
        ? err.message
        : isRouteErrorResponse(err)
            ? err.statusText || String(err.data ?? "Request failed")
            : "An unexpected error occurred.";

    return(
        <div>
            <h1>Something went wrong</h1>
            {isRouteErrorResponse(err) && <h3>{err.status}: {err.statusText}</h3>}
            <p>{message}</p>
        </div>
    )
}

export default Error;