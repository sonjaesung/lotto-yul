import { makeAutoObservable } from "mobx";
import { isMobile, isTablet } from "react-device-detect";

class MainStore {
  constructor() {
    makeAutoObservable(this);
  }

  menuPopup: Boolean = false;
  changeMenuPopup = (value: boolean) => {
    this.menuPopup = value;
  };

  pcResize: string = "pc";
  changePcResize = () => {
    if (window.innerWidth <= 767) {
      this.pcResize = "mobile";
    } else if (window.innerWidth <= 1199) {
      this.pcResize = "tablet";
    } else {
      this.pcResize = "pc";
    }
  };

  mobileCheck: boolean = false;
  tabletCheck: boolean = false;
  changeOsCehck = () => {
    this.mobileCheck = isMobile;
    this.tabletCheck = isTablet;
  };

  getOsAndResizeCheck = () => {
    return (
      isMobile ||
      isTablet ||
      this.pcResize === "tablet" ||
      this.pcResize === "mobile"
    );
  };
  getOnlyMobile = () => {
    return (
      (this.mobileCheck && !this.tabletCheck) || this.pcResize === "mobile"
    );
  };
  getOnlyTablet = () => {
    return (
      (!this.mobileCheck && this.tabletCheck) || this.pcResize === "tablet"
    );
  };

  joinPopupCheck: Boolean = false;
  changeJoinPopupCheck = (val: Boolean) => {
    this.joinPopupCheck = val;
  };

  lotoForm: object = {
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

  currentLotto: {
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
  } = {
      totSellamnt: 0,
      returnValue: '',
      drwNoDate: '',
      firstWinamnt: 0,
      drwtNo6: 0,
      drwtNo4: 0,
      firstPrzwnerCo: 0,
      drwtNo5: 0,
      bnusNo: 0,
      firstAccumamnt: 0,
      drwNo: 0,
      drwtNo2: 0,
      drwtNo3: 0,
      drwtNo1: 0
    }
  setCurrentLotto = (val: {
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
  }) => {
    this.currentLotto = val;
  }

}

const mainStore = new MainStore();
export default mainStore;
