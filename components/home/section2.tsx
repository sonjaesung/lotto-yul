import { observer } from "mobx-react";
import Video from "../common/Video";
import { Fragment } from "react";
import mainStore from "@/store/mainStore";

const Section2 = observer(() => {
  return (
    <div className="section2">
      <div className="content">
        {mainStore.getOsAndResizeCheck() ? (
          <Fragment>
            <div className="sec2_title">
              학원 관리,
              <br />
              불편함을 참고 있지
              <br />
              않으신가요?
            </div>
            <div className="sec2_des">
              각각의 기능별 솔루션을 통해
              <br />
              원생 이력을 따로따로 관리하느라,
              <br />
              반복되는 소통 업무를 소화하느라,
              <br />
              피로가 쌓이고 있지 않으신가요?
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="sec2_title">
              학원 관리,
              <br />
              불편함을 참고 있지 않으신가요?
            </div>
            <div className="sec2_des">
              각각의 기능별 솔루션을 통해 원생 이력을 따로따로 관리하느라,
              <br />
              반복되는 소통 업무를 소화하느라, 피로가 쌓이고 있지 않으신가요?
            </div>
          </Fragment>
        )}

        <div className="sec2_video_area">
          <Video
            src={
              mainStore.getOnlyMobile()
                ? "/Video_Main_Sec2_Mobile.mp4"
                : "/Video_Main_Sec2.mp4"
            }
          />
        </div>
      </div>
    </div>
  );
});

export default Section2;
