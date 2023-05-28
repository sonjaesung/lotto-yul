import { Fragment } from "react";
import { observer } from "mobx-react";

const OldJoinSection2 = observer(() => {
  return (
    <div className="join_sec2">
      <ol className="joinPrivateInfoTerms">
        <li className="main_title">
          <h3>수집하는 개인정보의 처리에 관한 사항</h3>
          <ol>
            <li className="sub_title">
              개인정보의 수집 및 이용
              <ol>
                <li>
                  랠리즈 홈페이지
                  <table className="defaultTb">
                    <caption>랠리즈 홈페이지</caption>
                    <colgroup>
                      <col className="col1" />
                      <col className="col2" />
                      <col className="col3" />
                      <col className="col4" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>목적</th>
                        <th>항목</th>
                        <th>보유 및 이용기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowSpan={1}>필수</th>
                        <td>1:1 문의 상담 처리</td>
                        <td>성명, 휴대폰 번호, E-mail</td>
                        <td rowSpan={2}>문의 처리 완료 후 6개월</td>
                      </tr>
                      <tr>
                        <th>선택</th>
                        <td>제휴 및 사업 제안 / 제보하기</td>
                        <td>성명, 휴대폰 번호, E-mail</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  랠리즈 서비스(Web/App)
                  <table className="defaultTb">
                    <caption>랠리즈 서비스(Web/App)</caption>
                    <colgroup>
                      <col className="col1" />
                      <col className="col2" />
                      <col className="col3" />
                      <col className="col4" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>목적</th>
                        <th>항목</th>
                        <th>보유 및 이용기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowSpan={3}>필수</th>
                        <td>회원 가입 및 본인 인증</td>
                        <td>성명, 휴대폰 번호, E-mail</td>
                        <td rowSpan={3}>회원탈퇴 또는 계약종료 후 6개월</td>
                      </tr>
                      <tr>
                        <td>법정 대리인 동의 득실 여부 판단</td>
                        <td>보호자 정보(성명, 휴대폰 번호)</td>
                      </tr>
                      <tr>
                        <td>
                          고지사항 전달, 계약 이행을 위한 연락, 민원 등 고객
                          상담 처리, 고객 맞춤형 서비스 제공, 서비스 만족도 조사
                        </td>
                        <td>
                          성명, 휴대폰 번호, E-mail, 비밀번호, 서비스 이용기록,
                          접속 로그, 모바일 기기의 UUID, IP주소
                        </td>
                      </tr>
                      <tr>
                        <th rowSpan={6}>선택</th>
                        <td>학원 및 클래스 운영 서비스</td>
                        <td>학교명, 학년</td>
                        <td rowSpan={6}>회원 탈퇴 시 또는 계약 종료 시까지</td>
                      </tr>
                      <tr>
                        <td>온라인 결제 서비스 등록</td>
                        <td>
                          사업자 등록 정보(사업자명, 사업자등록번호,
                          사업자등록증), 정산 계좌 정보
                        </td>
                      </tr>
                      <tr>
                        <td>온라인 결제 서비스 이용</td>
                        <td>성명, 생년월일, 휴대폰 번호, CI</td>
                      </tr>
                      <tr>
                        <td>마케팅 문자 및 메일 수신 동의</td>
                        <td>성명, 휴대폰번호, E-mail</td>
                      </tr>
                      <tr>
                        <td>온라인 맞춤형 광고 및 혜택 제공</td>
                        <td>ADID(Android OS) / IDFA(iOS)</td>
                      </tr>
                      <tr>
                        <td>맞춤형 학원 검색 서비스</td>
                        <td>위치 정보</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <ul>
                  <li>
                    보유 및 이용기간은 위 표와 같습니다. 단, 법령에 특별한
                    규정이 있을 경우 관련 법령에 따라 변경될 수 있습니다.
                  </li>
                  <li>
                    위 표에서 회원탈퇴 또는 계약종료 후 6개월간 개인정보를
                    보유하고 이용하는 것의 목적은 탈퇴 회원의 부정 가입 및 부정
                    이용 방지, CS문의 대응을 위함입니다.
                  </li>
                  <li>
                    선택적 수집/이용에 대한 부분은 동의를 거부하시는 경우에도
                    랠리즈 서비스 중 제공을 거부하신 목적이 아닌 다른 목적의
                    서비스는 이용하실 수 있습니다.
                  </li>
                </ul>
              </ol>
            </li>
            <li className="sub_title">
              개인정보의 처리 위탁에 관한 사항
              <table className="defaultTb">
                <caption>개인정보의 처리 위탁에 관한 사항</caption>
                <thead>
                  <tr>
                    <th>위탁업체</th>
                    <th>목적</th>
                    <th>항목</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="borderNoneLeft">네이버클라우드 주식회사</td>
                    <td>데이터 보관 및 시스템 운영</td>
                    <td>성명, 휴대폰 번호, E-mail</td>
                  </tr>
                  <tr>
                    <td className="borderNoneLeft">(주)유비온</td>
                    <td>시스템 개발 및 운영</td>
                    <td>성명, 휴대폰 번호, E-mail</td>
                  </tr>
                  <tr>
                    <td className="borderNoneLeft">
                      코리아크레딧뷰로(KCB) 주식회사
                    </td>
                    <td>본인 인증 서비스</td>
                    <td>성명, 법정 생년월일, 통신사 정보 휴대폰번호</td>
                  </tr>
                  <tr>
                    <td className="borderNoneLeft">나이스정보통신 주식회사</td>
                    <td>학원비 수납, 포인트 충전, 포인트 사용, 콘텐츠 구매</td>
                    <td>성명, 법정 생년월일, 휴대폰번호, 결제정보</td>
                  </tr>
                  <tr>
                    <td className="borderNoneLeft">주식회사 천조IBS</td>
                    <td>온라인 결제 서비스 등록 처리</td>
                    <td>
                      사업자 등록 정보(사업자명, 사업자등록번호, 사업자등록증),
                      정산 계좌 정보
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>
                  보유 및 이용기간은 회원 탈퇴 시 혹은 위탁 계약 종료 시까지
                  입니다.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>개인정보의 열람, 수정, 동의철회 등 권리 및 행사방법</h3>
          <ol>
            <li className="sub_title">
              회사는 고객님의 개인정보에 대해 열람, 수정, 동의철회 등의 요구가
              있을 시 지체 없이 이를 처리합니다. 따라서 고객님은 언제든지
              등록되어 있는 자신 혹은 본인이 법정대리인인 만 14세 미만 아동의
              개인정보를 열람하거나 수정할 수 있으며 동의철회를 요청할 수도
              있습니다.
            </li>
            <li className="sub_title">
              고객님의 개인정보 열람, 개인정보변경(또는 ‘회원정보수정’ 등) 또는
              동의철회를 위해서는 랠리즈 서비스 내 ‘회원탈퇴’를 클릭하여
              본인확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
              혹은 대표전화(1577-0682) 또는 개인정보관리자에게 서면이나 전화로
              연락하시면 지체 없이 조치하겠습니다.
            </li>
            <li className="sub_title">
              고객님이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
              완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한
              잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를
              제3자에게 통지하여 정정이 이루어지도록 하겠습니다.
            </li>
            <li className="sub_title">
              고객님의 요청에 의해 해지 또는 삭제된 개인정보는 수집 시 고지한
              ‘개인정보의 보유 및 이용기간’에 명시된 바에 따라 처리하고 그 외의
              용도로 열람 또는 이용할 수 없도록 처리하고 있습니다. 단, 다음의
              경우에는 요청을 제한 또는 거절할 수 있고, 회사는 이를 고객님께
              지체 없이 고지합니다.
              <ul>
                <li>
                  법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                  불가피한 경우
                </li>
                <li>
                  다른 사람의 생명, 신체를 해할 우려가 있거나 다른 사람의 재산과
                  그 밖의 이익을 부당하게 침해할 우려가 있는 경우
                </li>
                <li>
                  개인정보를 처리하지 아니하면 회원과 약정한 서비스를 제공하지
                  못하는 등 계약의 이행이 곤란한 경우로서 회원이 그 계약의
                  해지의사를 명확하게 밝히지 아니한 경우
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>개인정보보호에 대한 기술적 / 관리적 대책</h3>
          <ol>
            <li className="sub_title">
              회사는 고객님의 개인정보를 취급함에 있어 개인정보가 분실, 도난,
              누출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은
              기술적 대책을 강구하고 있습니다.
              <ul>
                <li>
                  고객님의 개인정보는 접근 권한과 비밀번호에 의해 철저히
                  보호되고 있고, 파일 및 전송데이터를 암호화하여 중요한 데이터는
                  별도의 보안기능을 통해 보호되고 있습니다.
                </li>
                <li>
                  컴퓨터 바이러스에 의한 피해를 방지하기 위해 자동 Update되는
                  백신을 이용하고, 해킹 등에 의한 피해를 방지하기 위해 침입탐지
                  및 침입차단시스템을 가동하고 있습니다.
                </li>
              </ul>
            </li>
            <li className="sub_title">
              회사는 고객님의 개인정보보호를 위해 다음과 같은 관리적 조치를
              취하고 있습니다.
              <ul>
                <li>
                  개인정보를 취급하는 직원을 최소한으로 줄이고, 정기 또는 수시로
                  보안교육을 통해 개인정보보호정책을 준수하도록 강조하고
                  있습니다.
                </li>
                <li>
                  모든 임직원 및 계약직 사원에게 보안서약서를 제출하게 함으로
                  사람에 의한 정보유출을 사전에 방지하고, 개인정보처리방침에
                  대한 이행사항 및 직원의 준수 여부를 감시하고, 위반 내용이
                  확인되는 경우 이를 시정 또는 개선하며 기타 필요한 조치를
                  취하기 위한 내부절차를 마련하고 있습니다.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>개인정보 유출 시 통지</h3>
          <ol>
            <li className="sub_title">
              회사는 고객님의 개인정보가 유출되었음을 알게 되었을 때에는 지체
              없이 해당 고객님께 다음의 사실을 알리고, 그 피해를 최소화하기 위한
              대책을 마련하며 필요한 조치를 취하겠습니다.
              <ul>
                <li>유출된 개인정보 항목</li>
                <li>유출된 시점과 그 경위</li>
                <li>
                  유출로 인하여 발생할 수 있는 피해를 최소화하기 위하여 고객이
                  할 수 있는 방법 등에 관한 정보
                </li>
                <li>대응조치 및 피해 구제절차</li>
                <li>
                  고객님께 피해가 발생한 경우 신고 등을 접수할 수 있는 담당부서
                  및 연락처
                </li>
              </ul>
              단, 유출 확산 방지 등 긴급한 대응조치가 필요한 경우에는 해당
              조치를 취한 후 지체 없이 고객님께 알려드리겠습니다.
            </li>
            <li className="sub_title">
              회사는 대통령령으로 정한 규모 이상의 개인정보가 유출되었을 시 해당
              고객님께 고지하는 것과 동시에 인터넷 홈페이지의 첫 화면에 별도의
              창과, 고객센터, 공지사항 등 회원이 알아보기 쉬운 위치에 최소 30일
              이상 게시하도록 조치를 취하겠습니다.
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</h3>
          <ol>
            <li className="sub_title">
              {`회사는 고객님의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 랠리즈 서비스를 운영하는데 이용되는 서버가 고객님의 브라우저에 보내는 아주 작은 텍스트 파일로서 고객님의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.`}
              <ul>
                <li>
                  쿠키 등 사용 목적
                  <br />
                  회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의
                  취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및
                  방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
                </li>
              </ul>
            </li>
            <li className="sub_title">
              고객님은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
              고객님은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
              허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
              쿠키의 저장을 거부할 수도 있습니다.
              <ul>
                <li>
                  쿠키 설정 거부 방법
                  <br />
                  예: 쿠키 설정을 거부하는 방법으로는 고객님이 사용하시는 웹
                  브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를
                  저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
                  있습니다.
                  <br />
                  설정방법 예(인터넷 익스플로러의 경우): 웹 브라우저 상단의 도구
                  &gt; 인터넷 옵션 &gt; 개인정보
                </li>
              </ul>
              단, 고객님께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이
              있을 수 있습니다.
            </li>
            <li className="sub_title">
              회사는 이용자의 ADID/IDFA를 수집합니다. ADID(Android
              OS)/IDFA(iOS)란 모바일 앱 이용자의 광고 식별 값으로서, 사용자의
              맞춤 서비스 제공이나 더 나은 환경의 광고를 제공하기 위한 측정을
              위해 수집될 수 있습니다.
              <ul>
                <li>
                  ADID(Android OS) / IDFA(iOS) 거부 방법
                  <br />
                  Android : 설정 -&gt; 구글(구글설정) -&gt; 광고 -&gt; 광고
                  맞춤설정 선택 해제
                  <br />
                  iOS : 설정 -&gt; 개인정보보호 -&gt; 광고 -&gt; 광고 추적 제한
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>만 14세 미만의 미성년자 보호</h3>
          <ol>
            <li className="sub_title">
              {`만 14세 미만 아동(이하 '아동')이 제공한 개인정보로 인하여 아동 및 법정 대리인이 불이익을 입지 않도록 보호 조치를 취하고 있습니다.`}
            </li>
            <li className="sub_title">
              아동의 개인정보에 대하여 아래의 행위를 하는 경우에는 해당 아동의
              법정대리인의 동의를 얻도록 하고 있습니다.
              <ul>
                <li>
                  아동의 서비스가입을 위한 개인정보 수집하거나 서비스 가입 시
                  고지한 범위 또는 이용약관에 명시한 범위를 넘어 아동의
                  개인정보를 이용하거나 제3자에게 제공하고자 하는 경우
                </li>
                <li>
                  아동의 개인정보를 제공받은 자가 개인정보를 제공받은 목적 외의
                  용도로 이용하거나 제3자에게 제공하는 경우
                </li>
              </ul>
            </li>
            <li className="sub_title">
              법정대리인의 동의를 얻기 위하여 법정대리인의 성명, 주민번호 등
              필요한 최소한의 정보를 요구할 수 있습니다. 이 경우 개인정보의
              수집/이용 또는 제공 목적 및 법정대리인의 동의가 필요합니다.
            </li>
            <li className="sub_title">
              법정대리인의 동의를 얻기 위하여 수집한 법정대리인의 개인정보를
              해당 법정대리인의 동의 여부를 확인하는 목적 외의 용도로 이용하거나
              제3자에게 제공하지 않습니다.
            </li>
          </ol>
        </li>
        <li className="main_title">
          <h3>개인정보에 관한 민원서비스</h3>
          <ol>
            <li className="sub_title">
              회사는 회원의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기 위하여 아래와 같이 개인정보보호책임자를 지정하고
              있습니다.
              <table className="defaultTb">
                <caption>개인정보에 관한 민원서비스</caption>
                <colgroup>
                  <col className="col1" />
                  <col className="col2" />
                  <col className="col3" />
                </colgroup>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>개인정보보호책임자</th>
                    <th>개인정보관리자</th>
                    <th>고객만족센터</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="borderNoneLeft">소속</td>
                    <td>배컴</td>
                    <td>IT 개발 운영팀</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="borderNoneLeft">직위</td>
                    <td>대표이사</td>
                    <td>리더</td>
                    <td>-</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="borderNoneLeft">연락처</td>
                    <td colSpan={3}>1577-0682</td>
                  </tr>
                </tfoot>
              </table>
            </li>
            <li className="sub_title">
              회사의 랠리즈 서비스를 이용하며 발생하는 모든 개인정보보호 관련
              민원을 개인정보관리책임자 혹은 담당부서로 신고할 수 있고, 회사는
              고객의 신고사항에 대해 신속하고 충분한 조치를 취할 것입니다.
            </li>
            <li className="sub_title">
              기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
              기관에 문의하시기 바랍니다.
              <ul>
                <li>
                  대검찰청 사이버 범죄수사단{" "}
                  <a href="http://spo.go.kr">http://spo.go.kr</a> - 국번없이
                  1301
                </li>
                <li>
                  경찰청 사이버안전국{" "}
                  <a href="http://cyberbureau.police.go.kr/index.do">
                    http://cyberbureau.police.go.kr/index.do
                  </a>{" "}
                  - 국번없이 182
                </li>
                <li>
                  개인정보침해 신고센터{" "}
                  <a href="http://privacy.kisa.or.kr">
                    http://privacy.kisa.or.kr
                  </a>{" "}
                  - 국번없이 118
                </li>
                <li>
                  개인정보 분쟁조정위원회{" "}
                  <a href="http://kopico.go.kr">http://kopico.go.kr</a> -
                  02-1833-6972
                </li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
});

export default OldJoinSection2;
