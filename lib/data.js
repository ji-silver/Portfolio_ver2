export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "SCSS",
  "Prisma",
  "Node.js",
  "MongoDB",
  "Express",
];

export const projectsData = [
  {
    id: 5,
    date: "2023년 9월 13일 ~ 9월 22일",
    skills: [
      {
        front: ["Next.js,", "SCSS,", "TypeScript,", "Amazon S3"],
        back: ["MonogoDB,", "Prisma"],
      },
    ],
    view: "https://myblogapp-dev.vercel.app/",
    git: "https://github.com/ji-silver/Blog",
    title: "MY BLOG",
    filter: "개인",
    desc: (
      <div>
        Next.js를 이용해서 CRUD 가능한 개인 블로그 만들어보기
        <br />
        <br />
        <strong>프로젝트 기획</strong>
        <ul>
          <li>Next.js에서 Prisma를 이용해서 REST API 만들기</li>
          <li>Next Auth 라이브러리로 소셜 로그인 구현</li>
          <li>WYSIWYG 에디터 사용해서 글 작성하기</li>
        </ul>
      </div>
    ),
    image: "/blog.jpg",
  },
  {
    id: 4,
    date: "2023년 7월 29일 ~ 8월 13일",
    git: "https://github.com/ji-silver/Strike-Zone",
    skills: [
      {
        front: ["React,", "Redux,", "TypeScript,", "styled-component,", "SCSS"],
        back: ["node.js,", "Express.js,", "MongoDB"],
      },
    ],
    title: "Strike Zone!",
    filter: "개인",
    desc: (
      <div>
        야구를 관람하는 것뿐만 아니라, 그날의 야구 기록을 작성하고 야구장에서의
        경험을 기록할 수 있는 웹 서비스
        <br />
        예전부터 야구를 즐기며 경기 결과와 함께 느낀 감정을 다이어리에 기록하는
        것이 취미였고,
        <br /> 이러한 취미와 열정에서 출발하여 웹 사이트를 개발하게 되었습니다.
        <br />
        사용자들이 자신의 야구 관람 이야기를 더욱 쉽고 편리하게 기록할 수 있는
        플랫폼을 제공하고자 합니다.
        <br />
        <br />
        <strong>프로젝트 기획</strong>
        <ul>
          <li>
            캘린더: 양 팀 점수, 라인업(포지션), 승리투수, 홀드, 세이브, MVP,
            코멘트 작성 및 확인
          </li>
          <li>직관 기록: 야구장 직관을 다녀왔다면 직관 다이어리 작성하기</li>
          <li>
            직관 승률: 직관 기록 작성할 때 이긴날 체크 시 직관 승률 계산하기
          </li>
        </ul>
      </div>
    ),
    image: "/st1.png",
  },
  {
    id: 3,
    date: "2023/05/29 ~ 2023/06/16",
    skills: [
      {
        front: ["React,", "TypeScript,", "styled-component,", "SCSS"],
        back: [
          "node.js,",
          "Express.js,",
          "MySQL,",
          "TypeScript,",
          "python,",
          "redis",
        ],
      },
    ],
    git: "https://github.com/ji-silver/Fanhana",
    title: "팬하나(FANHANA)",
    filter: "팀",
    desc: (
      <div>
        국내 스포츠(K리그, KBO, LoL)팬을 위한 세상에 단 하나뿐인 스포츠 커뮤니티
        팬하나(FANHANA)
        <br />
        다양한 스포츠 종목과 관련된 경기 정보를 보여줄 수 있는 웹사이트로
        <br /> 공통의 관심사를 가진 스포츠 팬들이 자유롭게 소통할 수 있도록
        커뮤니티 기능을 제공합니다.
        <br />
        <br />
        <strong>프로젝트 기획</strong>
        <ul>
          <li>
            커뮤니티 CRUD 기능(게시글, 댓글, 쇼츠), 각 스포츠들의 경기 일정과
            순위 보여주기
          </li>
          <li>
            크롤링을 통해 경기 일정, 순위 데이터 가져오고, 경기가 있는 날을
            바탕으로 경기장 위치 확인하기
          </li>
        </ul>
      </div>
    ),
    image: "/fanhana.jpg",
  },
  {
    id: 2,
    date: "2023년 5월 9일 ~ (약 30일)",
    skills: [
      {
        front: ["React,", "SCSS"],
        back: ["node.js,", "Express.js,", "MongoDB"],
      },
    ],
    view: "https://wanderstay.jisilver.shop",
    git: "https://github.com/ji-silver/WanderStay",
    title: "WanderStay",
    filter: "개인",
    desc: (
      <div>
        국내 여행 준비에 가장 중요한 호텔 및 숙박 예약 웹 서비스 WanderStay
        <br />
        원하는 숙소를 검색 필터링을 통해 한 눈에 확인할 수 있고, 원하는 날짜에
        예약도 가능합니다.
        <br />
        <br />
        <strong>프로젝트 기획</strong>
        <ul>
          <li>
            WanderStay 회원이면 언제든 예약 가능한 날짜에 숙소를 예약할 수
            있게하기
          </li>
          <li>
            관리자 페이지를 구현하여 기본적인 CRUD 기능이 가능하도록 풀스택 개발
            목표
          </li>
        </ul>
      </div>
    ),
    image: "/wanderstay.jpg",
  },
  {
    id: 1,
    date: "2023.05.08 ~ 2023.05.26",
    skills: [
      {
        front: ["React,", "TypeScript,", "Recoil,", "SCSS"],
        back: ["node.js,", "Express.js,", "MongoDB"],
      },
    ],
    view: "https://ppvoca.vercel.app/book/list",
    git: "https://github.com/ji-silver/Vocabulary-List-FE",
    title: "뿅뿅 단어장",
    filter: "팀",
    desc: (
      <div>
        나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수 있는
        앱 기반 뿅뿅 단어장
        <br />
        다음 사전 크롤링을 통해 정확하고 신뢰성 있는 단어 학습을 지원하는 앱
        기반 한/영 단어장입니다.
        <br />
        <br />
        <strong>프로젝트 기획</strong>
        <ul>
          <li>
            앱 어플리케이션 &lt;VoCat - 나만의 단어장&gt;을 클론코딩한 앱 기반
            웹 서비스 만들기
          </li>
          <li>
            기본적인 CRUD기능 + 퀴즈 기능으로 다양한 로직을 구현해 볼 수 있는
            매체
          </li>
          <li>전 인원 풀스택 개발하기</li>
        </ul>
      </div>
    ),
    image: "/voca1.jpg",
  },
];
