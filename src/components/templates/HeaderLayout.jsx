import { memo } from "react";
import { Header } from "../orgnisms/layout/Header";

export const HeaderLayout = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      {children}
    </>
  );
});
