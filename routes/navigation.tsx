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
  },
  {
    title: "고객 지원",
    desc: "고객 지원",
    url: "/support",
    matchUrl: ["/support"],
    menu: "Support",
    subnav: [
      {
        url: "/support/manager_service",
        name: "전담 매니저 서비스",
        desc: "전담 매니저 서비스",
      },
      {
        url: "https://rallyz.notion.site/1ccc7c9d4f234b57b3db76b1bcb54f70",
        name: "사용 가이드",
        desc: "사용 가이드",
      },
    ],
  },
  {
    title: "블로그",
    desc: "블로그",
    url: "/blog",
    matchUrl: ["/blog"],
    menu: "Blog",
    subnav: [
      {
        url: "/blog/",
        name: "학원 활용 사례",
        desc: "학원 활용 사례",
      },
      {
        url: "/blog/",
        name: "업데이트 노트",
        desc: "업데이트 노트",
      },
      {
        url: "/blog/",
        name: "랠리즈 퀵 가이드",
        desc: "랠리즈 퀵 가이드",
      },
      {
        url: "/blog/",
        name: "랠리즈 비하인드",
        desc: "랠리즈 비하인드",
      },
    ],
  },
  {
    title: "개인정보 처리방침",
    desc: "개인정보 처리방침",
    url: "/joinPrivateInfoTerms",
    matchUrl: ["/joinPrivateInfoTerms"],
    menu: "JoinPrivateInfoTerms",
  }
];
