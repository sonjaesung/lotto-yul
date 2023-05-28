import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

type props = {
  title: String;
  mobile: String;
};

const IntroSection2 = observer(({ title, mobile }: props) => {
  return (
    <div className="intro_section2">
      <div className="bg">
        <Img
          src={
            mainStore.getOnlyMobile()
              ? "/Gradient_Bg_Mobile.png"
              : mainStore.getOnlyTablet()
              ? "/Gradient_Bg_Tablet.png"
              : "/Gradient_Bg.png"
          }
          className=""
        />
      </div>
      <div className="content">
        <div className="intro_se2_title">
          {mainStore.getOsAndResizeCheck() ? mobile : title}
        </div>
      </div>
    </div>
  );
});

export default IntroSection2;
