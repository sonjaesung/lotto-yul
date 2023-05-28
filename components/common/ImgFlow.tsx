import { observer } from "mobx-react";

type props = {
  srcList: string[];
  postUrl: string[];
};

const ImgFlow = observer(({ srcList, postUrl }: props) => {
  return (
    <div className="img_flow">
      {srcList.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flow_card"
            onClick={() => window.open(postUrl[idx])}
          >
            <div className="flow_img_area">
              <img src={item} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default ImgFlow;
