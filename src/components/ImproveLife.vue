<template>
  <div
    class="improve"
    :style="`min-height: ${height ? `${height - 80}px` : ''}`"
  >
    <h1 class="improve__title">
      Как сделать <br class="improve__br" />жизнь качественнее?
    </h1>
    <ul class="improve__list">
      <li class="improve__item">
        <p class="improve__text-first">😉 начните со&nbsp;здорового&nbsp;сна</p>
      </li>
      <li class="improve__item" v-if="loaded">
        <p class="improve__text-second">
          {{ resultText }}
        </p>
      </li>
      <li class="improve__item" v-else>
        <div class="improve__text-typing">
          <p class="improve__text-third">печатает</p>
          <lottie
            :options="lottieOptions"
            ref="improveAnimation"
            :height="0"
            :width="32"
            style="margin: 0"
          />
        </div>
      </li>
    </ul>
    <button @click="switchFormModal" ref="buttonOne" class="improve__btn">
      начать
    </button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ImproveLife extends Vue {
  lottieOptions = {
    animationData: require("@/assets/animation/loader.json"),
    /*  loop: true, */
    autoplay: true,
  };
  loaded = false;
  start = 0;
  text = "Превратите сон в полезную привычку по науке, весело и эффективно 🔥";
  speed = 50;
  resultText = "";
  height = "";

  printSmbl() {
    let timeout = 50;
    this.resultText += this.text[this.start];
    this.start++;
    if (this.start < this.text.length) {
      setTimeout(this.printSmbl, timeout);
    }
  }

  switchFormModal() {
    this.$emit("switchFormModal");
  }

  mounted() {
    setTimeout(() => {
      this.loaded = true;
      setTimeout(this.printSmbl, 100);
    }, 2000);

    if (window.innerWidth < 900) {
      this.height = window.innerHeight;
    }
  }
}
</script>

<style scoped lang="scss">
.message-third {
  width: fit-content !important;
}

.improve {
  display: flex;
  flex-direction: column;
  min-height: 539px;

  &__br {
    display: block;
  }

  &__title {
    min-height: 224px;

    font-family: "Gilroy";
    font-size: 76px;
    font-style: normal;
    font-weight: 500;
    line-height: 90%;
    letter-spacing: -0.76px;

    color: #fff;
  }

  &__list {
    width: 64.8%;
    margin: 0 auto;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__item {
    width: fit-content;

    padding: 18px 24px;

    border-radius: 40px;
    background: linear-gradient(
      90deg,
      #ffee94 1.23%,
      #ffb8b8 65.43%,
      #ffa4ba 98.5%
    );
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);

    &:not(:first-child) {
      margin-top: 8px;
      width: 96%;
    }
  }

  &__text {
    &-typing {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: 379px) {
        height: 75.6px;
      }

      @media (min-width: 380px) and (max-width: 670px) {
        height: 50.4px;
      }

      @media (min-width: 671px) and (max-width: 900px) {
        height: 25px;
      }

      @media (min-width: 901px) and (max-width: 1130px) {
        height: 62.5px;
      }

      @media (min-width: 1331px) {
        height: 31.5px;
      }
    }

    &-first {
      font-family: "Gilroy";
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.44px;
    }

    &-third {
      font-family: "Gilroy";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;

      display: flex;
      align-items: center;
    }

    &-second {
      font-family: "Gilroy";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;

      @media (max-width: 379px) {
        height: 75.6px;
      }

      @media (min-width: 380px) and (max-width: 670px) {
        height: 50.4px;
      }

      @media (min-width: 671px) and (max-width: 900px) {
        height: 25px;
      }

      @media (min-width: 901px) and (max-width: 1130px) {
        height: 62.5px;
      }

      @media (min-width: 1331px) {
        height: 31.5px;
      }
    }
  }

  &__btn {
    /* padding: 23px 56px; */
    width: 354px;
    height: 80px;
    align-self: center;
    margin-top: auto;
    position: relative;

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

  @media (max-width: 900px) {
    height: 100%;
    box-sizing: border-box;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &__title {
      padding: 0 16px;
      min-height: initial;
      margin-top: 0;

      font-size: 36px;
      line-height: 100%;
      letter-spacing: -0.72px;
    }

    &__br {
      display: none;
    }

    &__list {
      width: 100%;
      margin-top: 25px;
      margin-bottom: 24px;
    }

    &__text {
      &-first {
        font-size: 28px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.84px;
      }

      &-second {
        margin-left: 8px;
        font-size: 18px;
        line-height: 140%;
      }

      &-third {
        font-size: 18px;
        line-height: 140%;
      }
    }

    &__item {
      border-radius: 24px;
      padding: 16px;
      width: 100%;

      &:not(:first-child) {
        box-sizing: border-box;
        width: 100%;
      }

      &:first-child {
        width: 64%;
      }
    }

    &__btn {
      margin-top: 0;
      padding: 0;
      font-size: 28px;
      font-weight: 500;
      line-height: 140%;

      min-width: 312px;
      height: 52px;
    }
  }

  @media (min-width: 675px) and (max-width: 900px) {
    &__item {
      &:not(:first-child) {
        box-sizing: border-box;
        width: 660px;
      }
    }
  }
}
</style>
