import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import PolicySection1 from "@/components/policy/policySection1";
import PolicySection2 from "@/components/policy/policySection2";
import PolicySection3 from "@/components/policy/policySection3";
import mainStore from "@/store/mainStore";

const Policy = observer(() => {
  useEffect(() => {
    mainStore.changeOsCehck();
    window.addEventListener("resize", mainStore.changePcResize);
    return () => {
      window.removeEventListener("resize", mainStore.changePcResize);
    };
  }, []);

  return (
    <Fragment>
      <PolicySection1 />
      <PolicySection2 />
      <PolicySection3 />
    </Fragment>
  );
});

export default Policy;
