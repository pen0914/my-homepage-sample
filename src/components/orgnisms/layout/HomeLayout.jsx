import React, { memo } from "react";
import Css from "../../css/HomeCss.module.scss";

export const HomeLayout = memo((props) => {
  const { items, onClickPage } = props;
  return (
    <>
      <div className={Css.itemContainer}>
        {items.map((oneitem) => {
          return (
            <div
              key={oneitem.id}
              onClick={() => onClickPage(oneitem.partNumber)}
              className={Css.item}
            >
              <img src={oneitem.image} className={Css.pic} alt="" />
              <div className={Css.explain}>
                <p className={Css.brand}>{`【${oneitem.brand}】`}</p>
                <p className={Css.title}>{oneitem.name}</p>

                <p>{oneitem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
