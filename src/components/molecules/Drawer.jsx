import React, { memo, useState } from "react";
import Css from "../css/DrawerCss.module.scss";

export const Drawer = memo((props) => {
  const {} = props;
  const [active, setActive] = useState(true);
  const ClassToggle = () => {
    setActive(!active);
  };
  return (
    <div>
      <button onClick={ClassToggle}>メニュー</button>
      <nav className={active ? Css.Omenu : Css.Cmenu}>
        <ul>
          <li>
            <button>ホーム</button>
          </li>
          <li>
            <button>カテゴリー</button>
          </li>
          <li>
            <button>ご利用ガイド</button>
          </li>
          <li>
            <button>お問い合わせ</button>
          </li>
          <li>
            <button>よくあるご質問</button>
          </li>
          <li>
            <button>プライバシーポリシー</button>
          </li>
          <li>
            <button>特定商取引法に基づく表示</button>
          </li>
        </ul>
      </nav>
    </div>
  );
});
