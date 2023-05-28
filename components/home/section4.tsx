import { Fragment, useEffect, useState } from "react";
import Img from "../common/Img";
import ImgFlow from "../common/ImgFlow";
import Video from "../common/Video";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const srcList: {
  imgList: string[];
  postUrl: string[];
} = {
  imgList: [],
  postUrl: [],
};

const partText = [
  {
    tag: "All-in-One",
    title: `학원 업무의 A to Z를<br />통합 관리하는 단 하나의 솔루션`,
    des: `이것 저것 쓰지 마세요, 랠리즈 하나면 충분해요`,
  },
  {
    tag: "자동 알림 서비스",
    title: `원생관리와 소통을 한번에,<br />자동 알림으로 막힘없이 유연한 소통`,
    des: `출결 · 수납 · 성적 · 공지, 버튼만 누르면 알림이 자동 발송돼요`,
  },
  {
    tag: "멀티 디바이스 관리",
    title: `필요할 땐 언제든 편리한 방식으로,<br />PC & 모바일 기반 학원 관리`,
    des: `모든 기능을 PC와 모바일에서 동일하게 사용할 수 있어요`,
  },
  {
    tag: "학원 활용 사례",
    title: `전국 1만여 개 학원 사용 중!<br />생생한 후기가 증명합니다`,
    des: ``,
  },
  {
    tag: "보안",
    title: `소중한 우리 학원 정보,<br />업계 No.1의 노하우로 든든하게`,
    des: `네이버 클라우드와 웅진씽크빅의 합작으로 탄생했습니다<br />업계 No.1의 기술력과 노하우로 믿을 수 있는 환경을 제공합니다`,
  },
];

const partTextM = [
  {
    tag: "All-in-One",
    title: `학원 업무의 A to Z를<br />통합 관리하는<br />단 하나의 솔루션`,
    des: `이것 저것 쓰지 마세요,<br />랠리즈 하나면 충분해요`,
  },
  {
    tag: "자동 알림 서비스",
    title: `원생관리와 소통을 한번에,<br />자동 알림으로<br />막힘없이 유연한 소통`,
    des: `출결 · 수납 · 성적 · 공지,<br />버튼만 누르면 알림이 자동 발송돼요`,
  },
  {
    tag: "멀티 디바이스 관리",
    title: `필요할 땐 언제든<br />편리한 방식으로,<br />PC & 모바일 기반 학원 관리`,
    des: `모든 기능을 PC와 모바일에서<br />동일하게 사용할 수 있어요`,
  },
  {
    tag: "학원 활용 사례",
    title: `전국 1만여 개 학원 사용 중!<br />생생한 후기가 증명합니다`,
    des: ``,
  },
  {
    tag: "보안",
    title: `소중한 우리 학원 정보,<br />업계 No.1의 노하우로<br />든든하게`,
    des: `네이버 클라우드와 웅진씽크빅의<br />합작으로 탄생했습니다<br />업계 No.1의 기술력과 노하우로<br />믿을 수 있는 환경을 제공합니다`,
  },
];

const cardText = [
  {
    title: "학원 행정",
    des: `학원비 수납<br />원생 명부 관리<br />학원 전체 공지`,
    img: `/Icon_Administration.png`,
  },
  {
    title: "수업 지원",
    des: `출결 등록/관리<br />화상 강의<br />성적표 작성/관리`,
    img: `/Icon_Support.png`,
  },
  {
    title: "클래스 관리",
    des: `우리 반 커뮤니티<br />클래스 공지<br />클래스 자료실`,
    img: `/Icon_Management.png`,
  },
];

type partProps = {
  tag: string;
  title: string;
  des: string;
};

const Part = ({ tag, title, des }: partProps) => {
  return (
    <Fragment>
      <div className="sec4_tag" dangerouslySetInnerHTML={{ __html: tag }}></div>
      <div
        className="sec4_title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
      {des === "" ? (
        ""
      ) : (
        <div
          className="sec4_des"
          dangerouslySetInnerHTML={{ __html: des }}
        ></div>
      )}
    </Fragment>
  );
};

type cardProps = {
  title: string;
  des: string;
  img: string;
  idx: number;
};

const Card = ({ title, des, img, idx }: cardProps) => {
  return (
    <div className={`card card${idx}`}>
      <div className="card_title">
        <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
        <Img src={img} className="" />
      </div>
      <div className="card_dec" dangerouslySetInnerHTML={{ __html: des }}></div>
    </div>
  );
};

interface BlogProps {
  data: {
    imgList: string[];
    postUrl: string[];
  };
}

