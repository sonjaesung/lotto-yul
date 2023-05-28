import mainStore from "@/store/mainStore";
import Img from "../common/Img";
import { observer } from "mobx-react";

const textList = {
  menu: "1:1 전담 매니저 서비스",
  title: "우리 학원만을 위한\n무료 맞춤 컨설팅",
  des: "간편하게 사용이 가능한 랠리즈,\n더 효율적인 활용법이 궁금하시다면?\n오직 우리 학원만을 위한 맞춤 컨설팅 서비스를 제공합니다.",
};

const SupportSection1 = observer(() => {
  return (
    <div className="sup_section1">
      <div className="bg"></div>
      <div className="content">
        <div className="sup_current_menu">{textList.menu}</div>
        <div className="sup_title">
          <div className="text">{textList.title}</div>
        </div>
        <div className="sec1_des">{textList.des}</div>
        <div className="sec1_btn_aera">
          <button
            className="sec1_how_to"
            onClick={() => mainStore.changeJoinPopupCheck(true)}
          >
            <div className="text_area">도입 문의</div>
            <Img src="/How_To.png" className="" />
          </button>
        </div>
        <div className="talk_area">
          <div className="slot">
            <Img src="/Img_Talk_1.png" className="talk img1" />
          </div>
          <div className="slot">
            <Img src="/Img_Talk_2.png" className="talk img2" />
          </div>
          <div className="slot">
            <Img src="/Img_Talk_3.png" className="talk img3" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SupportSection1;
