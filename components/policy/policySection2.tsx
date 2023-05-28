import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const text = "비교할수록,\n학원 비용 부담 없는\n랠리즈가 정답입니다";

const PolicySection2 = observer(() => {
  return (
    <div className={`policy_section2`}>
      <div className="bg">
        <Img
          src={
            mainStore.getOnlyMobile()
              ? "/Gradient_Bg_Bottom_Mobile.png"
              : mainStore.getOnlyTablet()
              ? "/Gradient_Bg_Bottom_Tablet.png"
              : "/Gradient_Bg_Bottom.png"
          }
          className=""
        />
      </div>
      <div className="content">
        <div className="policy_se2_title">{text}</div>
      </div>
    </div>
  );
});

export default PolicySection2;
