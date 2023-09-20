import { Effarig } from "./effarig";
import { Enslaved } from "./enslaved";
import { Laitela } from "./laitela/laitela";
import { Pelle } from "./pelle/pelle";
import { Ra } from "./ra/ra";
import { Teresa } from "./teresa";
import { V } from "./V";

export const Celestials = {
  teresa: Teresa,
  effarig: Effarig,
  enslaved: Enslaved,
  v: V,
  ra: Ra,
  laitela: Laitela,
  pelle: Pelle
};

GameDatabase.celestials.descriptions = [
  {
    name: "테레사",
    effects() {
      return `문양의 시간 연구 자동생성 능력이 비활성화 됩니다.
      무한 포인트와 영원 포인트 획득량이 ${format(0.55, 2, 2)}제곱으로 감소합니다.`;
    },
  },
  {
    name: "에파리그",
    effects() {
      return `모든 차원들의 배율과 게임 속도, 틱스피드가 "시간 지연"처럼 크게 감소합니다.
      무한력은 차원들의 배율과 게임 속도 감소량을, 시간 조각은 틱스피드 감소량을 줄입니다.
      문양 레벨이 ${formatInt(Effarig.glyphLevelCap)}로 제한되지만, 희귀도는 영향받지 않습니다.`;
    },
    description() {
      return `목표 단계를 처음으로 완료하면, 에파리그의 현실에서 빠져나오게 됩니다.`;
    }
  },
  {
    name: "이름 없는 자들",
    effects() {
      return `문양의 레벨이 최소 ${formatInt(5000)}으로 증가합니다.
      모든 무한, 시간 차원과, 반물질 8 차원의 개수가 ${formatInt(1)}개로 제한됩니다.
      반물질 차원의 배율이 항상 지연되며(문양의 효과는 실제 시간 지연에서만 적용)
      시간 연구 192번 (복제자 제한 해제)를 사용할 수 없습니다.
      블랙홀을 사용 할 수 없습니다.
      타키온 입자 생산과 지연된 시간 생산이 크게 감소합니다.
      지연 문양으로 인한 시간 연구 생산이 비활성화 됩니다.
      몇몇 도전의 목표가 증가합니다.
      저장된 시간을 해방할 때, 효율이 ${format(0.55, 2, 2)}제곱으로 감소합니다.`;
    }
  },
  {
    name: "V",
    effects() {
      const vEffect = `모든 차원의 배율과, 무한 포인트, 영원 포인트, 지연된 시간들의 초당 획득량에 ${format(0.5, 2, 2)}제곱이 적용됩니다.
      복제자 생산 간격에 ${formatInt(2)}제곱이 적용됩니다.`;
      const vEffectAdditional = `문양 연구의 기하급수 효과가 비활성화 됩니다.`;

      return Ra.unlocks.unlockGlyphAlchemy.canBeApplied
        ? vEffect + vEffectAdditional
        : vEffect;
    }
  },
  {
    name: "라",
    effects() {
      return `최대 ${formatInt(4)} 번의 차원 가속만 할 수 있습니다.
      틱스피드 가속의 개당 배율이 ${formatX(1.1245, 0, 4)}로 고정됩니다.`;
    },
  },
  {
    name: "라이텔라",
    effects() {
      let disabledDims;
      const highestActive = 8 - Laitela.difficultyTier;
      switch (highestActive) {
        case 0:
          disabledDims = "모든 차원들";
          break;
        case 7:
          disabledDims = "8차원들";
          break;
        default:
          disabledDims = `${highestActive + 1}번째 이상의 차원들`;
          break;
      }
      const disabledText = highestActive === 8
        ? ""
        : `${disabledDims}의 생산이 비활성화됩니다.`;

      return `무한 포인트와 영원 포인트의 획득이 지연됩니다.
      게임 속도가 ${formatInt(1)}로 감소하며 ${formatInt(10)}분에 걸쳐 돌아옵니다.
      블랙홀 저장, 해방, 펄스, 역전들이 모두 비활성화 됩니다.
      ${disabledText}`;
    },
    description() {
      return `반물질이 현실에서 엔트로피를 생산합니다.\
      ${formatPercents(1)} 엔트로피에서, 현실이 불안정화 되며\
      도달한 시간에 따라 보상을 획득하게 됩니다. ${formatPercents(1)}.
      ${formatInt(30)}초 내에 현실을 불안정화 시키면 현실이 더 어려워 지는 대신\
      더 강력한 보상을 획득할 수 있습니다.\
      ${formatInt(8)}번 불안정화 시키면, 추가로 어둠의 에너지 획득량이 ${formatX(8)}배로 증가합니다.`;
    }
  },

];
