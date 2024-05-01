<template>
  <div :class="`services services-${page}`">
    <agile
      :slidesToShow="mobile ? 1.07 : 1"
      :navButtons="mobile ? false : true"
      :dots="mobile && page === 'business'"
      :fade="!mobile"
    >
      <div class="services__item" v-for="card in cards" :key="card.id">
        <div class="services__wrapper">
          <div class="services__container">
            <div :style="mobile ? 'width: 70%; margin: 0 auto;' : ''">
              <p :class="`services__info services__info-${card.id}`">
                {{ card.info }}
              </p>
              <h3
                class="services__title"
                v-html="mobile ? card.title.mobile : card.title.desktop"
              ></h3>
              <p class="services__text">{{ card.text }}</p>
            </div>
          </div>
          <img
            class="services__img"
            width="585"
            :src="mobile ? card.img.mobile : card.img.desktop"
            :alt="card.info"
          />
        </div>
      </div>
      <template slot="prevButton">
        <img :src="prevBtn" />
      </template>
      <template slot="nextButton">
        <img :src="nextBtn" />
      </template>
    </agile>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import { VueAgile } from "vue-agile";

@Component({
  components: {
    agile: VueAgile,
  },
})
export default class Services extends Vue {
  @Prop({ type: String, default: "user" }) page;

  nextBtn = require("@/assets/img/icons/nextArrow.svg");
  prevBtn = require("@/assets/img/icons/prevArrow.svg");
  mobile = false;

  get cards() {
    return this.page === "user"
      ? [
          {
            id: 5,
            info: "библиотека",
            title: {
              mobile: "Статьи и рекомендации",
              desktop: "Статьи и рекомендации",
            },
            text: "Собрали все необходимые материалы, чтобы повысить осведомленность в области сна - а еще мотивируем и награждаем за новые знания",
            img: {
              mobile: require("@/assets/img/services/Hello-4.png"),
              desktop: require("@/assets/img/services/img-4.png"),
            },
          },
          {
            id: 3,
            info: "визуализация",
            title: {
              mobile: "Непрерывность сна",
              desktop: "Непрерывность сна",
            },
            text: "“Мы можем соединить точки, только глядя назад” - мы решили пойти дальше и наглядно продемонстрировать как вы спите на дистанции",
            img: {
              mobile: require("@/assets/img/services/Hello-3.png"),
              desktop: require("@/assets/img/services/img-3.png"),
            },
          },
          {
            id: 4,
            info: "дневник",
            title: {
              mobile: "Дневник сна",
              desktop: "Дневник сна",
            },
            text: "Занимаясь улучшением сна — очень важно вести дневник. Он позволяет отследить динамику сна, факторов на него влияющих и оценить их относительно объективно",
            img: {
              mobile: require("@/assets/img/services/Hello.png"),
              desktop: require("@/assets/img/services/img.png"),
            },
          },
          {
            id: 1,
            info: "аналитика",
            title: {
              mobile: `Подробная аналитика`,
              desktop: "Подробная аналитика",
            },
            text: "Для любителей цифр и аналитики, сделали удобные и детальные дэшборды, с помощью которых можно отслеживать улучшение сна",
            img: {
              mobile: require("@/assets/img/services/Hello-2.png"),
              desktop: require("@/assets/img/services/img-2.png"),
            },
          },
          /* {
      id: 2,
      info: "Социализация",
      title: {
        mobile: "Турниры с друзьями и коллегами",
        desktop: "Турниры с друзьями и коллегами",
      },
      text: "Спать конечно хорошо, но лучше с друзьями или коллегами",
      img: {
        mobile: require("@/assets/img/services/Hello-2.png"),
        desktop: require("@/assets/img/services/img-2.png"),
      },
    }, */
        ]
      : [
          {
            id: 6,
            info: "призы",
            title: {
              mobile: "Розыгрыши",
              desktop: "Розыгрыши",
            },
            text: "С нас все игровые механики и розыгрыши. C вас призы за улучшение сна сотрудников: мерч, дополнительные дни отпуска или что-то на ваше усмотрение.",
            img: {
              mobile: require("@/assets/img/services/Hello-6.png"),
              desktop: require("@/assets/img/services/img-6.png"),
            },
          },
          {
            id: 2,
            info: "победы",
            title: {
              mobile: "Турниры",
              desktop: "Турниры",
            },
            text: "Как насчет корпоративных турниров по сну?) Сотрудники могут участвовать в сонных соревнованиях всей компании или внутри отдела.",
            img: {
              mobile: require("@/assets/img/services/Hello-5.png"),
              desktop: require("@/assets/img/services/img-5.png"),
            },
          },
          {
            id: 5,
            info: "библиотека",
            title: {
              mobile: "Статьи и рекомендации",
              desktop: "Статьи и рекомендации",
            },
            text: "Собрали все необходимые материалы, чтобы повысить осведомленность в области сна - а еще мотивируем и награждаем за новые знания",
            img: {
              mobile: require("@/assets/img/services/Hello-4.png"),
              desktop: require("@/assets/img/services/img-4.png"),
            },
          },
          {
            id: 1,
            info: "аналитика",
            title: {
              mobile: `Подробная аналитика`,
              desktop: "Подробная аналитика",
            },
            text: "Для любителей цифр и аналитики, сделали удобные и детальные дэшборды, с помощью которых можно отслеживать улучшение сна",
            img: {
              mobile: require("@/assets/img/services/Hello-2.png"),
              desktop: require("@/assets/img/services/img-2.png"),
            },
          },
          {
            id: 3,
            info: "визуализация",
            title: {
              mobile: "Непрерывность сна",
              desktop: "Непрерывность сна",
            },
            text: "“Мы можем соединить точки, только глядя назад” - мы решили пойти дальше и наглядно продемонстрировать как вы спите на дистанции",
            img: {
              mobile: require("@/assets/img/services/Hello-3.png"),
              desktop: require("@/assets/img/services/img-3.png"),
            },
          },
          {
            id: 4,
            info: "дневник",
            title: {
              mobile: "Дневник сна",
              desktop: "Дневник сна",
            },
            text: "Занимаясь улучшением сна — очень важно вести дневник. Он позволяет отследить динамику сна, факторов на него влияющих и оценить их относительно объективно",
            img: {
              mobile: require("@/assets/img/services/Hello.png"),
              desktop: require("@/assets/img/services/img.png"),
            },
          },
        ];
  }

  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.services {
  width: 98%;
  margin: 0 auto;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 40px;

    padding-left: 10.7vw;
  }

