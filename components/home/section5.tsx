import { observer } from "mobx-react";
import Video from "../common/Video";
import mainStore from "@/store/mainStore";

const Section5 = observer(() => {
  return (
    <div className="section5">
      <div className="content">
        <div className="sec5_title">
          놀라지 마세요,
          <br />이 모든 기능이 {mainStore.getOsAndResizeCheck() ? <br /> : ""}
          모두 무료로 제공됩니다
        </div>
        <div className="sec5_video_area">
          <Video src={"/Video_Main_Sec1_1.mp4"} />
        </div>
      </div>
    </div>
  );
});

export default Section5;
