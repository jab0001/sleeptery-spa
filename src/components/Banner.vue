<template>
  <div :class="`banner banner-${page}`">
    <div class="banner__wrapper">
      <div class="banner__container">
        <div>
          <h3 class="banner__title">{{ cards[number].title }}</h3>
          <p class="banner__text">{{ cards[number].text }}</p>
          <a class="banner__rout" :href="cards[number].href">Подробнее</a>
        </div>
      </div>
      <div
        class="banner__animation-wrapper"
        :style="page === 'business' ? 'width: 600px; height: 440px' : ''"
      >
        <lottie
          class="banner__animation"
          ref="bannerAnimation"
          :options="
            mobile
              ? cards[number].animation.mobile
              : cards[number].animation.desktop
          "
          :height="440"
          :width="600"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Banner extends Vue {
  @Prop({ type: Number, default: 0 }) number;
  @Prop({ type: String, default: "user" }) page;

  mobile = false;

  cards = [
    {
      title: "Для бизнеса",
      text: "Низкая продуктивность, сложность в принятии решений: сколько составляют переплаты за неэффективность невыспавшихся сотрудников?",
      href: "business",
      animation: {
        mobile: {
          animationData: require("@/assets/animation/desktop-biz.json"),
          /* loop: true, */
          autoplay: true,
        },
        desktop: {
          animationData: require("@/assets/animation/desktop-biz.json"),
          /* loop: true, */
          autoplay: true,
        },
      },
    },
    {
      title: "Не только Бизнес…",
      text: "Качественный сон - это не только про эффективность сотрудников в компании, но и про качество их жизни за ее пределами на которое вы можете повлиять.",
      href: "/",
      animation: {
        mobile: {
          animationData: require("@/assets/animation/index.json"),
          /* loop: true, */
          autoplay: true,
        },
        desktop: {
          animationData: require("@/assets/animation/index.json"),
          /* loop: true, */
          autoplay: true,
        },
      },
    },
  ];

  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 98%;
  margin: 0 auto;

  &-business {
    .banner__container {
      z-index: 3;
    }

    .banner__title {
      color: #fff;
    }

    .banner__text {
      color: #fff;
    }

    .banner__wrapper {
      background: inherit;
      background-image: url("@/assets/img/night.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .banner__animation {
      margin: 0 !important;
      width: 219% !important;
      height: auto !important;
      position: relative;
      left: -89%;
      top: -51px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    height: 440px;
    overflow: hidden;

    padding-left: 11%;

    border-radius: 40px;
    background: linear-gradient(
      90deg,
      #ffee94 1.23%,
      #ffb8b8 65.43%,
      #ffa4ba 98.5%
    );

    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  &__animation {
    margin: 0 !important;
    margin-left: auto !important;
    width: 90% !important;
    height: auto !important;
  }

  &__title {
    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.44px;
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
    width: 60%;
  }

  &__rout {
    display: block;
    padding: 6px 16px;
    margin-top: 40px;
    width: fit-content;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    color: #fff;

    border-radius: 12px;

    background: #000;

    cursor: pointer;

    &:hover {
      background: #444;
    }
  }

  @media (max-width: 900px) {
    width: 96%;

    &-business {
      .banner__animation {
        width: 189% !important;
        left: -51%;
        top: -35px;

        &-wrapper {
          height: 410px !important;
        }
      }

      .banner__wrapper {
        padding-bottom: 37px;
      }

      .banner__rout {
        margin-top: 33px;

        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0em;
      }

      .banner__text {
        text-align: left;
      }
    }

    &__wrapper {
      padding: 0;
      padding-bottom: 45px;
      display: flex;
      flex-direction: column;
      height: initial;
    }

    &__animation {
      order: 1;
      width: 743px !important;
      height: 100% !important;
      transform: translate(-25%, 0%);
    }

    &__container {
      order: 2;
      width: 100%;
    }

    &__title {
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.03em;
      text-align: center;
    }

    &__text {
      width: 88%;
      margin: 0 auto;
      margin-top: 5px;

      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__rout {
      margin: 0 auto;
      margin-top: 40px;

      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0em;
    }
  }
}
</style>
