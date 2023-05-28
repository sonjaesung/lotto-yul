import { Fragment, useEffect, useState } from "react";
import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";

const NavBarM = observer(() => {
  return (
    <Fragment>
      {mainStore.menuPopup ? (
        <button
          className="m_option_btn closed"
          onClick={() => mainStore.changeMenuPopup(false)}
        >
          <div>X</div>
        </button>
      ) : (
        <button
          className="m_option_btn open"
          onClick={() => mainStore.changeMenuPopup(true)}
        >
          <div>MENU</div>
        </button>
      )}
    </Fragment>
  );
});

export default NavBarM;
