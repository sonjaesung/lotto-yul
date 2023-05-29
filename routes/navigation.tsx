export const navigation = [
  {
    title: "로또 정보",
    desc: "로또 정보",
    url: "/info",
    matchUrl: ["/info"],
    menu: "Info",
    subnav: [
      { url: "/info/winTurn", name: "당첨 회차 정보", desc: "당첨 회차 정보" },
    ],
  },
  {
    title: "로또 분석",
    desc: "로또 분석",
    url: "/analyze",
    matchUrl: ["/analyze"],
    menu: "Analyze",
    subnav: [
      { url: "/analyze/winCount", name: "당첨 번호 분석", desc: "당첨 번호 분석" },
    ],
  }
];
