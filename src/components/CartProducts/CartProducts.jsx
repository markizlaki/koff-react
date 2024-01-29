import s from "./CartProducts.module.scss";

export const CartProducts = () => {
    return (
        <ul className={s.products}>
            <li className={s.product} key={1}>
                <img
                    className={s.img}
                    src="https://koff-api.vercel.app/img//1hb26q23avud7tqm.jpg"
                    alt="Диван"
                />
                <h3 className={s.titleProduct}>Диван-кровать</h3>
                <p className={s.price}>{"133741".toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. 84348945757</p>

                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.count}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
            <li className={s.product}>
                <img
                    className={s.img}
                    src="https://koff-api.vercel.app/img//1hb26q23avud7tqm.jpg"
                    alt="Диван"
                />
                <h3 className={s.titleProduct}>Диван-кровать</h3>
                <p className={s.price}>{"133742".toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. 84348945757</p>

                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.count}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
            <li className={s.product}>
                <img
                    className={s.img}
                    src="https://koff-api.vercel.app/img//1hb26q23avud7tqm.jpg"
                    alt="Диван"
                />
                <h3 className={s.titleProduct}>Диван-кровать</h3>
                <p className={s.price}>{"133743".toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. 84348945757</p>

                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.count}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
        </ul>
    );
};
