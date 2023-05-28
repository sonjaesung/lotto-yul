import { useEffect, useState } from "react";
import Img from "../common/Img";
import Video from "../common/Video";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

type props = {
  content: contentprops[];
  page: String;
};

type contentprops = {
  tag: String;
  title: String;
  des: String[];
  btnText: String[];
  resource: String[];
  mobile: String[];
};

const IntroSection3 = observer(({ content, page }: props) => {
  const [btnCheck, setBtnCheck] = useState(1);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.pathname?.split("/").reverse()[0]);
  }, []);

  return (
    <div className={`intro_section3 ${page}`}>
      <div className="bg"></div>
      <div className="content">
        {content.map((item, idx) => {
          return (
            <div className="intro_sec3_part" key={idx}>
              <div className="left">
                <div className={`intro_sec3_tag tag${idx}`}>{item.tag}</div>
                <div className="intro_sec3_title">{item.title}</div>
                <div className="intro_sec3_des">
                  {item.btnText.length > 0
                    ? item.des[btnCheck - 1]
                    : item.des[0]}
                </div>
                {btnCheck === 1 && location === "payment" && idx === 0 ? (
                  <div className="option">
                    * 자동 회차 차감 - 랠리즈 출석 병행 사용 시 가능
                  </div>
                ) : (
                  ""
                )}
                {item.btnText.length > 0 ? (
                  <div className="intro_sec3_btn_area">
                    <button
                      className={`btn_1 ${btnCheck === 1 ? "on" : ""}`}
                      onClick={() => setBtnCheck(1)}
                    >
                      {item.btnText[0]}
                    </button>
                    <button
                      className={`btn_2 ${btnCheck === 2 ? "on" : ""}`}
                      onClick={() => setBtnCheck(2)}
                    >
                      {item.btnText[1]}
                    </button>
                    {location === "class_community" ? (
                      <button
                        className={`btn_3 ${btnCheck === 3 ? "on" : ""}`}
                        onClick={() => setBtnCheck(3)}
                      >
                        {item.btnText[2]}
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="right">
                {item.resource.length > 1 ? (
                  item.resource[0].split(".").reverse()[0] === "mp4" ? (
                    <div className={`intro_sec3_video_area res${idx}`}>
                      <Video src={item.resource[btnCheck - 1].toString()} />
                    </div>
                  ) : (
                    <Img
                      src={item.resource[btnCheck - 1].toString()}
                      className={`intro_sec3_img_area part${idx}`}
                    />
                  )
                ) : item.resource[0].split(".").reverse()[0] === "mp4" ? (
                  mainStore.getOsAndResizeCheck() ? (
                    <div className="intro_sec3_video_multi_area">
                      <div className={`intro_sec3_video_multi res${idx}`}>
                        <Video src={item.mobile[0].toString()} />
                      </div>
                      <div className={`intro_sec3_video_multi res${idx}`}>
                        <Video src={item.mobile[1].toString()} />
                      </div>
                    </div>
                  ) : (
                    <div className={`intro_sec3_video_area res${idx}`}>
                      <Video src={item.resource[0].toString()} />
                    </div>
                  )
                ) : mainStore.getOsAndResizeCheck() ? (
                  <div className="intro_sec3_img_multi">
                    {item.mobile.map((item, num) => {
                      return (
                        <Img
                          src={item.toString()}
                          className={`intro_sec3_img_area part${idx}`}
                          key={num}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <Img
                    src={item.resource[0].toString()}
                    className={`intro_sec3_img_area part${idx}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default IntroSection3;
