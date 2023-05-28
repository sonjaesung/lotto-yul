import { useState } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Link from "next/link";

const title = "자주 묻는 질문";

const qaList = [
  {
    question: "재원생 규모에 따라 요금 정책이 달라지나요?",
    answer:
      "랠리즈는 등록되어 있는 원생, 학부모 수에 상관없이 100% 무료로 사용하실 수 있는 서비스입니다. 최초 학생 등록 이후 추가로 원생, 학부모님 정보를 등록하시는 경우에도 요금은 동일하게 무료로 유지됩니다.",
    mobile: "",
  },
  {
    question:
      "운영하는 학원이 1개 이상입니다. 학원 수를 추가해도 무료로 사용 가능한가요?",
    answer:
      "1개의 ID로 복수의 학원을 관리하시는 경우에도 관리하시는 학원의 수, 사용 기능에 관계 없이 요금은 동일하게 무료로 유지됩니다.",
    mobile:
      "운영하는 학원이 1개 이상입니다.\n학원 수를 추가해도 무료로 사용 가능한가요?",
  },
  {
    question: "알림톡/문자 무료 발송 수량이 정해져 있나요?",
    answer:
      "랠리즈에서 제공하는 알림톡/문자 발송 서비스는 발송 수량 제한 없이 없이 무료로 제공됩니다.",
    mobile: "",
  },
  {
    question: "모바일 결제서비스 가입비용은 얼마인가요?",
    answer: "랠리즈는 모바일 결제서비스 가입비용을 별도로 부과하지 않습니다.",
    mobile: "",
  },
  {
    question: "간편결제 진행 시, 수수료율이 어떻게 되나요?",
    answer:
      "랠리즈 모바일 간편결제 이용시 수수료율은 오프라인 결제 시 발생하는 단말기 카드 결제 수수료율과 동일하게 적용되어, 일반적으로 이용하시는 온라인/모바일 간편결제 서비스 대비 저렴한 수수료율을 적용 받으실 수 있습니다. 그 외, 랠리즈 결제 서비스 이용에 따른 별도 수수료는 발생하지 않습니다.",
    mobile: "",
  },
];

type partProps = {
  item: {
    question: String;
    answer: String;
    mobile: String;
  };
};

const PartQA = ({ item }: partProps) => {
  const [openCheck, setOpenCheck] = useState(false);
  return (
    <div className="question_area">
      <details>
        <summary onClick={() => setOpenCheck(!openCheck)}>
          <div className="text">
            {mainStore.getOsAndResizeCheck() && item.mobile !== ""
              ? item.mobile
              : item.question}
          </div>
          <div className="open_check">{openCheck ? "▲" : "▼"}</div>
        </summary>
        <div className="answer">{item.answer}</div>
      </details>
    </div>
  );
};

const PolicySection3 = observer(() => {
  return (
    <div className={`policy_section3`}>
      <div className="content">
        <div className="policy_se3_title">{title}</div>
        <div className="QA_area">
          {qaList.map((item, idx) => {
            return <PartQA item={item} key={idx} />;
          })}
        </div>
        <div className="btn_area">
          <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
            <button className="free_play">
              <div className="text">무료로 시작하기</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default PolicySection3;
