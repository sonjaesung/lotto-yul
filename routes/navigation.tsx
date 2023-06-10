export const navigation = [
  {
    title: "로또 정보",
    desc: "로또 정보",
    url: "/info",
    matchUrl: ["/info"],
    menu: "Info",
    subnav: [
      { url: "/info/winTurn", name: "당첨 회차 정보", desc: "당첨 회차 정보" },
      { url: "/info/winByYear", name: "연도별 당첨 정보", desc: "연도별 당첨 정보" },
    ],
  },
  {
    title: "로또 분석",
    desc: "로또 분석",
    url: "/analyze",
    matchUrl: ["/analyze"],
    menu: "Analyze",
    subnav: [
      { url: "/analyze/winCount", name: "1등 번호 회수", desc: "1등 번호 회수 (보너스 번호 제외)" },
      { url: "/analyze/winCountB", name: "보너스 번호 회수", desc: "보너스 번호 회수" },
    ],
  }
];
