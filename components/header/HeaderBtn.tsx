import { observer } from "mobx-react";
import Link from "next/link";

const HeaderBtn = observer(() => {
  return (
    <div className="header_btn_area">
      <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
        <button className="free_use_btn">무료사용</button>
      </Link>
      <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
        <button className="login_btn">로그인</button>
      </Link>
    </div>
  );
});

export default HeaderBtn;
