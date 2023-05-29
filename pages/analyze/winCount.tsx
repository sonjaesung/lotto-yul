import { Fragment, useEffect } from "react";
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

const WinCount = observer(({ lotoList }: props) => {
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
        <div className="lotto_count_area">
            <div className="title">당첨 번호 횟수</div>
            <div className="section1">
                {Object.keys(mainStore.allList).sort((a, b) => {
                    return Object(mainStore.allList)[b].count - Object(mainStore.allList)[a].count;
                }).map((item, idx) => {
                    return <div key={idx} className="table_slot">
                        <div className="table_key">{Object(mainStore.allList)[item].key} 번</div>
                        <div className="table_count">{Object(mainStore.allList)[item].count}</div>
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

export default WinCount;
