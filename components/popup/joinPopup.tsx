import Img from "../common/Img";
import Video from "../common/Video";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const popup1CheckList = {
  title: "랠리즈 도입을 고려하고 계신가요?",
  des: "우리 학원에 대한 간단한 정보를 입력해 주세요\n우리 학원 맞춤 컨설팅을 진행해 드립니다",
  mTitle: "랠리즈 도입을\n고려하고 계신가요?",
  region: [
    { label: "서울특별시", value: "11" },
    { label: "부산광역시", value: "26" },
    { label: "대구광역시", value: "27" },
    { label: "인천광역시", value: "28" },
    { label: "광주광역시", value: "29" },
    { label: "대전광역시", value: "30" },
    { label: "울산광역시", value: "31" },
    { label: "세종", value: "36" },
    { label: "경기도", value: "41" },
    { label: "강원도", value: "42" },
    { label: "충청북도", value: "43" },
    { label: "충청남도", value: "44" },
    { label: "전라북도", value: "45" },
    { label: "전라남도", value: "46" },
    { label: "경상북도", value: "47" },
    { label: "경상남도", value: "48" },
    { label: "제주도", value: "50" },
  ],
  student: [
    { label: "10명 이하", value: "010" },
    { label: "10-50명", value: "020" },
    { label: "50-100명", value: "030" },
    { label: "100명 이상", value: "040" },
  ],
  grade: [
    { value: "만 4-6세", code: "010" },
    { value: "초등 1-3학년", code: "020" },
    { value: "초등 4-6학년", code: "025" },
    { value: "중등", code: "030" },
    { value: "고등", code: "040" },
    { value: "성인", code: "050" },
  ],
  educate: [
    { value: "국어", code: "011" },
    { value: "영어", code: "012" },
    { value: "수학", code: "013" },
    { value: "과학", code: "020" },
    { value: "사회", code: "030" },
    { value: "예체능", code: "040" },
    { value: "기타", code: "050" },
  ],
};
const popup2CheckList = {
  title: "보다 정확한 컨설팅을 위해\n도입을 고려하시는 이유를 들려 주세요",
  des: "",
  mTitle: "보다 정확한 컨설팅을 위해,\n도입을 고려하시는\n이유를 들려 주세요",
  qa1: {
    question: "학원 관리 프로그램 사용 경험이 있으신가요?",
    answer: [
      "학원 관리 프로그램 사용이 처음이에요",
      "기존 사용하던 프로그램을 교체하고 싶어요",
    ],
  },
  qa2: {
    question: "어떤 기능 사용을 고려하고 계신가요?",
    answer: [
      { value: "출결 (출석 체크, 출석 리스트 관리)", code: "010" },
      {
        value: "학원비 수납 (청구서 발행, 간편결제, 수납리스트 관리)",
        code: "020",
      },
      { value: "수업 관리 (성적 관리, 성적표 발행)", code: "030" },
      { value: "우리 반 커뮤니티 (피드형 게시판, 자료실)", code: "040" },
      { value: "2개 이상의 기능을 복합 사용하고 싶어요", code: "050" },
    ],
  },
};
const popup3CheckList = {
  title: "마지막으로 아래 정보를 입력해 주세요",
  des: "우리 학원 전담 매니저가\n개별 상담 연락을 드릴 예정입니다 😊",
  mTitle: "마지막으로\n아래 정보를 입력해 주세요",
  qaList: ["성함", "연락처", "이메일 주소", "담당 하시는 업무"],
  answer: [
    { value: "학원장", code: "010" },
    { value: "실장", code: "020" },
    { value: "강사", code: "030" },
  ],
  text: "[필수] 개인정보 취급방침 동의",
};
const popup4CheckList = {
  title: "1:1 맞춤 교육 신청이 완료되었습니다",
  mTitle: "1:1 맞춤 교육 신청이\n완료되었습니다",
  des: "기재해 주신 연락처로 우리 학원 전담 매니저가\n빠른 시일 내로 연락 드릴 예정입니다 😊",
};

interface popup1 {
  academyRef: any;
  academyName: string;
  setAcademyName: Function;
  region: string;
  setRegion: Function;
  studentCount: string;
  setStudentCount: Function;
  studentGrade: string[];
  setStudentGrade: Function;
  educate: string[];
  setEducate: Function;
}