  &__img {
    width: 585px;
    height: auto;
    border-bottom-right-radius: 40px;
  }

  &__title {
    margin-top: 16px;

    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.44px;
  }

  &__info {
    padding: 5px 12px;
    width: fit-content;

    font-family: "GilroySemibold";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    border-radius: 40px;

    &-1 {
      background: #96f4f5;
    }

    &-2 {
      background: #b8ffa6;
    }

    &-3,
    &-6 {
      background: #ffdcb4;
    }

    &-4 {
      background: #fdc2e5;
    }

    &-5 {
      background: #eacfff;
    }
  }

  &__text {
    margin-top: 16px;

    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    color: #333;
  }

  &__container {
    display: flex;
    align-items: center;
    width: 45%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 8px;

    &-business {
      .services__text {
        text-align: left;
        width: 100%;
      }

      .services__title {
        text-align: left;
      }

      .services__info {
        margin: 0;
      }
    }

    &__wrapper {
      margin-right: 12px;
      padding: 0;
      padding-top: 32px;
      display: flex;
      flex-direction: column;
      height: 640px;
      overflow: hidden;
      box-sizing: border-box;
    }

    &__info {
      margin: 0;
      padding: 3px 12p;
    }

    &__title {
      font-size: 26px;
      line-height: 31px;
      letter-spacing: -0.01em;

      text-align: left;
    }

    &__text {
      width: 100%;
      margin: 0 auto;
      margin-top: 2px;

      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;

      text-align: left;
    }

    &__container {
      width: 100%;
    }

    &__img {
      width: auto;
      height: 380px;
      display: block;
      margin: 0 auto;
      border-radius: initial;
    }
  }
}
</style>

<style lang="scss">
.services {
  .agile__nav-button--prev {
    position: absolute;
    top: 51%;
    left: 1.5%;
    border: none;
    background: none;
    transform: translate(0, -51%);

    cursor: pointer;
  }

  .agile__nav-button--next {
    position: absolute;
    top: 51%;
    right: 1.5%;
    border: none;
    background: none;
    transform: translate(0, -51%);

    cursor: pointer;
  }

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
