import { useDispatch, useSelector } from "react-redux";
import { Header } from "./views/Header/Header";
import { Footer } from "./views/Footer/Footer";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Goods } from "./views/Goods/Goods";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";
import { ErrorPage } from "./views/ErrorPage/ErrorPage";
import { Navigation } from "./components/Navigation/Navigation";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <main>
                    <Catalog />
                    <Goods />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/favorite",
        element: (
            <>
                <Header />
                <main>
                    <Catalog />
                    <Goods />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/category",
        element: (
            <>
                <Header />
                <main>
                    <Catalog />
                    <Goods />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/search",
        element: (
            <>
                <Header />
                <main>
                    <Catalog />
                    <Goods />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: (
            <>
                <Header />
                <main>
                    <Cart />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/product/:productId",
        element: (
            <>
                <Header />
                <main>
                    <Catalog />
                    <Card />
                </main>
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Navigation />,
        errorElement: <ErrorPage />,
    },
]);

const App = () => {
    const dispatch = useDispatch();
    const { accessToken, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!accessToken) {
            dispatch(fetchAccessToken());
        }
    }, [dispatch, accessToken]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return <RouterProvider router={router} />;
};

export default App;
