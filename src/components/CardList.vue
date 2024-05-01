<template>
  <div class="card-list">
    <h2 :class="`card-list__title card-list__title-${page}`">
      {{
        page === "business"
          ? "К чему приводит недосыпание сотрудников?"
          : "Как сон влияет на&nbsp;качество жизни?"
      }}
    </h2>
    <ul class="card-list__list" v-if="!slider">
      <li
        :class="`card-list__item card-list__item-${
          card[page].size
        } card-list__item-${card[page].size}-${page} ${
          card[page].isOpen ? 'open' : ''
        }`"
        v-for="card in cards"
        :key="card.id"
      >
        <!-- <div
          class="card-list__container"
          :style="`${card.isOpen ? 'transform: rotateY(180deg); ' : ''}`"
        > -->
        <div class="card-list__container">
          <h3
            class="card-list__item-title"
            v-html="card[page].isOpen ? card[page].backTitle : card[page].title"
          >
            <!-- {{ card[page].isOpen ? card[page].backTitle : card[page].title }} -->
          </h3>
          <p
            class="card-list__item-text"
            v-html="
              card[page].isOpen
                ? card[page].backText[card[page].partOfText]
                : card[page].text
            "
          >
            <!-- {{
              card[page].isOpen
                ? card[page].backText[card[page].partOfText]
                : card[page].text
            }} -->
            <!-- {{ card[page].partOfText }} -->
          </p>

          <button
            v-if="card[page].isOpen && card[page].backText.length > 1"
            class="card-list__btn"
            style="right: 30px"
            @click="showMoreText(card[page].backText.length, card[page])"
          >
            {{
              card[page].partOfText === card[page].backText.length - 1
                ? "В начало"
                : "Показать еще"
            }}
          </button>
          <button class="card-list__btn" @click="toggleCard(card[page])">
            <svg
              v-if="card[page].isOpen"
              class="card-list__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.875 6.75L7.0625 10.9375L6 12L0 6L6 0L7.0625 1.0625L2.875 5.25H12V6.75H2.875Z"
                fill="#007AFF"
              />
            </svg>
            {{ card[page].isOpen ? "Назад" : " Показать еще" }}
          </button>
        </div>
        <div :class="`card-list__animation card-list__animation-${card.id}`">
          <lottie
            :ref="`cardAnimation${card[page].id}`"
            v-show="!card[page].isOpen"
            :options="{
              animationData: card[page].animation,
            }"
            :height="0"
            :width="535"
          />
        </div>
      </li>
    </ul>
    <div v-if="slider" class="card-list__slider">
      <agile :slidesToShow="1.05" :navButtons="false" :dots="true">
        <div
          :class="`card-list__item card-list__item-${
            card[page].size
          } card-list__item-${card[page].size}-${page} ${
            card[page].isOpen ? 'open' : ''
          }`"
          v-for="card in cards"
          :key="card.id"
        >
          <div class="card-list__container">
            <h3 class="card-list__item-title">
              {{ card[page].isOpen ? card[page].backTitle : card[page].title }}
            </h3>
            <p
              class="card-list__item-text"
              v-html="
                card[page].isOpen
                  ? card[page].backText[card[page].partOfText]
                  : card[page].text
              "
            >
              <!-- {{
                card[page].isOpen
                  ? card[page].backText[card[page].partOfText]
                  : card[page].text
              }} -->
              <!-- {{ card[page].partOfText }} -->
            </p>

            <button
              v-if="card[page].isOpen && card[page].backText.length > 1"
              class="card-list__btn"
              style="right: 30px"
              @click="showMoreText(card[page].backText.length, card[page])"
            >
              {{
                card[page].partOfText === card[page].backText.length - 1
                  ? "В начало"
                  : "Показать еще"
              }}
            </button>
            <button class="card-list__btn" @click="toggleCard(card[page])">
              <svg
                v-if="card[page].isOpen"
                class="card-list__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.875 6.75L7.0625 10.9375L6 12L0 6L6 0L7.0625 1.0625L2.875 5.25H12V6.75H2.875Z"
                  fill="#007AFF"
                />
              </svg>
              {{ card[page].isOpen ? "Назад" : " Показать еще" }}
            </button>
          </div>
          <div :class="`card-list__animation card-list__animation-${card.id}`">
            <lottie
              v-show="!card[page].isOpen"
              :options="{
                animationData: card[page].animation,
              }"
              :height="0"
              :width="535"
            />
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { VueAgile } from "vue-agile";

@Component({
  components: {
    agile: VueAgile,
  },
})
export default class CardList extends Vue {
  @Prop({ type: String, default: "user" }) page;
  cards = [
    {
      id: 1,
      user: {
        text: "Даже всего после одной ночи посредственного сна первым дает об этом знать мозг и вы чувствуете себя дезориентированным и вялым",
        title: "Мышление",
        backTitle: "Мышление",
        backText: [
          "Даже всего после одной ночи посредственного сна обычно первым даёт об этом знать мозг — и поэтому вы чувствуете себя дезориентированным и вялым после всего лишь одной ночи непосредственного сна. Это потому, что у мозга есть много важных задач, касающихся заботы о себе, которые нужны выполнить, пока вы спите.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/load.json"),
      },
      business: {
        text: "Недосыпание снижает активность зоны мозга ответственной за принятие решений до 60%, что затрудняет процесс принятия решений.",
        title: "Сложно принимать решения",
        backTitle: "Сложно принимать решения",
        backText: [
          "Исследование университета Калифорнии в Беркли показало, что у людей, испытывающих недосыпание, уровень активности в префронтальной коре мозга (ответственной за принятие решений, регуляцию поведения и анализ информации) снижается до 60%. Это означает, что люди с недосыпанием могут испытывать трудности в принятии решений из-за ухудшения работы этой области мозга.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/first.json"),
      },
    },
    {
      id: 2,
      user: {
        text: "Люди, которые недостаточно спят, чаще бывают в дурном расположении духа: испытывают гнев, недовольство, раздражительность, грусть",
        title: "Настроение",
        backTitle: "Настроение",
        backText: [
          "Люди, которые недостаточно спят, чаще бывают в дурном расположении духа: испытывают гнев, недовольство, раздражительность, грусть. Это потому, что глубокий сон – сильная терапия, которая успокаивает и приводит в равновесие мозг, а следовательно и наши эмоции. Согласно исследованиям – страдающие от недосыпа люди чувствуют себя более одинокими и более склонны избегать тесного контакта с другими, подобно людям с социальной тревожностью.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/anger.json"),
      },
      business: {
        text: "Недосыпание на 30% снижает мотивацию сотрудников, что может привести к трудностям в работе и снижению производительности.",
        title: "Снижение мотивации",
        backTitle: "Снижение мотивации",
        backText: [
          "Недостаток сна может существенно снизить мотивацию сотрудников. Например, исследование, проведенное Академией наук США, показало, что недостаток сна приводит к снижению мотивации на 30%. Это означает, что сотрудники, которые не высыпаются, могут испытывать затруднения с мотивацией к работе и задачам.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/second.json"),
      },
    },
    {
      id: 3,
      user: {
        text: "Некачественный сон соотносится с риском сердечных заболеваний и основных их причин",
        title: "Сердце",
        backTitle: "Сердце",
        backText: [
          "Кардиологическая ассоциация сегодня рекомендует врачам рассматривать сон наряду с другими факторами (такими как режим питания и физические упражнения, артериальное давление и уровень сахара в крови) в качестве основных показателей...",
          `подверженности пациента риску сердечных заболеваний.<br></br> Это связано с тем, что недостаточный и некачественный сон соотносится с повышенным риском сердечных заболеваний и основных их причин, таких как ожирение, диабет 2-го типа и повышенное артериальное давление`,
        ],
        size: "small",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/heart.json"),
      },
      business: {
        text: "до 30% снижается производительность у сотрудников из-за недостатка сна",
        title: "Низкая продуктивность",
        backTitle: "Низкая продуктивность",
        backText: [
          "Недосыпание может значительным образом повлиять на продуктивность сотрудников. Например, исследование, проведенное Национальным институтом здоровья США, показало, что недостаток сна у сотрудников приводит к снижению производительности на 25-30%. Это означает, что...",
          "сотрудники, страдающие от недосыпания, могут быть менее эффективными и производительными на рабочем месте",
        ],
        size: "small",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/third.json"),
      },
    },
    {
      id: 4,
      user: {
        text: "Mеньше сна означает меньше тестостерона у мужчин и женщин, что приводит к снижению интереса к сексу и эректильной дисфункции",
        title: "Секс",
        backTitle: "Секс",
        backText: [
          `Не будем тянуть резину: меньше сна означает меньше тестостерона у мужчин и женщин, что приводит к снижению интереса к сексу (а сам секс случается реже и становится менее приятным) и эректильной дисфункции.<br></br>У мужчин, которые спят 5 и менее часов за ночь, по сравнению с теми, кто спит восемь и более чаще всего уровень тестерона такой же как у мужчин на 10 лет старше.`,
          `Это потому, что небольшого количества плохого сна – даже всего одной недели – достаточно, чтобы состарить вас на десятилетие, когда дело касается выработки тестостерона.`,
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/sex.json"),
      },
      business: {
        text: "Недосыпание уменьшает концентрацию сотрудников до 30%, таким образом влияет на способность сосредоточенно работать",
        title: "Слабая концентрация",
        backTitle: "Слабая концентрация",
        backText: [
          "Исследование Университета Пенсильвании показало, что недосыпание может привести к снижению уровня концентрации сотрудников на 20-30%. Таким образом, недостаток сна может существенно влиять на способность сосредоточенно работать и выполнить задачи эффективно.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/fourth.json"),
      },
    },
    {
      id: 5,
      user: {
        text: `Хроническая нехватка
