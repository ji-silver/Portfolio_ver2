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
        front: ["Next.js", "SCSS", "TypeScript", "Amazon S3"],
        back: ["MongoDB", "Prisma"],
      },
    ],
    view: "https://myblogapp-dev.vercel.app/",
    git: "https://github.com/ji-silver/Blog",
    title: "MY BLOG",
    filter: "개인",
    about: <p>Next.js와 Prisma를 이용해서 CRUD 가능한 개인 블로그 만들기</p>,
    desc: (
      <div>
        <ul>
          <li>
            Next Auth 라이브러리로 소셜 로그인 구현, 이메일 및 프로필 사진 정보
            활용
          </li>
          <li>WYSIWYG 에디터를 사용하여 글 작성 및 편집</li>
          <li>이미지는 AWS S3, CloudFront를 이용하여 DB에 url 저장</li>
          <li>Prisma를 통해 데이터베이스 구축, 데이터 관리</li>
        </ul>
      </div>
    ),
    trouble: (
      <ol>
        <li>
          React-Quill 에디터 SSR 지원이 안되는 문제
          <p>
            → next/dynamic을 사용하여 컴포넌트를 동적으로 가져올 때 ssr 옵션
            false로 설정
          </p>
        </li>
      </ol>
    ),
    image: "/blog.jpg",
  },
  {
    id: 4,
    date: "2023년 7월 29일 ~ 8월 13일",
    git: "https://github.com/ji-silver/Strike-Zone",
    skills: [
      {
        front: [
          "React",
          "Redux Toolkit",
          "TypeScript",
          "styled-component",
          "SCSS",
        ],
        back: ["Node.js", "Express.js", "MongoDB"],
      },
    ],
    title: "Strike Zone!",
    filter: "개인",
    about: (
      <p>
        야구를 관람하는 것뿐만 아니라, 그날의 야구 기록을 작성하고 야구장에서의
        경험을 기록할 수 있는 웹 서비스
        <br />
        사용자들이 자신의 야구 관람 이야기를 더욱 쉽고 편리하게 기록할 수 있는
        플랫폼을 제공하고자 합니다.
      </p>
    ),
    desc: (
      <div>
        <ul>
          <li>
            Redux-Toolkit을 사용하여 사용자 정보 및 기록 데이터를 전역 상태 관리
          </li>
          <li>
            FullCalendar 라이브러리를 커스텀 하여 기록했던 정보(팀, 점수, 승부,
            장소) 기록
          </li>
          <li>Node.js와 Express.js를 활용하여 RESTful API를 설계 및 구현</li>
          <li>JWT을 사용하여 사용자 인증</li>
        </ul>
      </div>
    ),
    image: "/st1.png",
  },
  {
    id: 3,
    date: "2023/05/29 ~ 2023/06/16",
    data: [6, 8, 7, 8, 7],
    skills: [
      {
        front: ["React", "TypeScript", "styled-component", "SCSS"],
        back: [
          "Node.js",
          "Express.js",
          "MySQL",
          "TypeScript",
          "python",
          "redis",
        ],
      },
    ],
    git: "https://github.com/ji-silver/Fanhana",
    title: "팬하나(FANHANA)",
    filter: "팀",
    about: (
      <p>
        국내 스포츠(K리그, KBO, LoL)팬을 위한 세상에 단 하나뿐인 스포츠 커뮤니티
        팬하나(FANHANA).
        <br /> 다양한 스포츠 종목과 관련된 경기 정보를 보여줄 수 있는 웹사이트로
        공통의 관심사를 가진 스포츠 팬들이
        <br /> 자유롭게 소통할 수 있도록 커뮤니티 기능을 제공합니다.
      </p>
    ),
    desc: (
      <div>
        <strong>프론트엔드 개발 담당</strong>
        <ul>
          <li>
            스포츠 특성(승률, 승점, 승)에 맞게 순위를 계산하기 위해 데이터 가공
          </li>
          <li>
            각 시즌에 따라 순위 데이터를 업데이트하기 위해 useRank 커스텀 훅을
            구현하여 응답 데이터 효율적 관리
          </li>
          <li>
            'openweathermap' API를 활용하여 사용자의 위치 정보를 기반으로 실시간
            날씨 정보를 표시
          </li>
          <li>Header, NavBar 구현</li>
        </ul>
      </div>
    ),
    trouble: (
      <ol>
        <li>
          헤더에서 로그인 시 유저 정보 렌더링 X, 로그아웃 시 로그인 버튼 생성이
          되지 않는 문제
          <p>
            → 전역 상태 관리의 필요성을 느끼지 못해 고려하지 않고 프로젝트
            개발을 진행했던게 문제가 되었으며 시간 관계상 강제 리로드로
            해결했지만, 전역 상태 관리의 필요성을 느꼈던 프로젝트
          </p>
        </li>
      </ol>
    ),
    image: "/fanhana.jpg",
  },
  {
    id: 2,
    date: "2023년 5월 9일 ~ (약 30일)",
    skills: [
      {
        front: ["React", "SCSS", "Context"],
        back: ["Node.js", "Express.js", "MongoDB"],
      },
    ],
    view: "https://wanderstay-dev.vercel.app/",
    git: "https://github.com/ji-silver/WanderStay",
    title: "WanderStay",
    filter: "개인",
    about: (
      <p>
        국내 여행 준비에 가장 중요한 호텔 및 숙박 예약 웹 서비스 WanderStay.
        <br />
        원하는 날짜와 가격을 비교하여 숙소를 예약할 수 있고, 관리자 페이지를
        구현하여 기본적인 CRUD 기능이 가능하도록 풀스택 개발 목표로
        구현하였습니다.
      </p>
    ),
    desc: (
      <div>
        <ul>
          <li>JWT토큰을 사용해서 사용자 인증</li>
          <li>유저 정보는 Context API와 useReducer로 전역 상태 관리</li>
          <li>Node.js와 Express.js를 통해 MongoDB 연결 후 데이터 관리</li>
          <li>MongoDB 비교 쿼리 연산자를 사용해서 숙소 데이터 필터링</li>
          <li>관리자페이지를 구현 및 숙소에 대한 CRUD 기능 구현</li>
        </ul>
      </div>
    ),
    image: "/wanderstay.jpg",
  },
  {
    id: 1,
    date: "2023.05.08 ~ 2023.05.26",
    data: [8, 8, 6, 7, 8],
    skills: [
      {
        front: ["React,", "TypeScript,", "Recoil,", "SCSS"],
        back: ["Node.js,", "Express.js,", "MongoDB"],
      },
    ],
    view: "https://ppvoca.vercel.app/book/list",
    git: "https://github.com/ji-silver/Vocabulary-List-FE",
    title: "뿅뿅 단어장",
    filter: "팀",
    about: (
      <p>
        나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수 있는
        앱 기반 뿅뿅 단어장.
        <br />
        다음 사전 크롤링을 통해 정확하고 신뢰성 있는 단어 학습을 지원하는 앱
        기반 한/영 단어장입니다.
      </p>
    ),
    desc: (
      <div>
        <strong>프론트엔드, 백엔드 개발 담당</strong>
        <ul>
          <li>단어장 추가/수정 및 단어 추가/수정 페이지</li>
          <li>단어장 목록 컴포넌트</li>
          <li>Recoil을 통해 토큰을 전역상태 관리하여 유저에게만 권한 부여</li>
          <li>
            단어 입력 후 API 통신을 통해 백엔드에서 다음사전을 크롤링 한
            데이터를 화면에 표시
          </li>
        </ul>
      </div>
    ),
    trouble: (
      <ol>
        <li>
          컴포넌트 분리 문제
          <p>
            → 첫 리액트 프로젝트였기 때문에 컴포넌트 단위를 이해하지 못해서
            발생한 문제로 처음부터 코드들을 분리하지 않았기 때문에 코드 복잡도가
            올라갔으며 나중에 분리할 때 공수가 많이 들었기 때문에 코드를
            분리하고 모듈화하는 습관을 가져야 한다고 느낌
          </p>
        </li>
      </ol>
    ),
    image: "/voca1.jpg",
  },
];
