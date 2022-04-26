//     '#퀸카가 되고싶어?', 0
//     '#맛깔나는', 1
//     '#폰할머니집', 2
//     '#방구석여행', 3
//     '#냠냠쩝쩝', 4
//     '#브금맛집', 5
//     '#감정을파고드는', 6
//     '#빨간맛궁금해허니', 7
//     '#당신의기숙사는', 8
//     '#미친상상력의비밀', 9
//     '#잔혹한', 10
//     '#심장마비오는', 11
//     '#흥미진진한', 12
//     '#아이들과보기좋은', 13
const qnaList = [
  {
    q: '1. 이틀간의 자유시간이 생겼다. 쉬는 동안 가고 싶은 장소는?',
    a: [
      {
        answer: 'A. 느긋하고 여유로운 분위기의 카페',
        type: [2, 3, 4, 5],
      },
      {
        answer: 'B. 어둡고 화려한 조명이 있는 술집',
        type: [0, 1, 7, 10, 11, 12],
      },
      {
        answer: 'C. 평소에 잘 못가던 인기 전시회',
        type: [6, 8, 9, 13],
      },
    ],
  },
  {
    q: '2. 카페에서 느긋하게 하고싶은 것은?',
    a: [
      {
        answer: 'A. 예쁜 디저트 사진을 열심히 찍어서 업로드',
        type: [0, 1, 2, 3, 7, 12],
      },
      {
        answer: 'B. 달달한 간식과 음료 먹으며 여유롭게 ',
        type: [4, 5, 6, 13],
      },
      {
        answer: 'C. 차분한 마음으로 자기개발을 위한 독서',
        type: [8, 9, 10, 11],
      },
    ],
  },
  {
    q: '3. 창 밖을 보니 비가 온다. 비를 보면 드는 생각은?',
    a: [
      {
        answer: 'A. 토독토독 들는 빗소리가 asmr같다',
        type: [0, 3, 5, 6],
      },
      {
        answer: 'B. 비오는날 어두운 뒷골목에서 이뤄지는 스릴만점 추격전이 생각난다.',
        type: [7, 8, 9, 10, 11, 12],
      },
      {
        answer: 'C. 비오는 날에는 바삭바삭 맛있는 부침개를 먹어야지',
        type: [1, 2, 4, 13],
      },
    ],
  },
  {
    q: '4. 은퇴 후 내 집 마련의 꿈을 실현한다면?',
    a: [
      {
        answer: 'A. 무조건 도시를 벗어나서 살아야지! 지친 영혼을 치유하는 자연의 소리~',
        type: [2, 3, 5, 13],
      },
      {
        answer: 'B. 복작복작하고 편의 시설 빵빵한 도시에 살아야지!',
        type: [0, 1, 4, 7, 10, 11, 12],
      },
      {
        answer: 'C. 위치보단 나만의 특별한 감성을 담을 수 있는 인테리어가 중요해',
        type: [6, 8, 9],
      },
    ],
  },
  {
    q: '5. 꿀 같은 주말! 주말 동안 할 일은?',
    a: [
      {
        answer: 'A. 주말을 그냥 보낼 수는 없지! 친구랑 같이 놀자',
        type: [0, 1, 3, 4, 7, 12],
      },
      {
        answer: 'B. 이불 밖은 위험해! 침대에서 밀린 영화 보기',
        type: [2, 5, 6, 13],
      },
      {
        answer: 'C. 주말에도 갓생살기! 평일에 바빠서 못했던 운동을 한다',
        type: [8, 9, 10, 11],
      },
    ],
  },

  {
    q: '6. 디즈니랜드에 놀러왔다! 가장 먼저 가고 싶은 곳은?',
    a: [
      {
        answer: 'A. 디즈니랜드의 랜드마크인 공주의 성으로!',
        type: [0, 2, 3, 8, 9, 13],
      },
      {
        answer: 'B. 놀이공원에 왔으면 당연히 놀이기구부터 즐겨야지!',
        type: [1, 10, 11, 12],
      },
      {
        answer: 'C. 이 날만을 기다렸다! 기념품샵 먼저 플렉스',
        type: [4, 5, 6, 7],
      },
    ],
  },
  {
    q: '7. 의도와는 다르게 대화하다가 상대방을 서운하게 했다. 나의 행동은?',
    a: [
      { answer: 'A. 원래 내 의도를 이야기 하며 상대를 설득한다', type: [3, 4, 5, 8, 12] },
      { answer: 'B. 화났어? 우선 상대방의 기분을 풀어준다', type: [0, 2, 6, 7, 13] },
      {
        answer: 'C. 어쩌라고 내용을 곡해해서 이해한 상대방이 문제다',
        type: [1, 7, 10, 11],
      },
    ],
  },

  {
    q: '8. 어떤 연애를 꿈꾸나요?',
    a: [
      { answer: 'A. 영화 속 주인공 같은 로맨틱한 연애', type: [0, 5, 6, 7, 9] },
      {
        answer: 'B. 함께 있으면 친구같이 편안하고 즐거운 연애',
        type: [1, 2, 4, 8, 13],
      },
      {
        answer: 'C. 나의 특이한 취향도 함께 즐겨주는 사람과의 연애',
        type: [3, 10, 11, 12],
      },
    ],
  },

  {
    q: '9. 음악을 들을 때 관심 가는 음악은?',
    a: [
      {
        answer: 'A. 지금 가장 핫한 Top100 차트부터 살핀다 ',
        type: [0, 4, 7, 8, 13],
      },
      {
        answer: 'B. 내 취향의 숨겨진 명곡을 찾아 본다',
        type: [2, 3, 5, 6, 8, 11],
      },
      {
        answer: 'C. 헬스장에서 나올법한 강력하고 기운찬 음악 ',
        type: [10, 12, 9],
      },
    ],
  },
  {
    q: '10. 지치는 하루의 끝 당신을 위로하는 것은?',
    a: [
      {
        answer: 'A. 영혼을 살찌우는 음식',
        type: [1, 2, 3, 4, 13],
      },
      { answer: 'B. 난 슬플 때 음악을 들어', type: [0, 5, 6, 12] },
      {
        answer: 'C. 스트레스를 날릴 수 있는 화끈한 영화',
        type: [7, 8, 9, 10, 11],
      },
    ],
  },

  {
    q: '11. 세상 아름다운 것을 보면 어떤 생각이 드나요?',
    a: [
      { answer: 'A. 인증샷을 찍어 공유한다', type: [0, 1, 3, 4, 6] },
      {
        answer: 'B. 가까이 가서 더 자세히 들여다본다',
        type: [2, 5, 7, 8, 13],
      },
      {
        answer: 'C. 이걸 파괴하면 어떻게 될까? 궁금하다.',
        type: [9, 10, 11, 12],
      },
    ],
  },
  {
    q: '12. 친구와의 약속이 취소됐을 때 나는?',
    a: [
      {
        answer: 'A. 갑자기 약속 취소? 열받아서 친구한테 한소리 한다.',
        type: [9, 10, 11, 12],
      },
      {
        answer: 'B. 약속취소? 오히려 좋아~ 바로 침대로 다이빙 한다.',
        type: [2, 5, 6, 13],
      },
      {
        answer: 'C. 인싸니까 상관 없다. 다른 친구한테 연락 고고~ ',
        type: [0, 1, 3, 4, 7, 8],
      },
    ],
  },
  {
    q: '13. 침대 밑에 귀신이 있다면?',
    a: [
      {
        answer: 'A. 때려잡는다',
        type: [1, 4, 7, 9, 10, 12],
      },
      {
        answer: 'B. 도망친다',
        type: [0, 5, 8, 11],
      },
      {
        answer: 'C. 뭘 할 정신이 없다. 그대로 기절한다',
        type: [2, 3, 6, 13],
      },
    ],
  },
];
export default qnaList;
