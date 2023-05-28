import { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Link from "next/link";

type props = {
  title: String;
  mobile: String;
};

const IntroSection4 = observer(({ title, mobile }: props) => {
  const [mobileCheck, setMobileCheck] = useState(Boolean);
  const [tabletCheck, setTabletCheck] = useState(Boolean);

  useEffect(() => {
    setMobileCheck(isMobile);
    setTabletCheck(isTablet);
  }, []);

  return (
    <div className="intro_section4">
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
        <div className="intro_se4_title">
          {mainStore.getOsAndResizeCheck() ? mobile : title}
        </div>
        <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
          <button className="free_play">
            <div className="text">무료로 시작하기</div>
          </button>
        </Link>
      </div>
    </div>
  );
});

export default IntroSection4;
