import Img from "../common/Img";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import Link from "next/link";

const BaseTablePC = () => {
  return (
    <div className="base_table_area">
      <table className="base_table">
        <thead>
          <tr>
            <td colSpan={2}>
              <div className="table_content">
                <Img src="/Icon_Check.png" className="" />
                <div className="text">기본 사용 비용</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table_content">
                <Img src="/Icon_Option.png" className="" />
                <div className="text">
                  초기 세팅비
                  <span className="text_color"> 0원</span>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content">
                <Img src="/Icon_Base.png" className="" />
                <div className="text">
                  서비스 이용요금(월)
                  <span className="text_color"> 0원</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BaseTableM = () => {
  return (
    <div className="base_table_area">
      <table className="base_table">
        <thead>
          <tr>
            <td>
              <div className="table_content">
                <Img src="/Icon_Check.png" className="" />
                <div className="text">기본 사용 비용</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table_content">
                <Img src="/Icon_Option.png" className="" />
                <div className="text">
                  초기 세팅비
                  <span className="text_color"> 0원</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table_content">
                <Img src="/Icon_Base.png" className="" />
                <div className="text">
                  서비스 이용요금(월)
                  <span className="text_color"> 0원</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const OptionTablePC = () => {
  return (
    <div className="option_table_area">
      <table className="option_table">
        <thead>
          <tr>
            <td colSpan={4}>
              <div className="table_content">
                <Img src="/Icon_Check.png" className="" />
                <div className="text">기능 사용 비용</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">출결 관리</div>
                  <Img src="/Icon_Attendance.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 출결 기록</div>
                  <div className="text">
                    · 출결 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                  <div className="text">· 출결 데이터 조회</div>
                  <div className="text">· 출결 데이터</div>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">학원비 수납 · 간편결제</div>
                  <Img src="/Icon_Pay.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 청구서 발행</div>
                  <div className="text">
                    · 수납 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                  <div className="text">
                    · 간편 결제 수수료
                    <div className="sub_text">(카드 수수료 외)</div>
                  </div>
                  <div className="text">· 수납 기록 조회/다운로드</div>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">수업 지원</div>
                  <Img src="/Icon_Class.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">
                    · 화상 강의
                    <div className="sub_text">(인원/시간 무제한)</div>
                  </div>
                  <div className="text">· 성적 등록/조회/다운로드</div>
                  <div className="text">· 학습보고서 발행</div>
                  <div className="text">
                    · 성적/화상강의 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">우리 반 커뮤니티</div>
                  <Img src="/Icon_Community.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 학원/클래스/학생별 공지</div>
                  <div className="text">
                    · 자료실
                    <div className="sub_text">(용량 무제한)</div>
                  </div>
                  <div className="text">
                    · 게시글 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const OptionTableM = () => {
  return (
    <div className="option_table_area">
      <table className="option_table">
        <thead>
          <tr>
            <td colSpan={2}>
              <div className="table_content">
                <Img src="/Icon_Check.png" className="" />
                <div className="text">기능 사용 비용</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">출결 관리</div>
                  <Img src="/Icon_Attendance.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 출결 기록</div>
                  <div className="text">
                    · 출결 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                  <div className="text">· 출결 데이터 조회</div>
                  <div className="text">· 출결 데이터</div>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">학원비 수납 · 간편결제</div>
                  <Img src="/Icon_Pay.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 청구서 발행</div>
                  <div className="text">
                    · 수납 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                  <div className="text">
                    · 간편 결제 수수료
                    <div className="sub_text">(카드 수수료 외)</div>
                  </div>
                  <div className="text">· 수납 기록 조회/다운로드</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">수업 지원</div>
                  <Img src="/Icon_Class.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">
                    · 화상 강의
                    <div className="sub_text">(인원/시간 무제한)</div>
                  </div>
                  <div className="text">· 성적 등록/조회/다운로드</div>
                  <div className="text">· 학습보고서 발행</div>
                  <div className="text">
                    · 성적/화상강의 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="table_content_area">
                <div className="table_content_title">
                  <div className="text">우리 반 커뮤니티</div>
                  <Img src="/Icon_Community.png" className="" />
                </div>
                <div className="table_content_price">
                  <div className="text_color">0원</div>
                </div>
                <div className="table_content_detail">
                  <div className="text">· 학원/클래스/학생별 공지</div>
                  <div className="text">
                    · 자료실
                    <div className="sub_text">(용량 무제한)</div>
                  </div>
                  <div className="text">
                    · 게시글 알림
                    <div className="sub_text">(알림톡 발송 비용 포함)</div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PolicySection1 = observer(() => {
  return (
    <div className={`policy_section1`}>
      <div className="content">
        <div className="policy_current_menu">
          <div className="text">요금 정책</div>
        </div>
        <div className="policy_des">
          비용 걱정 끝,
          <br />
          가장 부담없이 가장 편리한 환경을 제공합니다
        </div>
        <div className="policy_btn_area">
          <Link href={process.env.NEXT_PUBLIC_CURRENT_HOSTNAME || ""}>
            <button className="policy_free_start">무료로 시작하기</button>
          </Link>
          <button
            className="policy__how_to"
            onClick={() => mainStore.changeJoinPopupCheck(true)}
          >
            <div className="text_area">도입 문의</div>
            <Img src="/How_To.png" className="" />
          </button>
        </div>
        {mainStore.getOsAndResizeCheck() ? <BaseTableM /> : <BaseTablePC />}
        <Img src="/Icon_Pluse.png" className="icon_pluse" />
        {mainStore.getOsAndResizeCheck() ? <OptionTableM /> : <OptionTablePC />}
      </div>
    </div>
  );
});

export default PolicySection1;
