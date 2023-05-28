import { observer } from "mobx-react";
import Img from "../common/Img";
import mainStore from "@/store/mainStore";
import Link from "next/link";

const Section6 = observer(() => {
  return (
    <div className="section6">
      <div className="bg">
        <Img
          src={
            mainStore.getOnlyMobile()
              ? "/Gradient_Bg_Bottom_Mobile.png"
              : "/Gradient_Bg_Bottom.png"
          }
          className=""
        />
      </div>
      <div className="content">
        <div className="sec6_title">
          준비되셨나요?
          <br />
          새로운 학원생활이 {mainStore.getOsAndResizeCheck() ? <br /> : ""}곧
          시작됩니다
        </div>
        <div className="sec6_btn_area">
          <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
            <button className="sec6_free_play">
              <div className="text">무료로 시작하기</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Section6;