сна ускоряет ваши биологические часы и это отражается на вашем лице
`,
        title: "Старение",
        backTitle: "Старение",
        backText: [
          "Хроническая нехватка сна ускоряет ваши биологические часы, и это отражается на вашем лице. Тусклая кожа, мелкие морщинки и темные круги под глазами – все это результат недосыпания. При недосыпе ваше тело выделяет больше кортизола, который может приводить к расщеплению коллагена кожи, замедляется выработку...",
          "соматотропина – гормона роста человека, топлива для естественного процесса восстановления и омоложения тканей, пока вы спите",
        ],
        size: "small",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/old.json"),
      },
      business: {
        text: "Недостаток сна может привести к снижению памяти на 20-30%",
        title: "Плохая память",
        backTitle: "Плохая память",
        backText: [
          "Недостаток сна может увеличить риск забывания информации из-за нарушения нормальных процессов работы мозга, связанных с памятью. Исследования показывают, что недосыпание увеличивает риск забывания на 20-30% по сравнению с выспавшимися людьми.",
        ],
        size: "small",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/fifth.json"),
      },
    },
    {
      id: 6,
      user: {
        text: "Нехватка сна вызывает цепь изменений в вашем теле, которые приводят к увеличению веса: без всяких изменений режима питания и тренировок",
        title: "Вес",
        backTitle: "Вес",
        backText: [
          `Исследователи из уз Университета Колорадо обнаружили, что всего через неделю сна по пять часов в сутки участники исследований набрали в среднем по килограмму весу без всяких изменений режима питания и тренировок.Нехватка сна вызывает цепь изменений в в вашем теле, которые приводят к увеличению веса:
          <br></br>
          <span style="margin-right: 5px">-</span>Сбой в гормонах, связанных с чувством голода, включая лептин, подавляющий аппетит...`,
          `и грелин, который его усиливает. Недосыпание снижает уровень лептина и увеличивает концентрацию грелина, что заставляет вас больше чувствовать голод и меньше насыщения, а еще изменяет продукты на которые вас тянет – и как вы могли догадаться, это не листья салата<br></br><ul><li><span style="margin-right: 5px">-</span>Плохой сон вреден для здоровья кишечника. Нарушение сна и циркадного ритма могут изменить ваш микробиом...`,
          `«командный центр» пищеварительной системы, который не только расщепляет пищу, но и вырабатывает гормоны и является “домом” для большей части иммунитета <br></br><span style="margin-right: 5px">-</span>Нехватка сна заставляет поджелудочную железу выделять инсулин, что увеличивает накопление жира и повышает риск диабета 2-го типа`,
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/weight.json"),
      },
      business: {
        text: "У людей с хроническим недосыпанием увеличивается риск развития различных заболеваний на 50-70%",
        title: "Проблемы со здоровьем",
        backTitle: "Проблемы со здоровьем",
        backText: [
          "Недостаток сна может оказывать серьезное влияние на здоровье. Например, исследование, проведенное Всемирной организацией здравоохранения, показало, что люди, страдающие от хронического недосыпания, имеют увеличенный риск развития различных заболеваний, таких как сердечно-сосудистые заболевания, диабет, а также ухудшение иммунитета. В целом, недостаток сна может увеличить риск заболеваний на 50-70%.",
        ],
        size: "big",
        isOpen: false,
        partOfText: 0,
        animation: require("@/assets/animation/sixth.json"),
      },
    },
  ];

  slider = false;

  toggleCard(card) {
    card.isOpen = !card.isOpen;
  }

  showMoreText(parts, card) {
    if (card.partOfText < parts - 1) {
      card.partOfText++;
    } else if (card.partOfText === parts - 1) {
      card.partOfText = 0;
    }

    return;
  }

  created() {
    if (window.innerWidth < 900) {
      this.slider = true;
    }
  }
}
</script>

<style scoped lang="scss">
video {
  position: relative;
  left: -90px;
  bottom: -25px;
}
/* .card-list__item {
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  @media (max-width: 900px) {
    transition: initial;
    transform-style: initial;
  }
} */

/* .card-list__item.open {
  transform: rotateY(180deg);

  @media (max-width: 900px) {
    transform: initial;
  }
} */

.card-list {
  &__container {
    height: 100%;
    /* backface-visibility: hidden; */
    display: flex;
    flex-direction: column;
  }
  &__title {
    padding-top: 40px;
    padding-left: 48px;
    padding-right: 48px;

    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.44px;

    color: #fff;

    &-business {
      color: #000;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    padding: 0;

    font-family: "Gilroy";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    color: #007aff;

    background: none;
    border: none;

    cursor: pointer;

    z-index: 2;
  }

  &__arrow {
    margin-right: 8px;
  }

  &__animation {
    position: absolute;
    /* margin-top: auto; */
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    padding: 0 12px;
    gap: 16px 1.1%;
  }

  &__item {
    box-sizing: border-box;
    background: #fff;
    border-radius: 30px;
    padding: 14px 16px 0 16px;
    position: relative;

    height: 440px;
    &-big {
      width: 38.2%;
      overflow: hidden;

      .card-list__animation {
        bottom: 0;
        left: 0;
        /* div {
          width: 100% !important;
          max-width: initial !important;
        } */
      }

      &-business {
        .card-list__animation {
          bottom: 22px;
          left: 58px;
          div {
            width: 29vw !important;
            max-width: 417px !important;
          }
        }
      }
    }

    &-small {
      width: 21.4%;

      .card-list__animation {
        bottom: 0;
        left: -37%;
        div {
          width: 37vw !important;
          max-width: 535px !important;
        }
      }

      &-business {
        .card-list__animation-3 {
          bottom: 0;
          left: -22%;
          div {
            width: 30vw !important;
            max-width: 431px !important;
          }
        }

        .card-list__animation-5 {
          bottom: -10px;
          left: 10px;
          div {
            width: 20vw !important;
            max-width: 288px !important;
          }
        }
      }
    }

    &-title {
      font-family: "Gilroy";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    }

    &-text {
      margin-top: 5px;

      font-family: "Gilroy";
      font-size: 112%;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      max-height: 75%;
      overflow: hidden;
      /* transition: max-height 0.5s ease; */
    }
  }

  @media (max-width: 900px) {
    &__title {
      padding: 0 25px;

      font-size: 28px;
      line-height: 120%;
      letter-spacing: -0.84px;

      &-business {
        padding-left: 15px;
      }
    }

    &__slider {
      margin-top: 23px;
      padding: 0;
      padding-left: 8px;
      padding-bottom: 45px;
    }

    &__item {
      padding: 0;
      background: inherit;

      &-big {
        .card-list__animation {
          overflow: hidden;
          width: calc(100% - 8px);
          div {
            width: 540px !important;
            max-width: initial;
            position: relative;
            left: 50%;
            transform: translate(-50%, 0);
          }
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
        }

        .card-list__animation-1 {
          bottom: 40px;
          /* left: -16px; */
        }

        &-business {
          .card-list__animation {
            bottom: 40px;
            left: 0;
            div {
              width: 100% !important;
              /* left: 0%; */
              bottom: 0;
            }
          }
        }
      }

      &-small {
        .card-list__animation {
          overflow: hidden;
          width: calc(100% - 8px);
          left: 0;
          z-index: 1;

          div {
            width: 540px !important;
            max-width: initial;
            position: relative;
            left: 50%;
            transform: translate(-50%, 0);
          }
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
        }

        &-business {
          .card-list__animation-3 {
            bottom: 40px;
            left: 0;
            div {
              width: 391px !important;
              /* left: 0; */
            }
          }

          .card-list__animation-5 {
            bottom: 40px;
            left: 0;
            div {
              width: 267px !important;
              /* left: 0; */
            }
          }
        }
      }

      &-title {
        font-size: 18px;
        line-height: 140%;
      }

      &-text {
        color: #333;

        font-size: 16px;
        line-height: 138%;

        z-index: 2;
      }
    }

    &__btn {
      font-size: 12px;
      line-height: 140%;

      bottom: 32px;
    }

    &__container {
      padding: 16px 16px 0px 16px;
      margin-right: 8px;
      background: #fff;
      border-radius: 30px;
      height: 440px;
      box-sizing: border-box;
    }
  }
}
</style>

<style lang="scss">
.card-list {
  .agile__dots {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .agile__dot {
    justify-content: center;

    &:not(:first-child) {
      margin-left: 4px;
    }
    &--current {
      button {
        background: #fff !important;
        border-radius: 10px !important;
        width: 4px !important;
      }
    }
    button {
      border: none;
      background: #000;
      border-radius: 10px;
      width: 4px;
      height: 4px;
      padding: 0;
    }
  }
}
</style>
