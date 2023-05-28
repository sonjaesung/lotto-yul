import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import OldJoinSection1 from "@/components/joinPrivateInfoTerms/oldJoinSection1";
import OldJoinSection2 from "@/components/joinPrivateInfoTerms/oldJoinSection2";

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
            <OldJoinSection1 />
            <OldJoinSection2 />
        </div>
    );
});

export default JoinPrivateInfoTerms;
