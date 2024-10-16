import { useState } from "react"
import AICC from "./chat/AICC.js";
import util from "../util/util.js";

const isMobile = util.isMobile();

function Demo() {
    const [openChat, setOpenChat] = useState(false);
    
    return (
        <>
            <title>많이하는질문 | 모바일 | 스스로해결 | 삼성전자서비스</title>
            <meta data-n-head="ssr" httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta data-n-head="ssr" charSet="utf-8" />
            <meta
            data-n-head="ssr"
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
            />
            <meta
            data-n-head="ssr"
            httpEquiv="Content-Type"
            content="text/html; charset=utf-8"
            />
            <meta
            data-n-head="ssr"
            httpEquiv="Content-Type"
            content="text/xml; charset=utf-8"
            />
            <meta
            data-n-head="ssr"
            data-hid="description"
            name="description"
            content=""
            />
            <meta data-n-head="ssr" data-hid="keyword" name="keyword" content="" />
            <link
            data-n-head="ssr"
            rel="icon"
            type="image/x-icon"
            href="https://www.samsungsvc.co.kr/assets/favicon/favicon.ico"
            />
            <link
            data-n-head="ssr"
            rel="stylesheet"
            href="https://www.samsungsvc.co.kr/assets/css/ui.css"
            />
            <style
            data-vue-ssr-id="7be3cd73:0 72eed556:0 ce85d550:0"
            dangerouslySetInnerHTML={{
                __html:
                "input:focus + label, *:focus, label:focus, label.is-focus, button:focus, a:focus-visible, button:focus-visible { outline: none !important;} a:focus:not(:focus-visible), button:focus:not(:focus-visible) {outline: none !important}"
            }}
            />
            <div id="skipnav">
            <a href="#content">본문 바로가기</a>
            </div>
            <div data-server-rendered="true" id="__nuxt" style={{display: openChat && isMobile ?"none":"block"}}>
            <div id="__layout">
                <div className="app">
                {/**/}
                <header className="app-header"  data-v-9d9c8ec4="">
                    <div className="app-header-inner" data-v-9d9c8ec4="">
                    <a href="/" className="ci nuxt-link-active" data-v-9d9c8ec4="" />
                    <nav className="site-nav" data-v-9d9c8ec4="">
                        <span className="header-bg" data-v-9d9c8ec4="" />
                        <div className="login-msg" data-v-9d9c8ec4="">
                        <p data-login="off" className="hello" data-v-9d9c8ec4="">
                            안녕하세요 고객님,
                        </p>
                        <p data-login="on" className="hello" data-v-9d9c8ec4="">
                            안녕하세요 <b data-v-9d9c8ec4="" /> 고객님!
                        </p>
                        <p data-login="off" data-v-9d9c8ec4="">
                            로그인 하시면 보다 편리하게
                            <br data-v-9d9c8ec4="" />
                            서비스를 이용하실 수 있습니다.
                        </p>
                        <p data-login="on" data-v-9d9c8ec4="">
                            무엇을 도와드릴까요?
                        </p>
                        <div data-login="off" className="btn-wrap" data-v-9d9c8ec4="">
                            <a
                            href="/login"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">로그인</span>
                            </a>
                        </div>
                        <div data-login="on" className="btn-wrap" data-v-9d9c8ec4="">
                            <a
                            href="/shop/cart"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">장바구니{/**/}</span>
                            </a>{" "}
                            <a
                            href="/mypage/order"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">주문/배송 조회</span>
                            </a>{" "}
                            <a
                            href="/mypage/inquiry"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">소모품샵 1:1문의</span>
                            </a>{" "}
                            <a
                            href="/mypage/self"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">자가수리부품 보증등록</span>
                            </a>{" "}
                            {/**/}{" "}
                            <a
                            href="#"
                            role="button"
                            className="btn__32 style-radius"
                            data-v-9d9c8ec4=""
                            >
                            <span data-v-9d9c8ec4="">로그아웃</span>
                            </a>
                        </div>
                        </div>
                        <ul tabIndex={0} className="gnb" data-v-9d9c8ec4="">
                        <li className="is-curent" data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            스스로해결
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                스스로해결
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    모바일
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    PC/모니터
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    프린터/복합기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    세탁기/건조기/에어드레서
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    TV
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    에어컨
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    냉장고/김치냉장고
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    청소기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    공기청정기/제습기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    주방가전
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    오디오
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    스마트싱스
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    앱 &amp; 서비스
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    기타 제품
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            전문상담
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                전문상담
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    챗봇상담
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    이메일 상담
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    원격상담
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    전화상담 예약
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    수어상담{" "}
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            서비스 안내
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                서비스 안내
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    요금안내
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    유지보수/세척
                                </a>
                                </li>
                                {/**/}
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    Samsung Care+
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    영수증/명세서 발급
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    다운로드 자료실
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    고객 자가수리
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            서비스 예약
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                서비스 예약
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    출장서비스 예약
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    예약 조회/ 취소
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    센터찾기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    주말케어센터 예약
                                </a>
                                </li>
                                {/**/}
                            </ul>
                            </div>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            소모품샵
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                소모품샵
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    모바일
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    PC
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    프린터/복합기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    TV/모니터
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    에어컨/공기청정기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    세탁기/건조기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    청소기
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    냉장고
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    주방가전
                                </a>
                                </li>
                                {/**/}
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    할인판매
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    고객 자가수리
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            고객의 소리
                            </a>
                            <div className="sub-gnb" data-v-9d9c8ec4="">
                            <strong className="tit" data-v-9d9c8ec4="">
                                고객의 소리
                            </strong>
                            <ul className="sub-gnb-detail" data-v-9d9c8ec4="">
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    칭찬합니다
                                </a>
                                </li>
                                <li data-v-9d9c8ec4="">
                                <a href="#" data-v-9d9c8ec4="">
                                    불편합니다
                                </a>
                                </li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                        <ul className="mobile-etc-menu" data-v-9d9c8ec4="">
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-map-pin-line" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">센터찾기</span>
                            </a>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-video-player" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">동영상</span>
                            </a>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-savi-40" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">챗봇 상담</span>
                            </a>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-building-40" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">회사소개</span>
                            </a>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-notice" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">공지사항</span>
                            </a>
                        </li>
                        <li data-v-9d9c8ec4="">
                            <a href="#" data-v-9d9c8ec4="">
                            <i className="icon-checklist" data-v-9d9c8ec4="" />
                            <span data-v-9d9c8ec4="">이용가이드</span>
                            </a>
                        </li>
                        </ul>{" "}
                        {/**/}{" "}
                        <button className="btn__close-side-menu" data-v-9d9c8ec4="">
                        <span data-v-9d9c8ec4="">사이드 메뉴 닫기</span>
                        </button>
                    </nav>
                    <div className="util" data-v-9d9c8ec4="">
                        <button
                        data-login="off"
                        className="btn__img btn-login"
                        data-v-9d9c8ec4=""
                        >
                        <i className="icon-user-off" data-v-9d9c8ec4="">
                            로그오프 상태
                        </i>
                        </button>{" "}
                        <button
                        data-login="on"
                        id="btnLogin"
                        className="btn__img btn-login"
                        data-v-9d9c8ec4=""
                        >
                        <i id="iconLogin" className="icon-user-on" data-v-9d9c8ec4="">
                            로그인 상태
                        </i>
                        </button>{" "}
                        {/**/}{" "}
                        <a
                        href="/shop/cart"
                        data-cart={0}
                        className="btn__img btn-cart"
                        data-v-9d9c8ec4=""
                        >
                        <i className="icon-cart-24" data-v-9d9c8ec4="">
                            장바구니
                        </i>
                        <span className="a11y-hidden" data-v-9d9c8ec4="">
                            에 담긴 상품 0 개
                        </span>
                        </a>{" "}
                        <a
                        href="#"
                        id="btnHeaderSearch"
                        className="btn__img"
                        data-v-9d9c8ec4=""
                        >
                        <i className="icon-search-24" data-v-9d9c8ec4="">
                            검색
                        </i>
                        </a>
                        <button className="btn__side-menu" data-v-9d9c8ec4="">
                        <span data-v-9d9c8ec4="">사이드 메뉴 보기</span>
                        </button>
                    </div>
                    </div>
                </header>
                <div id="appSearch" className="app-search">
                    <div>
                    <div className="app-search-inner">
                        <div className="sec-box">
                        <p className="app-search-tit">
                            <strong>궁금하신 내용을 검색해주세요.</strong>
                        </p>
                        </div>
                        <div className="sec-box app-search-form-wrap">
                        <main className="app-search-form-area">
                            <span className="app-search-form">
                            <span className="form__text">
                                <span className="input">
                                <input
                                    type="text"
                                    placeholder="검색어를 입력해주세요."
                                    title="검색어 입력"
                                    defaultValue=""
                                />
                                </span>
                            </span>
                            {/**/}{" "}
                            <button className="btn__img">
                                <i className="icon-search-24">검색</i>
                            </button>
                            </span>{" "}
                            <span className="info-msg"></span> {/**/}
                        </main>
                        </div>
                        <div className="sec-box app-search-favorite">
                        <strong className="tit">인기 검색어</strong>
                        <div />
                        </div>
                        <div className="sec-box">
                        <div className="recent-search-keywords">
                            <strong className="tit">최근 검색어</strong>
                            <ul />{" "}
                            <button className="btn-recent-delete-all">
                            <span>전체삭제</span>
                            </button>
                        </div>
                        </div>{" "}
                        <button className="btn-app-search">
                        <span>검색영역 닫기</span>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="app-container">
                    {/**/}
                    <div className="app-breadcrumb">
                    <ul>
                        <li>
                        <a href="/" className="nuxt-link-active">
                            <i className="icon-home">메인으로 이동</i>
                        </a>
                        </li>
                        <li>
                        <a
                            href="/solution?category=10410&product=10414"
                            aria-current="page"
                            className="nuxt-link-exact-active nuxt-link-active"
                        >
                            <span>스스로해결</span>
                        </a>
                        </li>
                        <li>
                        <a
                            href="/solution?category=10410&product=10414"
                            aria-current="page"
                            className="nuxt-link-exact-active nuxt-link-active"
                        >
                            <span>모바일</span>
                        </a>
                        </li>
                        <li>
                        <a
                            href="/solution?category=10410&product=10414"
                            aria-current="page"
                            className="nuxt-link-exact-active nuxt-link-active"
                        >
                            <span>스마트폰</span>
                        </a>
                        </li>
                    </ul>
                    </div>{" "}
                    {/**/} {/**/}
                    <main tabIndex={-1} id="content" className="app-content">
                    <h1 className="tit__page">모바일</h1>
                    <div className="sec-box oneself-select-area" data-v-0e2a5f9c="">
                        <div
                        className="sec-cont app-service-top-box mb30 box-radius"
                        style={{ display: "none" }}
                        data-v-0e2a5f9c=""
                        >
                        <div className="box-img-area" data-v-0e2a5f9c="">
                            <i className="icon-app-service" data-v-0e2a5f9c="" />
                        </div>
                        <div className="box-text-area" data-v-0e2a5f9c="">
                            <ul data-v-0e2a5f9c="">
                            <li data-v-0e2a5f9c="">
                                앱을 선택하시면 앱에 대한 정보를 확인할 수 있습니다.
                            </li>
                            <li data-v-0e2a5f9c="">
                                앱 1:1 문의하기로 궁금한 사항을 남겨주시면 등록한 이메일로
                                답변을 받을 수 있습니다.
                            </li>
                            <li data-v-0e2a5f9c="">
                                Ask your Samsung Apps question through 1-on-1 inquiry and
                                we will give you a detailed answer.
                            </li>
                            </ul>
                        </div>
                        <div className="btn-box" data-v-0e2a5f9c="">
                            <a
                            href="#"
                            title="새창"
                            className="btn__40 style-radius btn__000"
                            data-v-0e2a5f9c=""
                            >
                            <span data-v-0e2a5f9c="">앱 1:1 문의하기</span>
                            </a>{" "}
                            <a
                            href="#"
                            title="새창"
                            className="btn__40 style-radius"
                            data-v-0e2a5f9c=""
                            >
                            <span data-v-0e2a5f9c="">Start inquiry ↗</span>
                            </a>
                        </div>
                        </div>
                        <div
                        className="sec-tit float-box oneself-wrap"
                        data-v-0e2a5f9c=""
                        >
                        <div className="mobile-hidden" data-v-0e2a5f9c="">
                            <div
                            className="sec-cont oneself-tab-info-txt"
                            data-v-0e2a5f9c=""
                            >
                            <ul className="bullet__16" data-v-0e2a5f9c="">
                                <li data-v-0e2a5f9c="">제품을 선택해 주세요.</li>
                            </ul>
                            </div>
                            <div
                            className="sec-cont oneself-tab-active00"
                            data-v-0e2a5f9c=""
                            >
                            <div className="box-radius bg__f7" data-v-0e2a5f9c="">
                                <strong className="tit" data-v-0e2a5f9c="">
                                검색 키워드 선택
                                </strong>
                                <div
                                data-mcs-theme="minimal-dark"
                                className="mCustomScrollbar oneself-select-item solutionProdBox"
                                data-v-0e2a5f9c=""
                                >
                                <button
                                    type="button"
                                    title="선택됨"
                                    className="btnRound is-active"
                                    data-v-0e2a5f9c=""
                                >
                                    스마트폰
                                </button>
                                <button
                                    type="button"
                                    title=""
                                    className="btnRound"
                                    data-v-0e2a5f9c=""
                                >
                                    태블릿
                                </button>
                                <button
                                    type="button"
                                    title=""
                                    className="btnRound"
                                    data-v-0e2a5f9c=""
                                >
                                    웨어러블
                                </button>
                                </div>{" "}
                                <button className="btn__close-select" data-v-0e2a5f9c="">
                                <span data-v-0e2a5f9c="">닫기</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className="floatL oneself-select-box" data-v-0e2a5f9c="">
                            <div className="pc-hidden" data-v-0e2a5f9c="">
                            <div className="select-tit" data-v-0e2a5f9c="">
                                선택된 제품
                            </div>
                            <div
                                className="select-form select-product"
                                data-v-0e2a5f9c=""
                            >
                                <div
                                className="form__select border_blue line-style is-selected"
                                data-v-0e2a5f9c=""
                                >
                                <button
                                    className="btn__toggle-select"
                                    data-v-0e2a5f9c=""
                                >
                                    <span data-v-0e2a5f9c="">스마트폰</span>
                                </button>
                                <div className="select" data-v-0e2a5f9c="">
                                    <strong className="tit" data-v-0e2a5f9c="">
                                    스마트폰
                                    </strong>
                                    <ul data-v-0e2a5f9c="">
                                    <li className="is-active" data-v-0e2a5f9c="">
                                        <a href="#" data-v-0e2a5f9c="">
                                        스마트폰
                                        </a>
                                    </li>
                                    <li data-v-0e2a5f9c="">
                                        <a href="#" data-v-0e2a5f9c="">
                                        태블릿
                                        </a>
                                    </li>
                                    <li data-v-0e2a5f9c="">
                                        <a href="#" data-v-0e2a5f9c="">
                                        웨어러블
                                        </a>
                                    </li>
                                    </ul>{" "}
                                    <button
                                    className="btn__close-select"
                                    data-v-0e2a5f9c=""
                                    >
                                    <span data-v-0e2a5f9c="">닫기</span>
                                    </button>
                                </div>
                                </div>
                            </div>{" "}
                            <span className="sub_txt" data-v-0e2a5f9c="">
                                (상세제품을 선택해주세요.)
                            </span>
                            </div>{" "}
                            {/**/}
                        </div>
                        <div className="floatR btn-box" data-v-0e2a5f9c="">
                            <button
                            type="button"
                            className="btn__40 style-radius"
                            data-v-0e2a5f9c=""
                            >
                            <span data-v-0e2a5f9c="">다른제품 선택</span>
                            </button>
                        </div>
                        </div>
                        <div className="sec-cont" data-v-0e2a5f9c="">
                        <div className="tab__flex no-rwd" data-v-0e2a5f9c="">
                            <button className="btn__toggle-tab" data-v-0e2a5f9c="">
                            <span data-v-0e2a5f9c="">많이하는 질문</span>
                            </button>
                            <div className="tab" data-v-0e2a5f9c="">
                            <strong className="tit" data-v-0e2a5f9c="">
                                스스로해결하기
                            </strong>
                            <ul data-v-0e2a5f9c="">
                                <li className="is-active" data-v-0e2a5f9c="">
                                <a
                                    href="#"
                                    id="faqTabBtn"
                                    title="선택됨"
                                    data-v-0e2a5f9c=""
                                >
                                    많이하는 질문
                                </a>
                                </li>
                                <li data-v-0e2a5f9c="">
                                <a
                                    href="#"
                                    id="downloadTabBtn"
                                    title=""
                                    data-v-0e2a5f9c=""
                                >
                                    다운로드
                                </a>
                                </li>
                            </ul>{" "}
                            <button className="btn__close-tab" data-v-0e2a5f9c="">
                                <span data-v-0e2a5f9c="">닫기</span>
                            </button>
                            </div>
                        </div>
                        </div>
                        <div className="sec-tit" data-v-0e2a5f9c="">
                        <h5 className="tit__05 sr-mobile" data-v-0e2a5f9c="">
                            많이하는 질문
                        </h5>
                        </div>
                        <div className="sec-cont oneself-tab-info-txt" data-v-0e2a5f9c="">
                        <ul className="bullet__16" data-v-0e2a5f9c="">
                            <li data-v-0e2a5f9c="">
                            아래 제품 증상 키워드를 선택하시면 증상에 대한 정보를
                            확인하실 수 있습니다.
                            </li>
                        </ul>
                        </div>
                        <div className="sec-cont oneself-tab-active01" data-v-0e2a5f9c="">
                        <button
                            type="button"
                            className="mobile-select-tit"
                            data-v-0e2a5f9c=""
                        >
                            증상 키워드 선택
                        </button>
                        <div
                            className="box-radius bg__f7 mobile-slide-box"
                            data-v-0e2a5f9c=""
                        >
                        <strong className="tit" data-v-0e2a5f9c="">
                          증상 키워드 선택
                        </strong>
                        <div className="temp-wrap" data-v-0e2a5f9c="">
                          <div
                            data-mcs-theme="minimal-dark"
                            className="mCustomScrollbar oneself-select-item solutionSympBox"
                            data-v-0e2a5f9c=""
                          >
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              전원/배터리/충전
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              블루투스
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              멈춤/오류/재시작
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              시스템 설정
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              데이터이동
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              네트워크/WI-FI
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              카메라/갤러리
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              디스플레이
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              애플리케이션
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              전화/문자
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              센서/터치
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              소리/진동
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              업데이트
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              사양/구성품
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              액세서리
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              이동통신사서비스
                            </button>
                            <button
                              type="button"
                              title=""
                              className="btnRound"
                              data-v-0e2a5f9c=""
                            >
                              기타/주의사항
                            </button>
                          </div>
                        </div>{" "}
                        <button className="btn__close-select" data-v-0e2a5f9c="">
                          <span data-v-0e2a5f9c="">닫기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sec-box oneself-search-area mt80">
                    <div className="sec-tit">
                      <h2 className="oneself-main-tit">
                        궁금한 사항을 입력하세요
                        <span className="sub_txt">
                          (상단 '선택된 제품'을 확인하시면 좀 더 정확한 검색이
                          가능합니다.)
                        </span>
                      </h2>
                    </div>
                    <div className="sec-cont">
                      <div className="oneself-seacrh-box">
                        <div
                          className="oneself-seacrh-input"
                          style={{ width: "100%" }}
                        >
                          <span className="form__text">
                            <span className="input">
                              <input
                                type="text"
                                placeholder="예 비밀번호 해제, 침수, C46xFW 등 특수문자를 제외한 단어로 검색"
                                title="예) 비밀번호 해제, 침수, C46xFW 등 특수문자를 제외한 단어로 검색"
                                defaultValue=""
                              />
                            </span>
                            {/**/}{" "}
                            <button className="btn-search">
                              <i className="icon-search-24">검색</i>
                            </button>
                          </span>
                        </div>
                        <div className="check-box-area" style={{ display: "none" }}>
                          <span className="form__checkbox">
                            <span className="input">
                              <input type="checkbox" id="checkboxName" name="" />{" "}
                              <label htmlFor="checkboxName">결과 내 검색</label>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="popular-search-word float-box">
                        <strong className="dot-style floatL">인기 검색어</strong>
                        <ul className="oneself-hash-tage floatL">
                          <li>
                            <a href="#">#S24</a>
                          </li>
                          <li>
                            <a href="#">#AI</a>
                          </li>
                          <li>
                            <a href="#">#데이터 이동</a>
                          </li>
                          <li>
                            <a href="#">#보호필름</a>
                          </li>
                          <li>
                            <a href="#">#디스플레이</a>
                          </li>
                          <li>
                            <a href="#">#패턴 해제</a>
                          </li>
                          <li>
                            <a href="#">#USIM 인식</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sec-box frequent-solution mt80">
                    <div className="sec-tit">
                      <h2 className="oneself-main-tit">
                        <span className="color__sky">스마트폰</span> 자주 찾는
                        해결방법
                      </h2>
                    </div>
                    <div className="sec-cont">
                      <div className="temp-wrap">
                        <div
                          data-mcs-theme="minimal-dark"
                          className="oneself-list mCustomScrollbar yScroll"
                        >
                          <ul>
                            <li>
                              <a href="/solution/23930">
                                <span>1.</span> 스마트폰 데이터 이동 방법을 알고
                                싶어요.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/39864">
                                <span>2.</span> 갤럭시 스마트폰 유심(USIM)/심카드
                                인식이 안 돼요.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/454636">
                                <span>3.</span> 갤럭시 스마트폰 초기화 방법이
                                궁금합니다.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/25240">
                                <span>4.</span> 스마트 스위치 PC프로그램으로 스마트폰
                                데이터를 이동하고 싶어요.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/25203">
                                <span>5.</span> 스마트폰 사용 중인 화면을 녹화할 수
                                있나요?
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/25098">
                                <span>6.</span> 휴대폰 사진을 PC로 간편하게 이동하는
                                방법이 궁금해요.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/1567616">
                                <span>7.</span> (Shorts) USIM(유심) 변경 후 전화,
                                데이터 접속이 안돼요.
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/1491865">
                                <span>8.</span> 갤럭시에서 수리모드 사용하는 방법
                                {/**/}
                              </a>
                            </li>
                            <li>
                              <a href="/solution/1480437">
                                <span>9.</span> 갤럭시, 외부 앱 설치 후 갑자기 광고가
                                보여지고, 기기가 느려졌어요.
                                {/**/}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-box mt80 oneself-secacrh-list">
                    <div className="sec-tit float-box">
                      <div className="floatL total-tit">
                        <h2 className="oneself-main-tit pc-oneself-main-tit">
                          <span className="color__sky">스마트폰</span>에 대한 자료
                        </h2>
                        <h2 className="mb-oneself-main-tit">검색결과</h2>{" "}
                        <strong>
                          <span className="color__sky">1,807</span> 건
                        </strong>
                      </div>
                      <div className="floatR oneself-select-box">
                        <div className="select-form">
                          <div className="form__select line-style is-selected">
                            <button className="btn__toggle-select">
                              <span>최신순</span>
                            </button>
                            <div className="select">
                              <strong className="tit">최신순</strong>
                              <ul>
                                <li className="is-active">
                                  <a href="#">최신순</a>
                                </li>
                                <li>
                                  <a href="#">만족도순</a>
                                </li>
                              </ul>{" "}
                              <button className="btn__close-select">
                                <span>닫기</span>
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <button
                          type="button"
                          className="btn__40 style-radius btn__000"
                        >
                          <span>동영상만 보기</span>
                        </button>
                      </div>
                    </div>
                    <div className="sec-cont mt20">
                      <ul className="oneself-list02">
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1855342">
                              <strong>
                                갤럭시 S24 Ultra, S펜 사용(활용) 및 설정 방법이
                                궁금합니다. 다른 S펜 제품은 사용(호환)이 가능한가요?
                              </strong>{" "}
                              {/**/}
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-31</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">75</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1855261">
                              <strong>
                                갤럭시 S24, 만 14세 미만 구글 계정 사용자 ‘서클로
                                검색’, ‘디스커버’, ‘생성형 배경화면’ 기능 사용 제한
                                안내
                              </strong>{" "}
                              {/**/}
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-31</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">22</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1855192">
                              <strong>
                                갤럭시 S24, 통역 앱을 설정하고 사용하는 방법을
                                알아보세요.
                              </strong>{" "}
                              {/**/}{" "}
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-31</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">135</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1854605">
                              <strong>
                                (Shorts) 다양한 각도에서 손쉽게 사진을 찍어요.
                              </strong>{" "}
                              <span>
                                <i className="icon-video">비디오</i>
                              </span>
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-30</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">249</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1854539">
                              <strong>(Shorts) 카메라 타이머를 설정해 보아요.</strong>{" "}
                              <span>
                                <i className="icon-video">비디오</i>
                              </span>{" "}
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-30</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">90</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1852870">
                              <strong>
                                갤럭시 S24, 스와이프 제스처(아래에서 위로, 제스처
                                힌트) 활성화 방법
                              </strong>{" "}
                              {/**/}{" "}
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-26</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">11,114</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1851979">
                              <strong>
                                갤럭시 S24 시리즈, 보호필름 부착 방법이 궁금합니다.
                              </strong>{" "}
                              <span>
                                <i className="icon-video">비디오</i>
                              </span>
                              <span>
                                <i className="icon-new">신규 작성</i>
                              </span>{" "}
                              {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-24</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">5,659</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1848960">
                              <strong>갤럭시 S24 Series 초기구매 혜택 안내</strong>{" "}
                              {/**/} {/**/} {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-18</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">3,647</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1848874">
                              <strong>갤럭시 S24 Series 사전구매 혜택 안내</strong>{" "}
                              {/**/} {/**/} {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-18</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">68,650</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-tit">
                            <a href="/solution/1848755">
                              <strong>
                                갤럭시 S24/S24+/S24 Ultra 프리미엄 핵심 사용 가이드
                              </strong>{" "}
                              {/**/} {/**/} {/**/}
                            </a>
                          </div>
                          <div className="list-info-box float-box">
                            <div className="floatL">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-tit">제품</span>{" "}
                                  <span className="list-info-txt">스마트폰</span>
                                </li>
                              </ul>
                            </div>
                            <div className="floatR">
                              <ul className="list-info">
                                <li>
                                  <span className="list-info-txt">2024-01-18</span>
                                </li>
                                <li className="list-view-num">
                                  <span className="list-info-txt">12,323</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="app-pagination">
                        <a
                          href="#"
                          role="button"
                          tabIndex={-1}
                          className="btn is-disabled"
                        >
                          <i className="icon-pagination-first">처음 페이지로 이동</i>
                        </a>{" "}
                        <a
                          href="#"
                          role="button"
                          tabIndex={-1}
                          className="btn is-disabled"
                        >
                          <i className="icon-pagination-prev">이전 페이지로 이동</i>
                        </a>{" "}
                        <span>
                          <strong className="current">1</strong>{" "}
                          <em className="total">181</em>
                        </span>{" "}
                        <a
                          href="#"
                          role="button"
                          tabIndex=""
                          className="btn"
                        >
                          <i className="icon-pagination-next">다음 페이지로 이동</i>
                        </a>{" "}
                        <a
                          href="#"
                          role="button"
                          tabIndex=""
                          className="btn"
                        >
                          <i className="icon-pagination-last">마지막 페이지로 이동</i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="sec-box mt80" data-v-fd5dc8ba="">
                    <div className="sec-tit" data-v-fd5dc8ba="">
                      <div className="oneself-banner-tit" data-v-fd5dc8ba="">
                        <strong data-v-fd5dc8ba="">
                          원하시는 정보를 못 찾으셨다면 아래 서비스를 이용해보세요.
                        </strong>
                      </div>
                    </div>
                    <div className="sec-cont oneself-banner" data-v-fd5dc8ba="">
                      <a
                        href="#"
                        title="새창"
                        className="infoNotBox"
                        data-v-b15c8980=""
                        data-v-fd5dc8ba=""
                      >
                        <dl data-v-b15c8980="">
                          <dt data-v-b15c8980="">챗봇 상담</dt>
                          <dd className="iconBox" data-v-b15c8980="">
                            <i className="icon-chatbot" data-v-b15c8980="" />
                          </dd>
                        </dl>
                      </a>{" "}
                      <a
                        href="#"
                        className="infoNotBox"
                        data-v-fd5dc8ba=""
                      >
                        <dl>
                          <dt>이메일 상담</dt>
                          <dd className="iconBox">
                            <i className="icon-email" />
                          </dd>
                        </dl>
                      </a>{" "}
                      <a
                        href="#"
                        title="새창"
                        className="infoNotBox"
                        data-v-fd5dc8ba=""
                      >
                        <dl>
                          <dt>전화상담 예약</dt>
                          <dd className="iconBox">
                            <i className="icon-phone" />
                          </dd>
                        </dl>
                      </a>
                    </div>
                    <ul className="bullet__16" data-v-fd5dc8ba="">
                      <li data-v-fd5dc8ba="">
                        무상 보증기간 이내라도 사용법 설명/설치등 제품의 고장이 아닌
                        경우 서비스를 요청하시면 별도의 요금이 부과됩니다.
                      </li>
                    </ul>
                  </div>
                </main>
              </div>
              <div className="app-floating-btn" data-v-477b5378="">
                  <div>
                    <a href="#!" className="btn__floating" onClick={(e) => {e.preventDefault(); setOpenChat(() => true)}}>
                      <span>퀵 메뉴</span>
                    </a>
                  </div>
              </div>
              <div className="loader" style={{ display: "none" }}>
                <span>로딩중</span>
              </div>
            </div>
          </div>
        </div>
        <AICC openModal={openChat} closeModal={setOpenChat} />
        {/* {openChat && <AICC openModal={openChat} closeModal={setOpenChat} />} */}
        </>
      
      );
}
export default Demo;