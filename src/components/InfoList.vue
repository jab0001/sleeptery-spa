<template>
  <div class="info-list">
    <ul class="info-list__list">
      <li
        :class="`info-list__item info-list__item-${item.class}`"
        v-for="item in items"
        :key="item.id"
      >
        <div :class="`info-list__wrapper info-list__wrapper-${item.class}`">
          <h3 :class="`info-list__title info-list__title-${item.class}`">
            {{ item.title }}
          </h3>
          <p :class="`info-list__text info-list__text-${item.class}`">
            {{ item.text }}
          </p>
        </div>
        <lottie
          :ref="`infoAnimation${item.id}`"
          :options="
            mobile
              ? animations[item.class].mobile
              : animations[item.class].desktop
          "
          :class="`info-list__animation info-list__animation-${item.class}`"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class InfoList extends Vue {
  mobile = false;
  items = [
    {
      id: 1,
      title: "Здоровье и удовольствие в одном флаконе",
      text: "Создавать полезную привычку здорового сна со sleeptery - это вдвойне приятно: за каждый сон начисляем бонусные подушки, обменяйте их на участие в наших розыгрышах.",
      class: "first",
    },
    {
      id: 2,
      title: "Научный подход простым и понятным языком",
      text: "Мы превратили статьи и исследования в практические советы на каждый день с целью применить эти знания на практике и улучшить качество сна.",
      class: "second",
    },
    {
      id: 3,
      title: "Игровой подход для улучшения сна",
      text: "Наш подход основан на забавных заданиях, напоминаниях и полезных ежедневных советах, которые помогут вам настроить свой режим сна.",
      class: "third",
    },
  ];

  animations = {
    first: {
      mobile: {
        animationData: require("@/assets/animation/bottle.json"),
        /* loop: true, */
        autoplay: true,
      },
      desktop: {
        animationData: require("@/assets/animation/bottle.json"),
        /* loop: true, */
        autoplay: true,
      },
    },
    second: {
      mobile: {
        animationData: require("@/assets/animation/bigportals.json"),
        /* loop: true, */
        autoplay: true,
      },
      desktop: {
        animationData: require("@/assets/animation/bigportals-desktop.json"),
        /* loop: true, */
        autoplay: true,
      },
    },

    third: {
      mobile: {
        animationData: require("@/assets/animation/rabbit.json"),
        /* loop: true, */
        autoplay: true,
      },
      desktop: {
        animationData: require("@/assets/animation/rabbit.json"),
        /* loop: true, */
        autoplay: true,
      },
    },
  };

  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.info-list {
  width: 98%;
  margin: 0 auto;
  margin-top: 6px;
  padding: 60px 0 118px 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  border-radius: 40px;

  &__item {
    position: relative;
  }

  &__wrapper {
    max-width: 680px;

    &-first {
      position: relative;
      margin-right: auto;
      padding-left: 48px;
      background: #fff;
      border-radius: 40px;
      z-index: 3;
    }

    &-second {
      position: relative;
      margin: 0 auto;
      margin-top: 152px;
      background: #fff;
      border-radius: 40px;
      z-index: 3;
    }

    &-third {
      position: relative;
      margin-left: auto;
      margin-top: 162px;
      max-width: 640px;
      padding-right: 48px;
      background: #fff;
      border-radius: 40px;
      z-index: 3;
    }
  }

  &__animation {
    position: absolute;

    &-first {
      top: -250px;
      right: 95px;
      width: 588px !important;
      height: 736px !important;

      z-index: 2;
    }

    &-second {
      top: -235px;
      width: 100% !important;
      height: 736px !important;
      left: 0;

      z-index: 1;
    }

    &-third {
      bottom: -150px;
      left: 45px;
      width: 523px !important;
      height: 570px !important;

      z-index: 2;
    }
  }

  &__title {
    font-family: "Gilroy";
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.28px;

    &-first {
      text-align: left;
    }

    &-second {
      text-align: center;
    }

    &-third {
      text-align: left;
    }
  }

  &__text {
    margin-top: 15px;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #444;

    &-first {
      text-align: left;
    }

    &-second {
      text-align: center;
    }

    &-third {
      text-align: left;
    }
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    padding: 40px 16px 36px 16px;
    width: calc(100% - 16px);
    z-index: 3;

    &__wrapper {
      padding: 0;

      &-first {
        margin: 0 auto;
      }

      &-second {
        margin: 0 auto;
      }

      &-third {
        margin: 0 auto;
      }
    }

    &__item {
      max-height: 543px;
      /* overflow: hidden; */

      &-second {
        margin-top: 0px;
      }

      /* &-third {
          margin-top: 10px;
      } */
    }

    &__title {
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.96px;
      text-align: left;
    }

    &__text {
      margin-top: 12px;

      color: #444;

      font-size: 16px;
      line-height: 140%;
      text-align: left;
    }

    &__animation {
      &-first {
        position: relative;
        width: 284px !important;
        height: 304px !important;
        top: -15px;
        right: 6px;
      }

      &-second {
        position: relative;
        width: calc(100% + 32px) !important;
        height: auto !important;
        top: -23px;
        left: -16px;
      }

      &-third {
        position: relative;
        width: 327px !important;
        height: 290px !important;
        top: 0;
        left: 0px;
      }
    }
  }
}
</style>
