import { Fragment } from "react";
import { observer } from "mobx-react";
import Link from "next/link";

const JoinSection3 = observer(() => {
  return (
    <div className="join_sec3">
      <div className="member joinPrivateInfoTerms">
        <p>&lt; 부칙 &gt;</p>
        <p>① 본 약관은 2022년 10월 31일부터 적용됩니다. </p>
        <br />
        <p>- 이전 개인정보처리방침 보기</p>
        <Link
          href="/joinPrivateInfoTerms/20221030"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          * (2022년 02월 07일 ~ 2022년 10월 30일)
        </Link>
      </div>
    </div>
  );
});

export default JoinSection3;
