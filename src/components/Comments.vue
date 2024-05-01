<template>
  <div class="comments">
    <agile :slidesToShow="mobile ? 1.05 : 3" :navButtons="!mobile">
      <div class="comments__item" v-for="card in cards[page]" :key="card.id">
        <div class="comments__wrapper">
          <div class="comments__header">
            <p class="comments__name">{{ card.name }}</p>
            <!-- <p class="comments__date">{{ card.date }}</p> -->
          </div>
          <i
            v-for="(star, index) in card.stars"
            :key="index"
            class="icon-star comments__star"
          ></i>
          <p class="comments__text">
            {{ card.text[card.partOfText] }}
          </p>
          <button
            v-if="card.text.length > 1"
            @click="showMoreText(card.text.length, card)"
            class="comments__more"
          >
            {{
              card.partOfText === card.text.length - 1
                ? "В начало"
                : "Читать далее"
            }}
          </button>
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
export default class Comments extends Vue {
  @Prop({ type: String, default: "user" }) page;
  nextBtn = require("@/assets/img/icons/nextArrow.svg");
  prevBtn = require("@/assets/img/icons/prevArrow.svg");
  mobile = false;
  cards = {
    user: [
      {
        id: 2,
        name: "Даниил П",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Сон это не обязанность, это бесплатный кайф которым мы награждены природой. Относясь ко сну с уважением, то есть выполняя ряд простых условий, от него получаешь в разы больше. В общем классное дело делаете, я точно с вами.",
          /* "новые данные, человеческое сознание создает невиданные чудеса – мы видим сны. Кто-то",
          "видит страшные сны, кто видит настоящие приключенческие киноленты, кто-то во сне летает, кто-то путешес", */
        ],
        partOfText: 0,
      },
      {
        id: 1,
        name: "Анастасия И",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Что может быть лучше, чем спать и получать возможность выиграть за это призы?)",
        ],
        partOfText: 0,
      },

      {
        id: 3,
        name: "Слава К",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Только когда я увидел визуально как плохо я сплю за последние 2 месяца я понял, что нужно менять отношение ко сну.",
        ],
        partOfText: 0,
      },
      {
        id: 4,
        name: "Сергей П",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Самое залипательное здесь - это когда с утра заходишь в приложение и идет начисление подушек и вот эти последние секунды с замедлением… 85, 86 илииии 87))",
        ],
        partOfText: 0,
      },
    ],
    business: [
      {
        id: 1,
        name: "Анастасия И",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Классное приложение! Сон — необходимая часть жизни каждого человека. Наша жизнь разделена на две части — день и ночь. Днём мы действуем, учимся, занимаемся спортом, отдыхаем, общаемся с друзьями, получаем огромное количество новой информации.",
        ],
        partOfText: 0,
      },
      {
        id: 2,
        name: "Даниил П",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Кроме того, когда тело лежит неподвижно, глаза закрыты, а мозг активно переваривает",
          "новые данные, человеческое сознание создает невиданные чудеса – мы видим сны. Кто-то",
          "видит страшные сны, кто видит настоящие приключенческие киноленты, кто-то во сне летает, кто-то путешес",
        ],
        partOfText: 0,
      },
      {
        id: 3,
        name: "Слава К",
        date: "12 сен 2023",
        stars: 5,
        text: [
          "Классное приложение! Сон — необходимая часть жизни каждого человека. Наша жизнь разделена на две части — день и ночь. Днём мы действуем, учимся, занимаемся спортом, отдыхаем, общаемся с друзьями",
        ],
        partOfText: 0,
      },
    ],
  };

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
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.comments {
  width: 78%;
  margin: 0 auto;
  padding-bottom: 80px;

  &__more {
    position: absolute;
    bottom: 2vw;
    padding: 0;
    background: none;
    border: none;

    cursor: pointer;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: #007aff;

    &:hover {
      opacity: 0.5;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
  }

  &__name {
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  &__date {
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #333;
  }

  &__star {
    display: inline-block;
    color: #f3c550;

    &:not(:first-child) {
      margin-right: 3px;
    }

    &:before {
      margin: 0;
    }
  }

  &__text {
    margin-top: 5px;

    font-family: "Gilroy", "Roboto";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #333;

    max-height: 225px;
  }

  &__wrapper {
    position: relative;
    margin: 0 auto;
    padding: 25px;
    box-sizing: border-box;
    background: #fff;
    height: 371px;
    max-width: 96%;

    border-radius: 40px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 45px;

    &__wrapper {
      padding: 24px 16px;
      min-height: 300px;
      height: 300px;
    }

    &__name {
      font-size: 16px;
      line-height: 140%;
    }

    &__date {
      font-size: 16px;
      line-height: 140%;
    }

    &__header {
      margin-bottom: 7px;
    }

    &__text {
      color: #333;
      font-size: 16px;
      line-height: 22.5px;
    }

    &__more {
      font-size: 16px;
      line-height: 140%;

      bottom: 7vw;
    }
  }
}
</style>

<style lang="scss">
.comments {
  .agile__nav-button--prev {
    position: absolute;
    top: 50%;
    left: -10.5%;
    border: none;
    background: none;
    transform: translate(0, -20%);

    cursor: pointer;
  }

  .agile__nav-button--next {
    position: absolute;
    top: 50%;
    right: -11%;
    border: none;
    background: none;
    transform: translate(0, -20%);

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
