import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import { GetServerSideProps } from "next";

type lotoData = {
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
    winNumberList: lotoData
}

const WinCount = observer(({ winNumberList }: props) => {
    useEffect(() => {
        window.addEventListener("resize", mainStore.changePcResize);
        return () => {
            window.removeEventListener("resize", mainStore.changePcResize);
        };
    }, []);

    return (
        <div className="lotto_count_area">
            <div className="title">1등 번호 회수</div>
            <div className="section1">
                {Object.keys(winNumberList).sort((a, b) => {
                    return Object(winNumberList)[b].count - Object(winNumberList)[a].count;
                }).map((item, idx) => {
                    return <div key={idx} className="table_slot">
                        <div className="table_key">{Object(winNumberList)[item].key} 번</div>
                        <div className="table_count">{Object(winNumberList)[item].count}</div>
                    </div>
                })}
            </div>
        </div>
    );
});

export const getServerSideProps: GetServerSideProps = async () => {
    let lotoList = [];
    let turn = 1;
    let winNumberList: object = {
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

    const setWinNumberList = (val: number) => Object(winNumberList)[val].count++;

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
        setWinNumberList(item.drwtNo1);
        setWinNumberList(item.drwtNo2);
        setWinNumberList(item.drwtNo3);
        setWinNumberList(item.drwtNo4);
        setWinNumberList(item.drwtNo5);
        setWinNumberList(item.drwtNo6);
    })

    return {
        props: {
            winNumberList,
        },
    }
};

export default WinCount;
