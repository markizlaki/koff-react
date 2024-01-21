import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p style={{ color: "red", fontSize: "30px" }}>
                {error.status === 404 ? "404 Page Not Found" : ""}
                <br />
                {error.data}
            </p>
        </div>
    );
};
