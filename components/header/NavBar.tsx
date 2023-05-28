import Link from "next/link";
import { navigation } from "@/routes/navigation";
import { observer } from "mobx-react";

const NavBar = observer(() => {
  return (
    <nav className="nav_area">
      {navigation.filter(item => item.menu !== 'JoinPrivateInfoTerms').map((item, idx) => {
        if (item.subnav) {
          return (
            <div key={idx} className="mainNab">
              <Link href={item.subnav[0].url}>
                {item.title}
                {item.subnav.length > 0 && item.menu !== "Blog" ? (
                  <div className="arrow"></div>
                ) : (
                  ""
                )}
              </Link>

              <div className="subNab">
                {item.subnav.map((sub, index) => {
                  if (item.menu !== "Blog") {
                    if (sub.name === "사용 가이드") {
                      return (
                        <div className="sub_text_area" key={index}>
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.name}
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <div className="sub_text_area" key={index}>
                          <Link href={sub.url}>{sub.name}</Link>
                        </div>
                      );
                    }
                  } else {
                    return "";
                  }
                })}
              </div>
            </div>
          );
        } else {
          return (
            <Link key={idx} href={item.url}>
              {item.title}
            </Link>
          );
        }
      })}
    </nav>
  );
});

export default NavBar;
