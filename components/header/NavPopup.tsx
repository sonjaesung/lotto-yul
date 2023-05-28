import { navigation } from "@/routes/navigation";
import { observer } from "mobx-react";
import Link from "next/link";
import { Fragment } from "react";
import mainStore from "@/store/mainStore";

const NavPopup = observer(() => {
  return (
    <div className="nav_popup_area">
      {navigation.map((item, idx) => {
        if (item.subnav) {
          return (
            <div key={idx} className="mainNab_M">
              {mainStore.getOsAndResizeCheck() ? (
                <div className="nab_title">{item.title}</div>
              ) : (
                <Link href={item.subnav[0].url}>{item.title}</Link>
              )}

              <div className="subNab_M">
                {item.subnav.map((sub, index) => {
                  return (
                    <div className="sub_text_area" key={index}>
                      <Link href={sub.url}>{sub.name}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return (
            <Fragment key={idx}>
              {mainStore.getOsAndResizeCheck() ? (
                <div className="mainNab_M">
                  <div className="nab_title">
                    <Link key={idx} href={item.url}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              ) : (
                <Link key={idx} href={item.url}>
                  {item.title}
                </Link>
              )}
            </Fragment>
          );
        }
      })}
      <div className="nav_btn_area">
        <button className="nav_free_use_btn">무료로 사용해보기</button>
        <button className="nav_login_btn">로그인</button>
      </div>
    </div>
  );
});

export default NavPopup;
