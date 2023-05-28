import mainStore from "@/store/mainStore";
import Img from "../common/Img";
import Video from "../common/Video";
import { observer } from "mobx-react";
import Link from "next/link";

type props = {
  currentMenu: String;
  title: String;
  des: String;
  resource: String;
  page: String;
};

const IntroSection1 = observer(
  ({ currentMenu, title, des, resource, page }: props) => {
    return (
      <div className={`intro_section1 ${page}`}>
        <div className="content">
          <div className="intro_current_menu">{currentMenu}</div>
          <div className="intro_title">{title}</div>
          <div className="intro_des">{des}</div>
          <div className="intro_btn_area">
            <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
              <button className="intro_free_start">무료로 시작하기</button>
            </Link>
            <button
              className="intro__how_to"
              onClick={() => mainStore.changeJoinPopupCheck(true)}
            >
              <div className="text_area">도입 문의</div>
              <Img src="/How_To.png" className="" />
            </button>
          </div>
          <div className="intro_video_area">
            <Video src={resource.toString()} />
          </div>
        </div>
      </div>
    );
  }
);

export default IntroSection1;
