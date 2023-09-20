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
      무한 포인트와 영원 포인트 획득량이 ^${format(0.55, 2, 2)}으로 감소합니다.`;
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
      저장된 시간을 해방할 때, 효율이 ^${format(0.55, 2, 2)}로 감소합니다.`;
    }
  },
  {
    name: "V",
    effects() {
      const vEffect = `모든 차원의 배율과, 무한 포인트, 영원 포인트, 지연된 시간들의 초당 획득량에 0.5제곱이 적용됩니다.
      복제자 생산 간격에 2제곱이 적용됩니다.`;
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
      틱스피드 가속의 개당 배율이 ${formatX(1.1245, 0, 3)}로 고정됩니다.`;
    },
  },
  {
    name: "라이텔라",
    effects() {
      let disabledDims;
      const highestActive = 8 - Laitela.difficultyTier;
      switch (highestActive) {
        case 0:
          disabledDims = "all Dimensions";
          break;
        case 1:
          disabledDims = "2nd and higher Dimensions";
          break;
        case 2:
          disabledDims = "3rd and higher Dimensions";
          break;
        case 7:
          disabledDims = "8th Dimensions";
          break;
        default:
          disabledDims = `${highestActive + 1}th and higher Dimensions`;
          break;
      }
      const disabledText = highestActive === 8
        ? ""
        : `Production from ${disabledDims} is disabled.`;

      return `Infinity Point and Eternity Point gain are Dilated.
      Game speed is reduced to ${formatInt(1)} and gradually comes back over ${formatInt(10)} minutes.
      Black Hole storing, discharging, pulsing, and inversion are all disabled.
      ${disabledText}`;
    },
    description() {
      return `Antimatter generates entropy inside of this Reality.\
      At ${formatPercents(1)} entropy, the Reality becomes destabilized\
      and you gain a reward based on how quickly you reached ${formatPercents(1)}.
      Destabilizing the Reality in less than ${formatInt(30)} seconds makes it become significantly more difficult,\
      in exchange for giving a much stronger reward.\
      Doing this ${formatInt(8)} times will also give a ${formatX(8)} to Dark Energy gain.`;
    }
  },

];
