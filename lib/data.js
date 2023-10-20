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
        back: ["MongoDB,", "Prisma"],
      },
    ],
    view: "https://myblogapp-dev.vercel.app/",
    git: "https://github.com/ji-silver/Blog",
    title: "MY BLOG",
    filter: "개인",
    desc: (
      <div>
        <strong>
          Next.js와 Prisma를 이용해서 CRUD 가능한 개인 블로그 만들기
        </strong>
        <br />
        <br />
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
        <strong>
          야구를 관람하는 것뿐만 아니라, 그날의 야구 기록을 작성하고
          야구장에서의 경험을 기록할 수 있는 웹 서비스
        </strong>
        <br />
        <br />
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
        <strong>
          국내 스포츠(K리그, KBO, LoL)팬을 위한 세상에 단 하나뿐인 스포츠
          커뮤니티 팬하나(FANHANA)
        </strong>
        <br />
        <br />
        <p>프론트엔드 개발 담당</p>
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
    image: "/fanhana.jpg",
  },
  {
    id: 2,
    date: "2023년 5월 9일 ~ (약 30일)",
    skills: [
      {
        front: ["React,", "SCSS,", "Context"],
        back: ["node.js,", "Express.js,", "MongoDB"],
      },
    ],
    view: "https://wanderstay-dev.vercel.app/",
    git: "https://github.com/ji-silver/WanderStay",
    title: "WanderStay",
    filter: "개인",
    desc: (
      <div>
        <strong>
          국내 여행 준비에 가장 중요한 호텔 및 숙박 예약 웹 서비스 WanderStay
        </strong>
        <br />
        <br />
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
        <strong>
          나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수
          있는 앱 기반 뿅뿅 단어장
        </strong>
        <br />
        <br />
        <p>프론트엔드, 백엔드 개발 담당</p>
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
    image: "/voca1.jpg",
  },
];
