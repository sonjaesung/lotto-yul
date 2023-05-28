import { observer } from "mobx-react";

type props = {
  card: cardProps[];
};

type cardProps = {
  title: String;
  des: String;
};

const IntroSection5 = observer(({ card }: props) => {
  return (
    <div className="intro_section5">
      <div className="content">
        <div className="intro_sec5_title">같이 쓰면 유용한 기능</div>
        <div className="intro_card_area">
          {card.map((item, idx) => {
            return (
              <div className={`card count${idx}`} key={idx}>
                <div className="card_title">
                  <div className="text">{item.title}</div>
                </div>
                <div className="card_dec">{item.des}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default IntroSection5;
