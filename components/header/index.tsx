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
  winCount: {
    title: "로또 정보ㅣ당첨 번호 회수",
    des: "역대 로또 당첨 번호 카운팅, 많이 당첨 되어있는 순서대로 한눈에!",
  },
  winTurn: {
    title: "로또 정보 ㅣ 당첨 회차 정보",
    des: "역대 로또 회차별 번호, 당첨금 정보를 최신 회차 순서로 한눈에!",
  },
  class_management: {
    title: "학원 성적관리·화상강의 솔루션ㅣ 학원생활 플랫폼 랠리즈",
    des: "학원 수업에 최적화된 무료 LIVE 화상강의, 시험 유형별 학원 성적표 작성 및 발송, 개인별 학습 종합 보고서까지! 체계적인 학원 수업 관리, 랠리즈로 한 번에 끝",
  },
  class_community: {
    title: "간편한 학원공지, 학습자료 공유ㅣ학원생활 플랫폼 랠리즈",
    des: "학원, 클래스, 학생별 공지부터 피드 게시판을 통한 학습 자료 공유, 중요한 학원 소식 자동 알림 서비스까지, 우리 학원 소통은 랠리즈 하나로 OK! ",
  },
  policy: {
    title: "랠리즈 요금정책ㅣ 100% 무료 학원관리프로그램",
    des: "학원 비용 부담 ZERO! 초기 세팅 비용, 서비스 이용료, 문자 발송 등 부대비용 100% 무료! 우리 학원 관리, 무료 학원관리프로그램 랠리즈로 끝!  ",
  },
  manager_service: {
    title: "우리 학원 맞춤 컨설팅ㅣ 학원생활 플랫폼 랠리즈",
    des: "오직 우리 학원만을 위한 무료 맞춤 컨설팅 서비스, 학원관리프로그램 도입 및 활용 고민하지 마세요. 랠리즈 1:1 전담 매니저가 해결해드립니다.",
  },
  blog: {
    title: "블로그ㅣ간편한 학원생활 플랫폼 랠리즈",
    des: "랠리즈 고객 활용 사례,랠리즈 활용 팁,랠리즈 업데이트 뉴스까지, 랠리즈의 모든 소식을 전해드립니다.",
  },
  joinPrivateInfoTerms: {
    title: "간편한 학원생활 플랫폼 랠리즈ㅣ개인정보 처리방침",
    des: "",
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
