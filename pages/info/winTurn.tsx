import { useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import { GetServerSideProps } from "next";

type lotoData = {
    totSellamnt: number,
    returnValue: String,
    drwNoDate: String,
    firstWinamnt: number,
    drwtNo6: number,
    drwtNo4: number,
    firstPrzwnerCo: number,
    drwtNo5: number,
    bnusNo: number,
    firstAccumamnt: number,
    drwNo: number,
    drwtNo2: number,
    drwtNo3: number,
    drwtNo1: number
}

type props = {
    lotoList: lotoData[];
}

const WinTurn = observer(({ lotoList }: props) => {
    useEffect(() => {
        lotoList.map(item => {
            mainStore.setAllList(item.drwtNo1);
            mainStore.setAllList(item.drwtNo2);
            mainStore.setAllList(item.drwtNo3);
            mainStore.setAllList(item.drwtNo4);
            mainStore.setAllList(item.drwtNo5);
            mainStore.setAllList(item.bnusNo);
        })

        window.addEventListener("resize", mainStore.changePcResize);
        return () => {
            window.removeEventListener("resize", mainStore.changePcResize);
        };
    }, []);

    return (
        <div className="lotto_info_area">
            <div className="title">당첨 회차 정보</div>
            <div className="section1">
                {lotoList.map((item, idx) => {
                    return <div key={idx} className="table_slot">
                        <div className="table_turn">
                            <div className="left">회차</div>
                            <div className="right">{item.drwNo}</div>
                        </div>
                        <div className="table_key_list">
                            <div className="left">당첨 번호</div>
                            <div className="right">
                                <div className="number_circle" data-color={Object(mainStore.allList)[item.drwtNo1].color}>
                                    <div className="text">{item.drwtNo1}</div>
                                </div>
                                <div className="number_circle" data-color={Object(mainStore.allList)[item.drwtNo2].color}>
                                    <div className="text">{item.drwtNo2}</div>
                                </div>
                                <div className="number_circle" data-color={Object(mainStore.allList)[item.drwtNo3].color}>
                                    <div className="text">{item.drwtNo3}</div>
                                </div>
                                <div className="number_circle" data-color={Object(mainStore.allList)[item.drwtNo4].color}>
                                    <div className="text">{item.drwtNo4}</div>
                                </div>
                                <div className="number_circle" data-color={Object(mainStore.allList)[item.drwtNo5].color}>
                                    <div className="text">{item.drwtNo5}</div>
                                </div>
                                <div className="number_circle plus"><div className="text">+</div></div>
                                <div className="number_circle bonus" data-color={Object(mainStore.allList)[item.drwtNo6].color}>
                                    <div className="text">{item.drwtNo6}</div>
                                </div>
                            </div>
                        </div>
                        <div className="table_total_reward">
                            <div className="left">당첨 금액</div>
                            <div className="right">{item.totSellamnt.toLocaleString()} 원</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
});

export const getServerSideProps: GetServerSideProps = async () => {
    let lotoList = [];
    let turn = 1;

    while (true) {
        const res = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${turn}`);
        const data = await res.json();

        if (data.returnValue === 'fail') {
            break;
        } else {
            lotoList.push(data);
            turn++;
        }
    }

    lotoList.sort().reverse();
    return {
        props: {
            lotoList,
        },
    }
};

export default WinTurn;
