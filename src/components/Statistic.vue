<template>
  <div class="statistic">
    <ul class="statistic__list-text">
      <li
        class="statistic__item-text"
        v-for="statistic in statistics"
        :key="statistic.id"
      >
        <img
          v-if="statistic.img"
          class="statistic__star"
          :src="statistic.img"
          alt="star"
        />
        <div class="statistic__wrapper">
          <p class="statistic__text-value">{{ statistic.value }}</p>
          <p class="statistic__text-name">{{ statistic.text }}</p>
        </div>
      </li>
    </ul>
    <ul class="statistic__list-links">
      <li class="statistic__item-links" v-for="link in links" :key="link.id">
        <a class="statistic__link" :href="link.href" target="_blank"
          ><img :src="link.img"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Statistic extends Vue {
  statistics = [
    {
      id: 1,
      value: "4.9",
      img: require("@/assets/img/star-smile.png"),
      text: "Рейтинг",
    },
    {
      id: 2,
      value: "100 М+",
      text: "Загрузок",
    },
    {
      id: 3,
      value: "240 k",
      text: "Отзывов",
    },
  ];

  links = [
    {
      id: 1,
      img: require("@/assets/img/apple.png"),
      href: "",
    },
    {
      id: 2,
      img: require("@/assets/img/google.png"),
      href: "",
    },
  ];
}
</script>

<style scoped lang="scss">
.statistic {
  display: flex;
  justify-content: space-between;
  padding: 40px 36px 0 43px;

  &__wrapper {
    width: 100%;
  }

  &__link {
    img {
      width: 212px;
      height: auto;
    }
  }

  &__star {
    width: 5vw;
    height: 5vw;
    margin-right: 2.5vw;
  }

  &__list {
    &-text {
      display: flex;
      padding: 16px 0 19px 0;
      flex-grow: 1;
    }
    &-links {
      display: flex;
      padding: 16px 0 19px 0;
    }
  }

  &__item {
    &-text {
      display: flex;
      width: 33.33%;

      &:not(:first-child) {
        text-align: center;
      }
    }

    &-links {
      &:last-child {
        margin-left: 16px;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__text {
    &-value {
      font-family: "Gilroy";
      font-size: 4.5vw;
      font-style: normal;
      font-weight: 500;
      line-height: 77%;
      letter-spacing: -1.28px;

      color: #fff;
    }

    &-name {
      font-family: "Gilroy";
      font-size: 1.3vw;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      color: #fff;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0 8px;

    &__list {
      &-text {
        padding: 0;
      }

      &-links {
        padding: 0;
        padding-top: 40px;
        padding-left: 8px;
        padding-right: 8px;
      }
    }

    &__link {
      img {
        width: 160px;
        height: 49px;
      }
    }

    &__item {
      &-text {
        text-align: center;
      }

      &-links {
        &:last-child {
          margin-left: auto;
        }
      }
    }

    &__text {
      &-value {
        font-size: 28px;
        line-height: 120%;
        letter-spacing: -0.84px;
      }

      &-name {
        font-size: 16px;

        line-height: 140%;
      }
    }

    &__star {
      display: none;
    }
  }
}
</style>
