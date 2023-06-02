import mainStore from "@/store/mainStore";
import { observer } from "mobx-react";
import { Fragment, useEffect } from "react";

const Banner = observer(() => {
    useEffect(() => {
        window.addEventListener("resize", mainStore.changePcResize);
        return () => {
            window.removeEventListener("resize", mainStore.changePcResize);
        };
    }, []);

    return (
        <div className="header_banner_area">
            <div className="banner_title">
                {mainStore.currentLotto.drwNo !== 0 && <Fragment>
                    {mainStore.currentLotto.drwNo}회차
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore?.currentLotto?.drwtNo1].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo1}</div>
                    </div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.drwtNo2].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo2}</div>
                    </div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.drwtNo3].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo3}</div>
                    </div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.drwtNo4].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo4}</div>
                    </div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.drwtNo5].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo5}</div>
                    </div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.drwtNo6].color}>
                        <div className="text">{mainStore.currentLotto.drwtNo6}</div>
                    </div>
                    <div className="number_circle plus"><div className="text">+</div></div>
                    <div className="number_circle bonus" data-color={Object(mainStore.lotoForm)[mainStore.currentLotto.bnusNo].color}>
                        <div className="text">{mainStore.currentLotto.bnusNo}</div>
                    </div>
                </Fragment>}
            </div>
        </div>
    );
});

export default Banner;
