<template>
  <div :class="`result result-${page}`">
    <h2 class="result__title" v-if="page === 'user'">
      Улучшайте сон<br class="result__mobile" />
      со sleeptery
    </h2>
    <h2 class="result__title" v-else>
      Как повысить <br class="result__mobile" />эффективность <br class="result__mobile" />команды
    </h2>
    <!-- <button
      @click="switchFormModal"
      v-if="page === 'user'"
      class="result__btn-join"
      ref="buttonTwo"
    >
      начать
    </button> -->
    <ul class="result__list" v-if="page === 'user'">
      <li class="result__item" v-for="link in links" :key="link.id">
        <a class="result__link" href="#" @click.prevent="openTelegrammModal(link.name)">
          <img class="result__img" width="200" height="64" :src="link.img" />
        </a>
      </li>
    </ul>
    <button v-else class="result__btn" @click="openModal">Подключить sleeptery</button>
    <lottie
      class="result__animation"
      ref="resultAnimation"
      :options="lottieOptions[page]"
      :height="0"
      :width="0"
    />
    <Footer />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer,
  },
})
export default class Result extends Vue {
  @Prop({ type: String, default: "user" }) page;

  lottieOptions = {
    user: {
      animationData: require("@/assets/animation/footer.json"),
      /* loop: true, */
      autoplay: true,
    },
    business: {
      animationData: require("@/assets/animation/footer-biz.json"),
      /* loop: true, */
      autoplay: true,
    },
  };

  links = [
    {
      id: 1,
      img: require("@/assets/img/apple.png"),
      name: 'apple',
      href: "https://testflight.apple.com/join/qIRAc6Kg",
    },
    {
      id: 2,
      img: require("@/assets/img/google.png"),
      href: "./app/app.pdf",
      name: "google"
    },
  ];

  openTelegrammModal(name) {
    dataLayer.push({
      event: "step_12_download",
      eventCategory: "form_steps",
      eventAction: "click",
      eventLabel: "step_12_download",
    });

    this.$emit("switchTelegrammModal", name);
  }

  switchFormModal() {
    this.$emit("switchFormModal");
  }

  openModal() {
    this.$emit("switchModal");
  }
}
</script>

<style scoped lang="scss">
.result {
  margin-top: 25px;
  min-height: 860px;
  position: relative;

  &__btn-join {
    /* padding: 23px 56px; */
    min-height: 80px;
    min-width: 354px;
    display: block;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
    z-index: 3;

    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
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

  &-business {
    /* min-height: 771px; */
    .result__animation {
      width: 125vw !important;
      position: absolute;
      bottom: -10px;
      right: calc((125vw - 100%) / (-2));
      height: auto !important;
      max-height: 1000px;
      z-index: 1;

      /* @media (min-width: 1440px) {
        width: 100vw !important;
        right: calc((100vw - 100%) / -2);
      } */
    }

    .result__title {
      color: #000;
    }

    .result__btn {
      padding: 23px 56px;
      display: block;
      margin: 0 auto;
      margin-top: 60px;
      position: relative;
      z-index: 3;

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
  }

  &__mobile {
    display: none;
  }

  &__item {
    &:hover {
      opacity: 0.7;
    }
  }

  &__title {
    padding-top: 60px;

    font-family: "Gilroy";
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.28px;
    text-align: center;

    color: #fff;
  }

  &__list {
    position: relative;
    margin: 0 auto;
    margin-top: 48px;
    display: flex;
    width: fit-content;

    gap: 16px;

    z-index: 2;
  }

  &__img {
    width: 200px;
    height: 64px;
  }

  &__animation {
    width: 125vw !important;
    position: absolute;
    bottom: -10px;
    right: calc((125vw - 100%) / -2);
    height: auto !important;
    max-height: 1000px;
    z-index: 1;

    /* @media (min-width: 1440px) {
        width: 100vw !important;
        right: calc((100vw - 100%) / -2);
      } */
  }

  @media (max-width: 900px) {
    min-height: initial;

    &__btn-join {
      margin-top: 15px;
      padding: 0;
      font-size: 28px;
      font-weight: 500;
      line-height: 140%;

      min-width: 312px;
      min-height: 52px;
    }

    &-business {
      .result__btn {
        margin-top: 24px;
        padding: 14px 56px;
        width: 94%;

        font-size: 16px;
        line-height: 22px;
      }

      .result__animation {
        width: 100% !important;
        position: relative;
        bottom: -6px;
        left: 0px;
      }
    }

    &__title {
      padding-top: 40px;

      font-size: 32px;
      line-height: 38px;
      letter-spacing: -0.03em;
      text-align: center;
    }

    &__mobile {
      display: block;
    }

    &__link {
      img {
        width: 154px;
        height: 49px;
      }
    }

    &__list {
      gap: 8px;
      margin-top: 23px;
    }

    &__animation {
      width: 100% !important;
      position: relative;
      bottom: -10px;
      left: calc((100vw - 100%) / (-2));
    }
  }
}
</style>
