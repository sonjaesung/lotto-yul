import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const textList = {
  title: "초기 도입부터 사용 관리까지,\n우리 학원만을 위한 밀착 서비스",
  titleM: "초기 도입부터\n사용 관리까지,\n우리 학원만을 위한 밀착 서비스",
  card: [
    {
      title: "초기 세팅",
      des: "원생 데이터 일괄 등록\n학원, 클래스 세팅",
      src: "/Icon_Manager_Option.png",
    },
    {
      title: "사용법 교육",
      des: "학원 유형별 사용법 교육\n사용자 유형별 사용법 교육",
      src: "/Icon_Manual.png",
    },
    {
      title: "사용 관리",
      des: "사용 중 문제 해결\n개선 요청 사항 접수",
      src: "/Icon_Tel.png",
    },
  ],
};

const SupportSection2 = observer(() => {
  return (
    <div className="sup_section2">
      <div className="content">
        <div className="sup_sec2_title">
          {mainStore.getOsAndResizeCheck() ? textList.titleM : textList.title}
        </div>
        <div className="sup_card_area">
          {textList.card.map((item, idx) => {
            return (
              <div key={idx} className={`card num${idx}`}>
                <div className="title_area">
                  <div className="title">{item.title}</div>
                  <Img src={item.src} className="card_icon" />
                </div>
                <div className="des">{item.des}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default SupportSection2;
