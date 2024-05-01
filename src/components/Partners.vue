<template>
  <div :class="`partners partners-${page}`">
    <h2 v-if="page === 'business'" class="partners__title">Партнеры</h2>
    <agile
      :slidesToShow="4"
      :navButtons="true"
      :unagile="false"
      :dots="false"
      class="partners__slider"
    >
      <div class="partners__item" v-for="card in cards[page]" :key="card.id">
        <div class="partners__wrapper">
          <img class="partners__img" :src="card.img" :alt="card.name" />
        </div>
      </div>
      <template slot="prevButton">
        <img :src="prevBtn" />
      </template>
      <template slot="nextButton">
        <img :src="nextBtn" />
      </template>
    </agile>
    <div class="partners__list">
      <div
        class="partners__item-list"
        v-for="card in cards[page]"
        :key="card.id"
      >
        <div class="partners__wrapper">
          <img class="partners__img" :src="card.img" :alt="card.name" />
        </div>
      </div>
    </div>
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
export default class Partners extends Vue {
  @Prop({ type: String, default: "user" }) page;

  nextBtn = require("@/assets/img/icons/nextArrow.svg");
  prevBtn = require("@/assets/img/icons/prevArrow.svg");
  cards = {
    user: [
      {
        id: 1,
        img: require("@/assets/img/icons/yasno.svg"),

        name: "ясно",
      },
      {
        id: 2,
        img: require("@/assets/img/icons/askona.svg"),

        name: "askona",
      },
      {
        id: 3,
        img: require("@/assets/img/icons/blueSleep.svg"),
        name: "blue sleep",
      },
      {
        id: 4,
        img: require("@/assets/img/icons/sberbank.svg"),
        name: "sberbank",
      },
    ],
    business: [
      {
        id: 1,
        img: require("@/assets/img/icons/qiwi.svg"),
        name: "qiwi",
      },
      {
        id: 2,
        img: require("@/assets/img/icons/lukoil.svg"),
        name: "lukoil",
      },
      {
        id: 3,
        img: require("@/assets/img/icons/sberbank.svg"),
        name: "sberbank",
      },
      {
        id: 4,
        img: require("@/assets/img/icons/alfabank.svg"),
        name: "alfabank",
      },
    ],
  };
}
</script>

<style lang="scss">
.partners {

    /* &-user {
        .agile__slides--regular {
            display: flex;
        }
    } */


  .agile__nav-button--prev {
    position: absolute;
    top: 10%;
    left: -10.5%;
    border: none;
    background: none;
    transform: translate(0, -20%);

    cursor: pointer;
  }

  .agile__nav-button--next {
    position: absolute;
    top: 10%;
    right: -10%;
    border: none;
    background: none;
    transform: translate(0, -20%);

    cursor: pointer;
  }
}
</style>

<style scoped lang="scss">
.partners {
  width: 78%;
  margin: 0 auto;
  margin-top: 63px;

  &-business {
    margin-top: 94px;

    .partners__title {
      margin-left: 17px;
      margin-bottom: 9px;

      font-family: "Gilroy";
      font-size: 24px;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  &__wrapper {
    margin: 0 auto;
  }

  &__img {
    display: block;
    margin: 0 auto;
  }

  &__list {
    display: none;
  }

  @media (max-width: 900px) {
    width: fit-content;
    margin-top: 27px;

    &-business {
      margin-top: 57px;

      .partners__title {
        margin-left: 24px;

        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0 24px;
    }

    &__slider {
      display: none;
    }

    &__img {
      width: 140px;
      height: 80px;
    }
  }
}
</style>
