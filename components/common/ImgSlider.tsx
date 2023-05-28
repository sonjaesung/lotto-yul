import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Img from "./Img";
import { observer } from "mobx-react";

type props = {
  srcList: string[];
};

const ImgSlider = observer(({ srcList }: props) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 25,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {srcList.map((item, idx) => {
        return (
          <div key={idx} className={`keen-slider__slide slide${idx}`}>
            <div className="img_area">
              <Img src={item} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default ImgSlider;
