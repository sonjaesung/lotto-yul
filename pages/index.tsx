import { useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const Home = observer(() => {
  useEffect(() => {
    window.addEventListener("resize", mainStore.changePcResize);
    return () => {
      window.removeEventListener("resize", mainStore.changePcResize);
    };
  }, []);

  return (
    <div className="home_area">
      <div className="title">Eun Yul's Lotto</div>
      <div className="workspace">
        <div className="sub_title">기술 스펙</div>
        <div className="des">작업 툴 : VS Code</div>
        <div className="des">프레임워크 : Next.js with typeScript</div>
        <div className="des">상태관리 : Mobx</div>
        <div className="des">스타일시트 : scss 반응형</div>
      </div>
      <div className="version">
        <div className="sub_title">작업 환경</div>
        <div className="des">npm Version : v8.1.2</div>
        <div className="des">node Version : v16.13.2</div>
        <div className="des">git : https://github.com/sonjaesung/lotto-yul</div>
      </div>
      <div className="introduce">
        <div className="sub_title">작업자 정보</div>
        <div className="des">작업자 : Eun Yul</div>
        <div className="des">E-Mail : loki92@naver.com</div>
      </div>
    </div>
  );
});

export default Home;
