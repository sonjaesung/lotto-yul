import Link from "next/link";
import Img from "../common/Img";
import { navigation } from "@/routes/navigation";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const Footer = observer(() => {
  return (
    <div className="footer_area">
      <div className="bg"></div>
      <div className="content">
        <div className="footer_top">
          <div className="footer_menu_area">
            <div className="footer_title_area">
              <div className="footer_des">로또 정보와 알고리즘</div>
              <div className="footer_title">Lotto.Yul</div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div>
            <div>
              (주) Eun Yul | 작업자 Eun Yul {mainStore.getOnlyMobile() ? <br /> : "|"}{" "}
              서울특별시 송파구
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
