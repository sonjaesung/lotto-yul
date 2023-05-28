import Img from "../common/Img";
import Video from "../common/Video";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Link from "next/link";

const Section1 = observer(() => {
  return (
    <div className="section1">
      <div className="bg"></div>
      <div className="content">
        <div className="sec1_des">스마트한 학원 관리의 시작</div>
        {mainStore.getOsAndResizeCheck() ? (
          <div className="sec1_title">
            간편한 학원생활 플랫폼,
            <br />
            랠리즈
          </div>
        ) : (
          <div className="sec1_title">간편한 학원생활 플랫폼, 랠리즈</div>
        )}

        <div className="sec1_btn_aera">
          <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
            <button className="sec1_free_play">무료로 시작하기</button>
          </Link>
          <button
            className="sec1_how_to"
            onClick={() => mainStore.changeJoinPopupCheck(true)}
          >
            <div className="text_area">도입 문의</div>
            <Img src="/How_To.png" className="" />
          </button>
        </div>
        <div className="sec1_video_area">
          <Video src={"/Video_Main_Sec1_1.mp4"} />
        </div>
      </div>
    </div>
  );
});

export default Section1;
