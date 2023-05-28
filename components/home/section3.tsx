import { Fragment, useEffect } from "react";
import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const Section3 = observer(() => {
  const scrollAnimation = () => {
    let bg = document.querySelector(".section3 .bg");

    if (mainStore.pcResize === "pc") {
      if (window.scrollY >= 800 && window.scrollY < 1200) {
        bg?.classList.remove("step2");
        bg?.classList.remove("step3");
        bg?.classList.remove("step4");
        bg?.classList.add("step1");
      } else if (window.scrollY >= 1200 && window.scrollY < 1400) {
        bg?.classList.remove("step1");
        bg?.classList.remove("step3");
        bg?.classList.remove("step4");
        bg?.classList.add("step2");
      } else if (window.scrollY >= 1400 && window.scrollY < 1600) {
        bg?.classList.remove("step1");
        bg?.classList.remove("step2");
        bg?.classList.remove("step4");
        bg?.classList.add("step3");
      } else if (window.scrollY >= 1600 && window.scrollY < 1700) {
        bg?.classList.remove("step1");
        bg?.classList.remove("step2");
        bg?.classList.remove("step3");
        bg?.classList.add("step4");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  return (
    <div className="section3">
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
        {mainStore.getOsAndResizeCheck() ? (
          <Fragment>
            <div className="sec3_title">
              학원 관리의
              <br />
              시작과 끝을 가볍게,
              <br />
              새로운 학원 관리를
              <br />
              경험해보세요
            </div>
            <div className="sec3_des">
              학원 업무의 시작인
              <br />
              원생 데이터 통합 관리부터,
              <br />
              학원 업무의 끝인
              <br />
              학부모 소통까지
              <br />
              스마트하게 끝내보세요
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="sec3_title">
              학원 관리의 시작과 끝을 가볍게,
              <br />
              새로운 학원 관리를 경험해보세요
            </div>
            <div className="sec3_des">
              학원 업무의 시작인 원생 데이터 통합 관리부터,
              <br />
              학원 업무의 끝인 학부모 소통까지 스마트하게 끝내보세요
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
});

export default Section3;
