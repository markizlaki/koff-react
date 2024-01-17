import { useEffect } from "react";
import { Goods } from "./../../components/Goods/Goods";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { fetchProducts } from "../../store/products/products.slice";
import s from "./Main.module.scss";

export const Main = () => {


    return (
        <main className={s.main}>
            <Catalog data={dataCategories} />
            <Goods data={dataProducts} />
        </main>
    );
};
