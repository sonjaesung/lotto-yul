import { useRouter } from "next/router";
import HeaderBtn from "./HeaderBtn";
import NavBar from "./NavBar";
import Seo from "./Seo";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import NavBarM from "./NavBarM";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Banner from "./Banner";

const metaList = {
  home: {
    title: "로또 정보와 알고리즘ㅣ인생 역전",
    des: "당첨 번호 회수, 당첨 회차 정보",
  },
  winTurn: {
    title: "로또 정보ㅣ당첨 회차 정보",
    des: "역대 로또 당첨 회차 정보를 한눈에!",
  },
  winByYear: {
    title: "로또 정보ㅣ연도별 당첨 정보",
    des: "연도별 로또 당첨 회차 정보를 한눈에!",
  },
  winCount: {
    title: "로또 분석 ㅣ 1등 번호 회수",
    des: "역대 로또 1등 번호, 보너스 번호는 제외!",

  },
  winCountB: {
    title: "로또 분석 ㅣ 보너스 번호 회수",
    des: "역대 로또 보너스 번호만 모아모아!",
  }
};

const Header = observer(() => {
  const router = useRouter();
  const setTitle = (pathname: string) => {
    let pathKey = "";
    if (pathname === "") {
      pathKey = "home";
    } else {
      pathKey = pathname;
    }

    return Object(metaList)[pathKey].title;
  };
  const setDes = (pathname: string) => {
    let pathKey = "";
    if (pathname === "") {
      pathKey = "home";
    } else {
      pathKey = pathname;
    }

    return Object(metaList)[pathKey].des;
  };

  useEffect(() => {
    window.addEventListener("resize", mainStore.changePcResize);
    return () => {
      window.removeEventListener("resize", mainStore.changePcResize);
    };
  }, []);

  return (
    <Fragment>
      <div className="header_area">
        <div className="bg"></div>
        <Seo title={setTitle(router.pathname.split("/").reverse()[0])} des={setDes(router.pathname.split("/").reverse()[0])} />
        <div className="header_content">
          {mainStore.getOsAndResizeCheck() ? (
            <Fragment>
              <Link href={"/"}>
                <div className="top_logo">Lotto.Yul</div>
              </Link>
              <NavBarM />
            </Fragment>
          ) : (
            <Fragment>
              <Link href={"/"}>
                <div className="top_logo">Lotto.Yul</div>
              </Link>
              <NavBar />
              <HeaderBtn />
            </Fragment>
          )}
        </div>
      </div>
      <Banner />
    </Fragment>
  );
});

export default Header;
