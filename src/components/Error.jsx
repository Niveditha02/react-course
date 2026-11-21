import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Oops! Something went wrong</h1>
            <h2>
                {err?.status ? `${err.status} : ${err.statusText}` : "An error occurred"}
            </h2>
            <p>{err?.data || err?.message || "Please check the console for details."}</p>
        </div>
    );
};

export default Error;
