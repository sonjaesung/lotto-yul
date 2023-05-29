import { useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import { GetServerSideProps } from "next";
import moment from "moment";

type lotoData = {
  totSellamnt: number,
  returnValue: String,
  drwNoDate: String,
  firstWinamnt: number,
  drwtNo6: number,
  drwtNo4: number,
  firstPrzwnerCo: number,
  drwtNo5: number,
  bnusNo: number,
  firstAccumamnt: number,
  drwNo: number,
  drwtNo2: number,
  drwtNo3: number,
  drwtNo1: number
}

type props = {
  data: lotoData;
}


const Home = observer(({ data }: props) => {
  useEffect(() => {
    mainStore.setCurrentLotto(data);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const t1 = moment('20021207');
  const t2 = moment();
  const dff = moment.duration(t2.diff(t1)).asDays();
  const currentTurn = Math.floor(dff / 7) + 1;

  const res = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${currentTurn}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
};

export default Home;
