import { Fragment } from "react";
import { observer } from "mobx-react";

const JoinSection1 = observer(() => {
  return (
    <div className="join_sec1">
      <div className="title">개인정보 처리방침</div>
      <div className="content">
        {`주식회사 배컴(이하 “회사”라 한다)은 랠리즈 서비스를 제공함에 있어 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」을 준수하기 위하여 노력하고 있습니다.
            회사는 개인정보 처리방침을 통하여 회사가 고객님께서 제공하시는 개인정보를 어떠한 용도와 방식으로 이용하고 있으며, 개인정보보호를 위해 어떠한 조치를 취하고 있는지 알려드립니다.
            본 방침은 2022년 10월 31일부터 시행되며, 회사는 이를 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지하겠습니다.`}
      </div>
    </div>
  );
});

export default JoinSection1;
