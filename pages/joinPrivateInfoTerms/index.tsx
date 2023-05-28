import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import JoinSection1 from "@/components/joinPrivateInfoTerms/joinSection1";
import JoinSection2 from "@/components/joinPrivateInfoTerms/joinSection2";
import JoinSection3 from "@/components/joinPrivateInfoTerms/joinSection3";
import mainStore from "@/store/mainStore";

const JoinPrivateInfoTerms = observer(() => {
    useEffect(() => {
        mainStore.changeOsCehck();
        window.addEventListener("resize", mainStore.changePcResize);
        return () => {
            window.removeEventListener("resize", mainStore.changePcResize);
        };
    }, []);

    return (
        <div className="join_private_area">
            <JoinSection1 />
            <JoinSection2 />
            <JoinSection3 />
        </div>
    );
});

export default JoinPrivateInfoTerms;
