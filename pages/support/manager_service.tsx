import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import SupportSection1 from "@/components/support/supportSection1";
import SupportSection2 from "@/components/support/supportSection2";
import SupportSection3 from "@/components/support/supportSection3";
import mainStore from "@/store/mainStore";

const ManagerService = observer(() => {
  useEffect(() => {
    mainStore.changeOsCehck();
    window.addEventListener("resize", mainStore.changePcResize);
    return () => {
      window.removeEventListener("resize", mainStore.changePcResize);
    };
  }, []);

  return (
    <Fragment>
      <SupportSection1 />
      <SupportSection2 />
      <SupportSection3 />
    </Fragment>
  );
});

export default ManagerService;
