import mainStore from "@/store/mainStore";
import Img from "../common/Img";
import { observer } from "mobx-react";

const textList = {
  title: "오직 고객의 눈높이에서,\n정확한 솔루션을 제공합니다",
  card: [
    {
      src: "/Img_Support_1.jpg",
      cardTitle: "간편한 학원 생활을 위한 든든한 러닝 메이트",
      cardDes: "우리 학원 전담 매니저 인터뷰",
    },
    {
      src: "/Img_Support_2.jpg",
      cardTitle: "랠리즈 사용, 어렵지 않아요! 1:1 눈높이 맞춤 시연/교육",
      cardDes: "전담 매니저 컨설팅 현장 스케치",
    },
  ],
};

const SupportSection3 = observer(() => {
  return (
    <div className="sup_section3">
      <div className="bg"></div>
      <div className="content">
        <div className="sup_title">{textList.title}</div>
        <div className="sup_card_area">
          {textList.card.map((item, idx) => {
            return (
              <div key={idx} className={`card num${idx}`}>
                <Img src={item.src} className="card_img" />
                <div className="card_title">{item.cardTitle}</div>
                <div className="card_des">{item.cardDes}</div>
              </div>
            );
          })}
        </div>
        <div className="sec3_btn_aera">
          <button
            className="sec3_how_to"
            onClick={() => mainStore.changeJoinPopupCheck(true)}
          >
            <div className="text_area">도입 문의</div>
            <Img src="/How_To.png" className="" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default SupportSection3;
