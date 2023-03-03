import { Link } from "react-router-dom";
import React, { memo } from "react";
import { BsCart2 } from "react-icons/bs";

import Css from "../../css/HeaderCss.module.scss";
import { Drawer } from "../../molecules/Drawer";

export const Header = memo(() => {
  return (
    <>
      <div className={Css.FirstDiv}>
        <Drawer />
        <Link to="/" className={Css.Link2}>
          デモサイト
        </Link>
        <Link to="cart" className={Css.Link3}>
          <BsCart2 size={"20px"} />
        </Link>
      </div>
    </>
  );
});
