<template>
  <div class="business-banner-banner">
    <div
      class="business-banner__wrapper"
      :style="`padding-top: ${height ? `${height - 418}px` : ''}`"
    >
      <h2 class="business-banner__title">Повышаем эффективность сотрудников</h2>
      <p class="business-banner__description">
        Переплаты за неэффективность невыспавшихся сотрудников составляют 3,5
        трлн рублей в&nbsp;год&nbsp;по&nbsp;всей России
      </p>
      <button class="business-banner__btn" @click="openModal">
        Повысить эффективность
      </button>
    </div>
    <ul class="business-banner__list">
      <li class="business-banner__item" v-for="info in infos" :key="info.id">
        <p class="business-banner__number">
          {{ mobile ? info.value[1] : info.value[0]
          }}<span class="business-banner__add" v-if="info.add && !mobile">{{
            info.add
          }}</span>
        </p>
        <p class="business-banner__text">{{ info.text }}</p>
      </li>
    </ul>
    <p class="business-banner__link">
      В недосыпе призналась почти половина работающих россиян, показало
      исследование
      <a
        href="https://nafi.ru/analytics/rossiyskaya-ekonomika-teryaet-3-5-trln-rubley-v-god-iz-za-nevysypayushchikhsya-sotrudnikov/#:~:text=%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D1%8B%20%D0%9D%D0%90%D0%A4%D0%98%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%20%D0%BF%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80,%D0%B2%20%D0%B3%D0%BE%D0%B4%20%D0%BF%D0%BE%20%D0%B2%D1%81%D0%B5%D0%B9%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8"
        target="_blank"
        >Аналитического центра НАФИ<i class="icon-link"></i
      ></a>
    </p>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class BusinessBanner extends Vue {
  height = "";
  mobile = false;

  infos = [
    {
      id: 1,
      value: ["48%","48%"],
      add: "",
      text: "Недосып ощущают 48% россиян четыре дня в неделю, показало исследование НАФИ",
    },
    {
      id: 2,
      value: ["291", "291 Млрд"],
      add: "миллиард рублей в месяц",
      text: "Переплаты за неэффективность невыспавшихся сотрудников составляют в среднем 291 млрд руб. в месяц",
    },
    {
      id: 3,
      value: ["51–75%","51–75%"],
      add: "",
      text: "Каждый третий отмечает, что в такие дни эффективность его работы снижается на 51–75%",
    },
  ];

  openModal() {
    this.$emit("switchModal");
  }

  mounted() {
    if (window.innerWidth < 900) {
      this.height = window.innerHeight;
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.business-banner {
  &__wrapper {
    padding-top: 64px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    min-height: 632px;
    box-sizing: border-box;
  }

  &__number {
    font-family: "Gilroy";
    font-size: 64px;
    font-weight: 500;
    line-height: 64px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  &__text,
  &__add,
  &__link {
    font-family: "Gilroy";
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__add {
    max-width: 130px;
    margin-left: 19px;
    display: inline-block;
    top: -6px;
    position: relative;
  }

  &__text {
    margin-top: 15px;
    color: #333;
  }

  &__link {
    margin-top: 40px;
    display: block;
    text-align: center;
    color: #333;

    a {
      text-decoration: underline;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  &__title {
    max-width: 562px;
    padding-left: 48px;

    font-family: "GilroySemibold";
    font-size: 76px;
    font-weight: 500;
    line-height: 68px;
    letter-spacing: -0.01em;
    text-align: left;

    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.25);
  }

  &__description {
    margin-top: 24px;
    padding-left: 48px;
    max-width: 700px;

    font-family: "Gilroy";
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__list {
    padding-top: 32px;
    display: flex;
    width: 78%;
    margin: 0 auto;
    gap: 80px;
  }

  &__item {
    max-width: 320px;
  }

  &__value &__item {
    display: flex;
  }

  &__btn {
    padding: 23px 56px;
    align-self: center;
    margin-top: auto;

    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    color: #fff;

    border-radius: 40px;
    border: none;
    background: #007aff;

    box-shadow: 0px -1px 1px 0px #2ad9ff, 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);

    cursor: pointer;

    &:hover {
      background: rgba(45, 145, 255, 1);

      box-shadow: 0px 3px 3px 0px rgba(19, 0, 133, 0.6);
    }
  }

  @media (max-width: 900px) {
    &__wrapper {
      padding-top: 298px;
    }

    &__list {
      flex-wrap: wrap;
      padding-top: 0;
      width: 90%;
      gap: 19px;
    }

    &__number {
      font-size: 32px;
      line-height: 38px;
      letter-spacing: -0.03em;
      text-align: left;
    }

    &__link {
      margin: 0 auto;
      margin-top: 40px;
      width: 90%;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
    }

    &__text,
    &__add {
      font-size: 16px;
      line-height: 22px;
      text-align: left;
    }

    &__text {
      margin-top: 8px;
    }

    &__add {
      margin-left: 12px;
    }

    &__btn {
      margin-top: 24px;
      padding: 14px 56px;
      width: 92%;

      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
    }

    &__title {
      max-width: initial;
      padding-left: 18px;

      font-family: "Gilroy";
      font-size: 36px;
      line-height: 36px;
      letter-spacing: -0.02em;
      text-align: left;
    }

    &__description {
      margin-top: 15px;
      padding-left: 18px;

      font-size: 18px;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}
</style>
