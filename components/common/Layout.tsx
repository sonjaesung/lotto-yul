import { useRouter } from "next/router";
import React, { Fragment, ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import Img from "@/components/common/Img";
import mainStore from "@/store/mainStore";
import NavPopup from "../header/NavPopup";
import { observer } from "mobx-react";

type props = {
  children: React.ReactNode;
};

const Layout = observer(({ children }: props) => {
  return (
    <Fragment>
      <Header />
      <div className="content_area">{children}</div>
      <Footer />
      {mainStore.menuPopup ? <NavPopup /> : ""}
    </Fragment>
  );
});

export default Layout;
