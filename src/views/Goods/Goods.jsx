import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Goods.module.scss";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams, useLocation } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Goods = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const { data, loading, error, pagination } = useSelector(
        (state) => state.products,
    );
    const { favoriteList } = useSelector((state) => state.favorite);

    const { pathname } = useLocation();

    const category = searchParam.get("category");
    const q = searchParam.get("q");
    const page = searchParam.get("page");

    useEffect(() => {
        if (pathname !== "/favorite") {
            dispatch(fetchProducts({ category, q, page }));
        }
    }, [dispatch, category, q, pathname, page]);

    useEffect(() => {
        if (pathname === "/favorite") {
            dispatch(fetchProducts({ list: favoriteList.join(","), page }));
        }
    }, [dispatch, favoriteList, pathname, page]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
                {!loading && data.length ? (
                    <>
                        <ul className={s.list}>
                            {data.map((item) => (
                                <li key={item.id}>
                                    <CardItem {...item} />
                                </li>
                            ))}
                        </ul>
                        {pagination ? (
                            <Pagination pagination={pagination} />
                        ) : (
                            ""
                        )}
                    </>
                ) : (
                    <div>По вашему запросу ничего не найдено</div>
                )}
            </Container>
        </section>
    );
};