const Section4 = observer(({ data }: BlogProps) => {
  const [aniOnOff, setAniOnOff] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      data.imgList.map((item) => {
        srcList.imgList.push(item);
      });
      data.postUrl.map((item) => {
        srcList.postUrl.push(item);
      });
    }
  }, []);

  const scrollAnimation = () => {
    let cardList = document.querySelectorAll(".card");

    if (window.scrollY >= 1750 && window.scrollY < 1950 && !aniOnOff) {
      setAniOnOff(true);
      cardList.forEach((item, idx) => {
        item.classList.add("active");
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, [aniOnOff]);

  return (
    <Fragment>
      <div className="section4">
        <div className="content">
          <div className="sec4_part">
            {mainStore.getOnlyMobile() ? (
              <Part
                tag={partTextM[0].tag}
                title={partTextM[0].title}
                des={partTextM[0].des}
              />
            ) : (
              <Part
                tag={partText[0].tag}
                title={partText[0].title}
                des={partText[0].des}
              />
            )}
            <div className="sec4_card_area">
              {cardText.map((item, idx) => {
                return (
                  <Card
                    key={idx}
                    title={item.title}
                    des={item.des}
                    img={item.img}
                    idx={idx}
                  />
                );
              })}
            </div>
          </div>
          <div className="sec4_part">
            {mainStore.getOnlyMobile() ? (
              <Fragment>
                <Part
                  tag={partTextM[1].tag}
                  title={partTextM[1].title}
                  des={partTextM[1].des}
                />
                <div className="sec4_video_area_multi">
                  <div className="sec4_video_area">
                    <Video src={"/Video_Main_Sec4_Mobile_1.mp4"} />
                  </div>
                  <div className="sec4_video_area">
                    <Video src={"/Video_Main_Sec4_Mobile_2.mp4"} />
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Part
                  tag={partText[1].tag}
                  title={partText[1].title}
                  des={partText[1].des}
                />
                {mainStore.getOnlyTablet() ? (
                  <div className="sec4_video_area_multi">
                    <div className="sec4_video_area">
                      <Video src={"/Video_Main_Sec4_Mobile_1.mp4"} />
                    </div>
                    <div className="sec4_video_area">
                      <Video src={"/Video_Main_Sec4_Mobile_2.mp4"} />
                    </div>
                  </div>
                ) : (
                  <div className="sec4_video_area">
                    <Video src={"/Video_Main_Sec4.mp4"} />
                  </div>
                )}
              </Fragment>
            )}
          </div>
          <div className="sec4_part">
            {mainStore.getOnlyMobile() ? (
              <Part
                tag={partTextM[2].tag}
                title={partTextM[2].title}
                des={partTextM[2].des}
              />
            ) : (
              <Part
                tag={partText[2].tag}
                title={partText[2].title}
                des={partText[2].des}
              />
            )}
            <div className="sec4_btn_area">
              <button
                className="go_store google"
                onClick={() => window.open("https://smart.link/mtwovd3g0c5x6")}
              >
                <Img src="/Google_Play.png" className="" />
              </button>
              <button
                className="go_store app"
                onClick={() => window.open("https://smart.link/vzgxphbamha0f")}
              >
                <Img src="/App_Store.png" className="" />
              </button>
            </div>
            {mainStore.getOnlyMobile() ? (
              <div className="slider_area auto">
                <Img src="/Main_Sec4_Img_Mobile_1.png" className="" />
                <Img src="/Main_Sec4_Img_Mobile_2.png" className="" />
              </div>
            ) : (
              <div className="img_area multi">
                <Img src="/Main_Sec4_Img.png" className="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section4 gray">
        <div className="content">
          <div className="sec4_part">
            {mainStore.getOnlyMobile() ? (
              <Part
                tag={partTextM[3].tag}
                title={partTextM[3].title}
                des={partTextM[3].des}
              />
            ) : (
              <Part
                tag={partText[3].tag}
                title={partText[3].title}
                des={partText[3].des}
              />
            )}
            <div className="flow_area">
              <ImgFlow srcList={srcList.imgList} postUrl={srcList.postUrl} />
            </div>
          </div>

          <div className="sec4_part">
            {mainStore.getOnlyMobile() ? (
              <Part
                tag={partTextM[4].tag}
                title={partTextM[4].title}
                des={partTextM[4].des}
              />
            ) : (
              <Part
                tag={partText[4].tag}
                title={partText[4].title}
                des={partText[4].des}
              />
            )}
            <div className="img_area">
              <Img src="/Logo_Naver.png" className="logo_naver" />
              <Img src="/Icon_X.png" className="icon_x" />
              <Img src="/Logo_Woongin.png" className="logo_woongin" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default Section4;
