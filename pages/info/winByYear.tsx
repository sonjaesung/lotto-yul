import { useEffect, useState } from "react";
import { observer, useStaticRendering } from "mobx-react";
import mainStore from "@/store/mainStore";
import { GetServerSideProps } from "next";

type lotoData = {
    totSellamnt: number,
    returnValue: string,
    drwNoDate: string,
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

type allListData = {
    1: {
        key: number,
        count: number,
        color: string
    },
    2: {
        key: number,
        count: number,
        color: string
    },
    3: {
        key: number,
        count: number,
        color: string
    },
    4: {
        key: number,
        count: number,
        color: string
    },
    5: {
        key: number,
        count: number,
        color: string
    },
    6: {
        key: number,
        count: number,
        color: string
    },
    7: {
        key: number,
        count: number,
        color: string
    },
    8: {
        key: number,
        count: number,
        color: string
    },
    9: {
        key: number,
        count: number,
        color: string
    },
    10: {
        key: number,
        count: number,
        color: string
    },
    11: {
        key: number,
        count: number,
        color: string
    },
    12: {
        key: number,
        count: number,
        color: string
    },
    13: {
        key: number,
        count: number,
        color: string
    },
    14: {
        key: number,
        count: number,
        color: string
    },
    15: {
        key: number,
        count: number,
        color: string
    },
    16: {
        key: number,
        count: number,
        color: string
    },
    17: {
        key: number,
        count: number,
        color: string
    },
    18: {
        key: number,
        count: number,
        color: string
    },
    19: {
        key: number,
        count: number,
        color: string
    },
    20: {
        key: number,
        count: number,
        color: string
    },
    21: {
        key: number,
        count: number,
        color: string
    },
    22: {
        key: number,
        count: number,
        color: string
    },
    23: {
        key: number,
        count: number,
        color: string
    },
    24: {
        key: number,
        count: number,
        color: string
    },
    25: {
        key: number,
        count: number,
        color: string
    },
    26: {
        key: number,
        count: number,
        color: string
    },
    27: {
        key: number,
        count: number,
        color: string
    },
    28: {
        key: number,
        count: number,
        color: string
    },
    29: {
        key: number,
        count: number,
        color: string
    },
    30: {
        key: number,
        count: number,
        color: string
    },
    31: {
        key: number,
        count: number,
        color: string
    },
    32: {
        key: number,
        count: number,
        color: string
    },
    33: {
        key: number,
        count: number,
        color: string
    },
    34: {
        key: number,
        count: number,
        color: string
    },
    35: {
        key: number,
        count: number,
        color: string
    },
    36: {
        key: number,
        count: number,
        color: string
    },
    37: {
        key: number,
        count: number,
        color: string
    },
    38: {
        key: number,
        count: number,
        color: string
    },
    39: {
        key: number,
        count: number,
        color: string
    },
    40: {
        key: number,
        count: number,
        color: string
    },
    41: {
        key: number,
        count: number,
        color: string
    },
    42: {
        key: number,
        count: number,
        color: string
    },
    43: {
        key: number,
        count: number,
        color: string
    },
    44: {
        key: number,
        count: number,
        color: string
    },
    45: {
        key: number,
        count: number,
        color: string
    }
}

type props = {
    lotoList: lotoData[];
    allList: allListData;
}

const WinByYear = observer(({ lotoList, allList }: props) => {
    const [year, setYear] = useState((new Date()).getFullYear());
    const [yearData, setYearData] = useState<lotoData[]>([]);

    const prevYear = () => {
        if ((new Date()).getFullYear() !== 2002) {
            setYear(year - 1);
        }
    }
    const nestYear = () => {
        if ((new Date()).getFullYear() !== year) {
            setYear(year + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", mainStore.changePcResize);
        return () => {
            window.removeEventListener("resize", mainStore.changePcResize);
        };
    }, []);

    useEffect(() => {
        const data = lotoList.filter((item: lotoData) =>
            (new Date(item.drwNoDate)).getFullYear() === year
        )
        setYearData(data);
    }, [lotoList, year]);

    return (
        <div className="lotto_info_area">
            <div className="title">연도별 당첨 정보</div>
            <div className="year_title">
                <button className="prev_btn" onClick={() => prevYear()}>◀</button>
                {year} 년
                <button className="next_btn" onClick={() => nestYear()}>▶</button>
            </div>
            <div className="section1">
                {yearData.map((item, idx) => {
                    return <div key={idx} className="table_slot">
                        <div className="table_key_list">
                            <div className="left">당첨 번호</div>
                            <div className="right">
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo1].color}>
                                    <div className="text">{item.drwtNo1}</div>
                                </div>
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo2].color}>
                                    <div className="text">{item.drwtNo2}</div>
                                </div>
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo3].color}>
                                    <div className="text">{item.drwtNo3}</div>
                                </div>
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo4].color}>
                                    <div className="text">{item.drwtNo4}</div>
                                </div>
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo5].color}>
                                    <div className="text">{item.drwtNo5}</div>
                                </div>
                                <div className="number_circle" data-color={Object(allList)[item.drwtNo6].color}>
                                    <div className="text">{item.drwtNo6}</div>
                                </div>
                                <div className="number_circle plus"><div className="text">+</div></div>
                                <div className="number_circle bonus" data-color={Object(allList)[item.bnusNo].color}>
                                    <div className="text">{item.bnusNo}</div>
                                </div>
                            </div>
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
    let allList: object = {
        1: {
            key: 1,
            count: 0,
            color: '#f2b720'
        },
        2: {
            key: 2,
            count: 0,
            color: '#f2b720'
        },
        3: {
            key: 3,
            count: 0,
            color: '#f2b720'
        },
        4: {
            key: 4,
            count: 0,
            color: '#f2b720'
        },
        5: {
            key: 5,
            count: 0,
            color: '#f2b720'
        },
        6: {
            key: 6,
            count: 0,
            color: '#f2b720'
        },
        7: {
            key: 7,
            count: 0,
            color: '#f2b720'
        },
        8: {
            key: 8,
            count: 0,
            color: '#f2b720'
        },
        9: {
            key: 9,
            count: 0,
            color: '#f2b720'
        },
        10: {
            key: 10,
            count: 0,
            color: '#f2b720'
        },
        11: {
            key: 11,
            count: 0,
            color: '#4072ac'
        },
        12: {
            key: 12,
            count: 0,
            color: '#4072ac'
        },
        13: {
            key: 13,
            count: 0,
            color: '#4072ac'
        },
        14: {
            key: 14,
            count: 0,
            color: '#4072ac'
        },
        15: {
            key: 15,
            count: 0,
            color: '#4072ac'
        },
        16: {
            key: 16,
            count: 0,
            color: '#4072ac'
        },
        17: {
            key: 17,
            count: 0,
            color: '#4072ac'
        },
        18: {
            key: 18,
            count: 0,
            color: '#4072ac'
        },
        19: {
            key: 19,
            count: 0,
            color: '#4072ac'
        },
        20: {
            key: 20,
            count: 0,
            color: '#4072ac'
        },
        21: {
            key: 21,
            count: 0,
            color: '#de4c0e'
        },
        22: {
            key: 22,
            count: 0,
            color: '#de4c0e'
        },
        23: {
            key: 23,
            count: 0,
            color: '#de4c0e'
        },
        24: {
            key: 24,
            count: 0,
            color: '#de4c0e'
        },
        25: {
            key: 25,
            count: 0,
            color: '#de4c0e'
        },
        26: {
            key: 26,
            count: 0,
            color: '#de4c0e'
        },
        27: {
            key: 27,
            count: 0,
            color: '#de4c0e'
        },
        28: {
            key: 28,
            count: 0,
            color: '#de4c0e'
        },
        29: {
            key: 29,
            count: 0,
            color: '#de4c0e'
        },
        30: {
            key: 30,
            count: 0,
            color: '#de4c0e'
        },
        31: {
            key: 31,
            count: 0,
            color: '#9195a4'
        },
        32: {
            key: 32,
            count: 0,
            color: '#9195a4'
        },
        33: {
            key: 33,
            count: 0,
            color: '#9195a4'
        },
        34: {
            key: 34,
            count: 0,
            color: '#9195a4'
        },
        35: {
            key: 35,
            count: 0,
            color: '#9195a4'
        },
        36: {
            key: 36,
            count: 0,
            color: '#9195a4'
        },
        37: {
            key: 37,
            count: 0,
            color: '#9195a4'
        },
        38: {
            key: 38,
            count: 0,
            color: '#9195a4'
        },
        39: {
            key: 39,
            count: 0,
            color: '#9195a4'
        },
        40: {
            key: 40,
            count: 0,
            color: '#13be4b'
        },
        41: {
            key: 41,
            count: 0,
            color: '#13be4b'
        },
        42: {
            key: 42,
            count: 0,
            color: '#13be4b'
        },
        43: {
            key: 43,
            count: 0,
            color: '#13be4b'
        },
        44: {
            key: 44,
            count: 0,
            color: '#13be4b'
        },
        45: {
            key: 45,
            count: 0,
            color: '#13be4b'
        }
    };
    const setAllList = (val: number) => Object(allList)[val].count++;

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

    lotoList.map(item => {
        setAllList(item.drwtNo1);
        setAllList(item.drwtNo2);
        setAllList(item.drwtNo3);
        setAllList(item.drwtNo4);
        setAllList(item.drwtNo5);
        setAllList(item.drwtNo6);
        setAllList(item.bnusNo);
    })

    return {
        props: {
            lotoList,
            allList,
        },
    }
};

export default WinByYear;