interface popup2 {
  experience: boolean;
  setExperience: Function;
  using: string;
  setUsing: Function;
}

interface popup3 {
  userNameRef: any;
  userName: string;
  setUserName: Function;
  phonRef: any;
  phon: string;
  setPhon: Function;
  emailRef: any;
  email: string;
  setEmail: Function;
  job: string;
  setJob: Function;
  agree: boolean;
  setAgree: Function;
}

const Popup1 = observer(
  ({
    academyRef,
    academyName,
    setAcademyName,
    region,
    setRegion,
    studentCount,
    setStudentCount,
    studentGrade,
    setStudentGrade,
    educate,
    setEducate,
  }: popup1) => {
    const radioChecked = (
      checked: Boolean,
      code: string,
      preData: string[],
      setData: Function
    ) => {
      if (checked) {
        setData([...preData, code]);
      } else {
        setData(preData.filter((select: string) => select !== code));
      }
    };

    return (
      <div className="join_popup_1">
        <div className="join_title_area">
          <div className="join_title">
            {mainStore.getOnlyMobile()
              ? popup1CheckList.mTitle
              : popup1CheckList.title}
          </div>
          <div className="join_des">{popup1CheckList.des}</div>
        </div>
        <div className="join_content_area">
          <div className="left">
            <div className="content_title">학원명</div>
            <input
              onChange={() => {
                setAcademyName(academyRef.current.value);
              }}
              value={academyName}
              ref={academyRef}
              className="input_student"
            />
            <div className="dropdown_area">
              <div>
                <div className="content_title">지역</div>
                <Dropdown
                  className="drop_region"
                  options={popup1CheckList.region}
                  onChange={(e) => {
                    console.log(e);
                    setRegion(e.value);
                  }}
                  value={region}
                  placeholder=""
                />{" "}
              </div>
              <div>
                <div className="content_title">재원생 수</div>
                <Dropdown
                  className="drop_student"
                  options={popup1CheckList.student}
                  onChange={(e) => {
                    setStudentCount(e.value);
                  }}
                  value={studentCount}
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="content_title">
              <div className="text">주요 대상 학년</div>
              <div className="option">중복 선택 가능</div>
            </div>
            <div className="check_area">
              {popup1CheckList.grade.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <label
                      data-columns={
                        (idx + 1) % 3 === 0
                          ? "last"
                          : (idx + 1) % 3 === 2
                          ? "second"
                          : "first"
                      }
                    >
                      <input
                        className="custom_check"
                        type="checkbox"
                        onChange={(e) =>
                          radioChecked(
                            e.target.checked,
                            popup1CheckList.grade[idx].code,
                            studentGrade,
                            setStudentGrade
                          )
                        }
                        checked={
                          studentGrade.filter(
                            (data: string) => data === item.code
                          ).length > 0
                            ? true
                            : false
                        }
                      />
                      <span>{item.value}</span>
                    </label>
                    {(idx + 1) % 3 === 0 ? <br /> : ""}
                  </Fragment>
                );
              })}
            </div>
            <div className="content_title">
              <div className="text">교수 과목</div>
              <div className="option">중복 선택 가능</div>
            </div>
            <div className="check_area">
              {popup1CheckList.educate.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <label
                      data-columns={
                        (idx + 1) % 3 === 0
                          ? "last"
                          : (idx + 1) % 3 === 2
                          ? "second"
                          : "first"
                      }
                    >
                      <input
                        className="custom_check"
                        type="checkbox"
                        onChange={(e) =>
                          radioChecked(
                            e.target.checked,
                            popup1CheckList.educate[idx].code,
                            educate,
                            setEducate
                          )
                        }
                        checked={
                          educate.filter((data: string) => data === item.code)
                            .length > 0
                            ? true
                            : false
                        }
                      />
                      <span>{item.value}</span>
                    </label>
                    {(idx + 1) % 3 === 0 ? <br /> : ""}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Popup2 = observer(
  ({ experience, setExperience, using, setUsing }: popup2) => {
    const experienceCheck = (idx: number) => {
      if (idx === 0) {
        setExperience(false);
      } else {
        setExperience(true);
      }
    };

    const usingCheck = (idx: number) => {
      setUsing(popup2CheckList.qa2.answer[idx].code);
    };

    return (
      <div className="join_popup_2">
        <div className="join_title_area">
          <div className="join_title">
            {mainStore.getOnlyMobile()
              ? popup2CheckList.mTitle
              : popup2CheckList.title}
          </div>
          <div className="join_des">{popup2CheckList.des}</div>
        </div>
        <div className="join_content_area">
          <div className="left">
            <div className="content_title">
              <div className="text">{popup2CheckList.qa1.question}</div>
            </div>
            <div className="check_area">
              {popup2CheckList.qa1.answer.map((item, idx) => {
                return (
                  <label key={idx}>
                    <input
                      className="custom_radio"
                      type="radio"
                      name="qa1"
                      onChange={() => experienceCheck(idx)}
                      checked={idx === 0 ? !experience : experience}
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="right">
            <div className="content_title">
              <div className="text">{popup2CheckList.qa2.question}</div>
            </div>
            <div className="check_area">
              {popup2CheckList.qa2.answer.map((item, idx) => {
                return (
                  <label key={idx}>
                    <input
                      className="custom_radio"
                      type="radio"
                      name="qa2"
                      onChange={() => usingCheck(idx)}
                      checked={using === item.code}
                    />
                    <span>{item.value}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Popup3 = observer(
  ({
    userNameRef,
    userName,
    setUserName,
    phonRef,
    phon,
    setPhon,
    emailRef,
    email,
    setEmail,
    job,
    setJob,
    agree,
    setAgree,
  }: popup3) => {
    return (
      <div className="join_popup_3">
        <div className="join_title_area">
          <div className="join_title">
            {mainStore.getOnlyMobile()
              ? popup3CheckList.mTitle
              : popup3CheckList.title}
          </div>
          <div className="join_des">{popup3CheckList.des}</div>
        </div>
        <div className="join_content_area">
          <div className="left">
            <div className="content_title">{popup3CheckList.qaList[0]}</div>
            <input
              onChange={() => {
                setUserName(userNameRef.current.value);
              }}
              value={userName}
              className="input_name"
              ref={userNameRef}
            />
            <div className="content_title">{popup3CheckList.qaList[1]}</div>
            <input
              onChange={() => {
                setPhon(phonRef.current.value.replace(/[^0-9]/g, ""));
              }}
              value={phon}
              className="input_tel"
              ref={phonRef}
              maxLength={11}
              placeholder="숫자만 입력하세요"
            />
            <div className="content_title">{popup3CheckList.qaList[2]}</div>
            <input
              onChange={() => {
                setEmail(emailRef.current.value);
              }}
              value={email}
              className="input_email"
              ref={emailRef}
            />
          </div>
          <div className="right">
            <div className="content_title">
              <div className="text">{popup3CheckList.qaList[3]}</div>
            </div>
            <div className="check_area">
              {popup3CheckList.answer.map((item, idx) => {
                return (
                  <label
                    key={idx}
                    data-columns={
                      (idx + 1) % 3 === 0
                        ? "last"
                        : (idx + 1) % 3 === 2
                        ? "second"
                        : "first"
                    }
                  >
                    <input
                      className="custom_radio"
                      type="radio"
                      name="job"
                      onChange={() => setJob(item.code)}
                      checked={job === item.code}
                    />
                    <span>{item.value}</span>
                  </label>
                );
              })}
            </div>
            <div className="agree_area">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setAgree(e.target.checked)}
                  checked={agree}
                />
                <span>{popup3CheckList.text}</span>
              </label>
              <a href="/joinPrivateInfoTerms" target="_blank" className="agree">
                확인
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Popup4 = observer(() => {
  return (
    <div className="join_popup_4">
      <div className="join_title_area">
        <Img src="/Icon_Complete.png" className="icon_complete" />
        <div className="join_title">
          {mainStore.getOnlyMobile()
            ? popup4CheckList.mTitle
            : popup4CheckList.title}
        </div>
        <div className="join_des">{popup4CheckList.des}</div>
      </div>
    </div>
  );
});

const JoinPopup = observer(() => {
  const [popupPage, setPopupPage] = useState(1);
  const academyRef = useRef<any>(null);
  const [academyName, setAcademyName] = useState("");
  const [region, setRegion] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [studentGrade, setStudentGrade] = useState([]);
  const [educate, setEducate] = useState([]);
  const [experience, setExperience] = useState(false);
  const [using, setUsing] = useState("");
  const userNameRef = useRef<any>(null);
  const [userName, setUserName] = useState("");
  const phonRef = useRef<any>(null);
  const [phon, setPhon] = useState("");
  const emailRef = useRef<any>(null);
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [agree, setAgree] = useState(false);
  let sendData = {
    userNm: "",
    contents: "",
    phoneNo: "",
    email: "",
    category: "074",
    locationCd: "",
    studentCountCd: "",
    studentGradeCd: "",
    subjectCd: "",
    experienceYn: "",
    useFunctionCd: "",
    roleCd: "",
    instNm: "",
    privacyConfirm: "N",
  };

  const step1Check = () => {
    return (
      academyName !== "" &&
      region !== "" &&
      studentCount !== "" &&
      studentGrade.length > 0 &&
      educate.length > 0
    );
  };

  const step2Check = () => {
    return using !== "";
  };

  const step3Check = () => {
    return (
      userName !== "" && phon !== "" && email !== "" && job !== "" && agree
    );
  };

  const joinSend = async () => {
    await axios.post("iset/qna/write", sendData).then((res) => {
      console.log(res);
      // res.data.resultData.resultCode.statusCd 가 '200' 이면 정상
    });
  };

  useEffect(() => {
    if (popupPage === 4) {
      sendData.userNm = userName;
      sendData.phoneNo = phon;
      sendData.email = email;
      sendData.locationCd = region;
      sendData.studentCountCd = studentCount;
      sendData.studentGradeCd = studentGrade.join("#");
      sendData.subjectCd = educate.join("#");
      sendData.experienceYn = experience ? "Y" : "N";
      sendData.useFunctionCd = using;
      sendData.roleCd = job;
      sendData.instNm = academyName;
      sendData.privacyConfirm = agree ? "Y" : "N";
      joinSend();
    }
  }, [popupPage]);

  return (
    <div className="popup_area">
      <div className="content">
        <div className="join_head">
          {popupPage > 1 && popupPage < 4 && (
            <button
              className="back"
              onClick={() => setPopupPage(popupPage - 1)}
            >
              <Img src="/Icon_Back.png" className="" />
            </button>
          )}
          {popupPage < 4 && (
            <button
              className="exit"
              onClick={() => {
                setPopupPage(1);
                mainStore.changeJoinPopupCheck(false);
              }}
            >
              <Img src="/Icon_Exit.png" className="" />
            </button>
          )}
        </div>
        {popupPage === 1 && (
          <Popup1
            academyRef={academyRef}
            academyName={academyName}
            setAcademyName={setAcademyName}
            region={region}
            setRegion={setRegion}
            studentCount={studentCount}
            setStudentCount={setStudentCount}
            studentGrade={studentGrade}
            setStudentGrade={setStudentGrade}
            educate={educate}
            setEducate={setEducate}
          />
        )}
        {popupPage === 2 && (
          <Popup2
            experience={experience}
            setExperience={setExperience}
            using={using}
            setUsing={setUsing}
          />
        )}
        {popupPage === 3 && (
          <Popup3
            userNameRef={userNameRef}
            userName={userName}
            setUserName={setUserName}
            phonRef={phonRef}
            phon={phon}
            setPhon={setPhon}
            emailRef={emailRef}
            email={email}
            setEmail={setEmail}
            job={job}
            setJob={setJob}
            agree={agree}
            setAgree={setAgree}
          />
        )}
        {popupPage === 4 && <Popup4 />}
        <div className="btn_area">
          <button
            className="next_btn"
            onClick={() => {
              if (popupPage < 4) {
                if (popupPage === 1 && step1Check()) {
                  setPopupPage(popupPage + 1);
                } else if (popupPage === 2 && step2Check()) {
                  setPopupPage(popupPage + 1);
                } else if (popupPage === 3 && step3Check()) {
                  setPopupPage(popupPage + 1);
                }
              } else {
                setPopupPage(1);
                mainStore.changeJoinPopupCheck(false);
              }
            }}
          >
            {popupPage < 4 ? `다음 (${popupPage}/3단계)` : "신청 완료"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default JoinPopup;
