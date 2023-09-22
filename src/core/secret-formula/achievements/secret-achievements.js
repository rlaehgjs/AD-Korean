export const secretAchievements = [
  {
    id: 11,
    name: "처음은 항상 공짜죠",
    description: "이 업적을 클릭합니다."
  },
  {
    id: 12,
    name: "만약을 대비해서",
    get description() { return `새로 고침 없이 ${formatInt(100)}번 저장합니다.`; }
  },
  {
    id: 13,
    name: "조의를 표하십시오.",
    description: "조의를 표하세요."
  },
  {
    id: 14,
    name: "나도 그래",
    description: "장난스러운 말을 합니다."
  },
  {
    id: 15,
    name: "공중제비 조지기!",
    description: "궁중제비를 도세요.",
  },
  {
    id: 16,
    name: "너 그런 취향이니?",
    get description() {
      return  `1회의 영원 내에서, 실제 시간 ${formatInt(10)}분 동안 "고통" 표기법을 유지합니다.`;
    },
    checkRequirement: () => AchievementTimers.pain
      .check(PlayerProgress.eternityUnlocked() && Notations.current.isPainful, 600),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 17,
    name: "목숨 30개",
    description: "코나미 코드를 입력합니다."
  },
  {
    id: 18,
    name: "복권 당첨!",
    get description() {
      return `매초마다 ${formatInt(1)}/${formatInt(1e5)}의 확률로 획득합니다.`;
    }
  },
  {
    id: 21,
    name: "현생을 살아주세요",
    description: "비밀 시간 연구를 얻습니다."
  },
  {
    id: 22,
    name: "외계어",
    get description() { return `이모지 표기법을 사용하는 중 총 반물질 은하 ${formatInt(1e5)}개를 구매합니다.`; },
    checkRequirement: () => player.requirementChecks.permanent.emojiGalaxies >= 1e5,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 23,
    name: "범죄, 멈춰!",
    description: "개발자 도구를 엽니다."
  },
  {
    id: 24,
    name: "찐 뉴스",
    description: "눌렀을 때 뭔가를 실행시키는 뉴스를 클릭합니다."
  },
  {
    id: 25,
    name: "쉿... 비밀이야",
    description: "비밀 테마를 불러옵니다."
  },
  {
    id: 26,
    name: "넌 실패자야",
    get description() {
      return `영원 도전을 새로고침 없이 ${formatInt(10)}번 실패합니다.
      당신의 삶을 좀 더 소중히 쓰기를 바랍니다.`;
    },
    checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED
  },
  {
    id: 27,
    name: "물질 차원은 없나요?",
    description: "물질을 무한개로 만듭니다.",
    checkRequirement: () => Currency.matter.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "좋아.",
    description: "뭘 했는 지 모른 척 하지 마."
  },
  {
    id: 31,
    name: "불좀 꺼줄래? 내 램좀 다운하게.",
    get description() { return `새로고침 주기를 ${formatInt(200)}밀리초로 설청합니다.`; }
  },
  {
    id: 32,
    name: "0.001 미만 잡",
    get description() {
      return `가장 빠른 무한 또는 영원 완료 시간을 ${format(0.001, 3, 3)}초 미만으로 만듭니다.`;
    },
    checkRequirement: () =>
      Time.bestInfinity.totalMilliseconds <= 1 ||
      Time.bestEternity.totalMilliseconds <= 1,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "지름신이 강림합니다.",
    description: "STD 구매 버튼을 누릅니다."
  },
  {
    id: 34,
    name: "설명서는 읽어봤지?",
    description: "시간 연구를 배우지 않은 상태에서 초기화합니다."
  },
  {
    id: 35,
    name: "누가 최대버튼 있다는거 좀 알려줘",
    get description() { return `틱스피드 단일 구매를 ${formatInt(1e5)}번 실행합니다.`; },
    checkRequirement: () => player.requirementChecks.permanent.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "그러나 아무 일도 일어나지 않았다!",
    description: "오프라인 보상으로 아무것도 획득하지 않은 화면을 봅니다."
  },
  {
    id: 37,
    name: "설명대로",
    description: "설명을 따릅니다."
  },
  {
    id: 38,
    name: "위험천만",
    description: "완전 초기화 창에서 확인 문구를 모두 입력한 후 창을 끕니다."
  },
  {
    id: 41,
    name: "그런 차원은 없다",
    description: "9차원 구매를 시도합니다."
  },
  {
    id: 42,
    name: "부끄러운 줄 알아요",
    description: "영원 도전 12로 게임 속도를 가속시킵니다."
  },
  {
    id: 43,
    name: "불협화음 코러스",
    description: "장착한 모든 문양을 음악 문양으로 채웁니다.",
    checkRequirement: () => Glyphs.active.length && Glyphs.active.every(x => Glyphs.isMusicGlyph(x)),
    checkEvent: GAME_EVENT.GLYPHS_EQUIPPED_CHANGED
  },
  {
    id: 44,
    name: "이제 만족했니?",
    get description() { return `통계창을 실제 시간 ${formatInt(15)}분 동안 계속 봅니다.`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 900),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "드래그를 세월아 네월아",
    description: "특전 아이콘을 총 1분동안 드래그 합니다.",
    checkRequirement: () => player.requirementChecks.permanent.perkTreeDragging++ / 100 >= 60
  },
  {
    id: 46,
    name: "비 오는 날을 위해",
    description: "실제 시간 하루를 저장합니다."
  },
  {
    id: 47,
    name: "알트+",
    description: "숨길 수 있는 모든 탭을 숨깁니다."
  },
  {
    id: 48,
    name: "스택 오버플로",
    description: "자동화기계에서 오류의 수가 줄 수보다 많게 명령어를 입력합니다."
  },
];
