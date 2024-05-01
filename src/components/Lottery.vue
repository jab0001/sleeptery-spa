<template>
  <div class="lottery">
    <div class="lottery__container-question">
      <h2 class="lottery__title">Как спать и при этом выигрывать призы?</h2>
      <ul class="lottery__list">
        <li class="lottery__item" v-for="item in items" :key="item.id">
          <img
            :class="`lottery__img lottery__img-${item.id}`"
            :src="item.img"
          />
          <p class="lottery__text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="lottery__container-points">
      <div class="lottery__inform-block">
        <div class="lottery__inform" ref="lotteryInform">
          <p class="lottery__inform-text" v-if="loaded">
            {{ resultText }}
          </p>
          <div class="lottery__inform-typing" v-else>
            <p class="lottery__inform-third">печатает</p>
            <lottie
              :options="lottieOptions"
              ref="improveAnimation"
              :height="0"
              :width="32"
              style="margin: 0; display: flex; align-items: center"
            />
          </div>
        </div>
        <!-- <button @click="switchFormModal" class="lottery__inform-btn">
          начать
        </button> -->

        <ul class="lottery__list-app" v-if="page === 'user'">
          <li
            class="lottery__list-app-item"
            v-for="link in links"
            :key="link.id"
          >
            <a
              class="lottery__list-app-link"
              href="#" @click.prevent="openTelegrammModal(link.name)"
            >
              <img
                class="lottery__list-app-img"
                width="200"
                height="64"
                :src="link.img"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="presents__slider">
        <agile
          :slidesToShow="mobile ? 1.05 : 3"
          :navButtons="mobile ? false : true"
        >
          <div class="presents__item" v-for="card in cards" :key="card.id">
            <div
              class="presents__wrapper"
              :style="`background: ${card.background}`"
            >
              <h3 class="presents__title">{{ card.title }}</h3>
              <p class="presents__inform">{{ card.text }}</p>
              <img
                :class="`presents__img presents__img-${card.id}`"
                :src="card.img"
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
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import { VueAgile } from "vue-agile";

@Component({
  components: {
    agile: VueAgile,
  },
})
export default class Lottery extends Vue {
  @Prop({ type: String, default: "user" }) page;

  nextBtn = require("@/assets/img/icons/nextArrow.svg");
  prevBtn = require("@/assets/img/icons/prevArrow.svg");

  items = [
    {
      id: 1,
      img: require("@/assets/img/icons/lottery-1.svg"),
      text: "Зарегистрируйтесь в приложении sleeptery и подключите трекер для отслеживания сна",
    },
    {
      id: 2,
      img: require("@/assets/img/icons/lottery-2.svg"),
      text: "Получайте баллы “подушки” за соблюдение рекомендаций и выполнение заданий",
    },
    {
      id: 3,
      img: require("@/assets/img/icons/lottery-3.svg"),
      text: "Обменяйте полученные подушки на билеты для участия в розыгрышах",
    },
  ];
  cards = [
    {
      id: 1,
      title: "Комплект Blue Sleep Mix (одеяло и 2 подушки)",
      text: "розыгрыш 31.05",
      img: require("@/assets/img/point1.png"),
      background: "#E5EBFF",
    },
    {
      id: 2,
      title: "Одеяло Askona Cool Max (c охлаждающим эффектом)",
      text: "розыгрыш 31.05",
      img: require("@/assets/img/point2.png"),
      background: "#FFF5FB",
    },
    {
      id: 3,
      title: "Анатомический матрас Serta Arctic Cool (c эффектом охлаждения)",
      text: "розыгрыш 31.05",
      img: require("@/assets/img/point3.png"),
      background: "#E1F1FD",
    },
    {
      id: 4,
      title: "Кубик для улучшения сна (с запатентованным алгоритмом)",
      text: "розыгрыш 31.05",
      img: require("@/assets/img/point2.png"),
      background: "#E5EBFF",
    },
  ];

  links = [
    {
      id: 1,
      img: require("@/assets/img/apple.png"),
      href: "https://testflight.apple.com/join/qIRAc6Kg",
      name: "apple"
    },
    {
      id: 2,
      img: require("@/assets/img/google.png"),
      href: "./app/app.pdf",
      name: 'google'
    },
  ];

  mobile = false;

  lottieOptions = {
    animationData: require("@/assets/animation/loader.json"),
    /*  loop: true, */
    autoplay: true,
  };
  loaded = true;
  start = 0;
  text =
    "Начни получать все преимущества от своего сна уже сегодня 👀";
  speed = 50;
  resultText = "";

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

  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  }

  printSmbl() {
    let timeout = 50;
    this.resultText += this.text[this.start];
    this.start++;
    if (this.start < this.text.length) {
      setTimeout(this.printSmbl, timeout);
    }
  }

  get isDesktopSafari() {
    return (
      navigator.userAgent.toLowerCase().indexOf("safari/") > -1 && !this.mobile
    );
  }

  handleScroll() {
    const lotteryInform = this.$refs.lotteryInform;
    const { y } = lotteryInform.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const coordinate = this.mobile
      ? y
      : (y / 100 / (this.isDesktopSafari ? 1.7 : 1)) * 80;
    if (coordinate <= screenHeight) {
      setTimeout(() => {
        this.loaded = true;
        setTimeout(this.printSmbl, 100);
      }, 1);
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style scoped lang="scss">
.presents {
  &__wrapper {
    position: relative;
    margin: 0 auto;
    padding: 2.2vw;
    box-sizing: border-box;
    background: #fff;
    height: 348px;
    max-width: 96%;

    border-radius: 40px;
  }

  &__slider {
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
  }
  &__img {
    display: block;
    position: absolute;

    bottom: 0px;
    left: 0;
    width: 100%;
    height: auto;
    border-bottom-right-radius: 40px;
  }

  &__title {
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }

  &__inform {
    margin-top: 10px;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #333;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    gap: 0;
    display: none;

    &__slider {
      display: block;
      margin-top: 15px;
      width: 100%;
    }

    &__wrapper {
      padding: 32px 0 0 16px;
    }
  }
}
.lottery {
  padding-bottom: 40px;

  &__container {
    &-question {
      width: 98%;
      padding-top: 60px;
      padding-bottom: 92px;
      margin: 0 auto;
      background: #fff;

      border-radius: 40px;
    }

    &-points {
      width: 100%;
      margin: 0 auto;
      margin-top: 50px;
    }
  }

  &__title {
    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.44px;

    text-align: center;
  }

  &__list {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 9px;

    gap: 40px;

    &-app {
      position: relative;
      margin: 0 auto;
      display: flex;
      width: fit-content;
      gap: 16px;
      z-index: 2;

      &-img {
        width: 200px;
        height: 64px;
      }

      @media (max-width: 900px) {
        margin-top: 20px;
        &-img {
          width: 154px;
          height: 49px;
        }
      }
    }
  }

  &__item {
    max-width: 341px;
  }

  &__img {
    margin: 0 auto;
    display: block;

    &-1 {
      margin-bottom: 11px;
    }

    &-2 {
      margin-top: 15px;
      margin-bottom: 24px;
    }

    &-3 {
      margin-top: 15px;
      margin-bottom: 24px;
    }
  }

  &__text {
    text-align: center;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  &__inform {
    padding: 18px 24px;

    width: 723px;
    box-sizing: border-box;

    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    border-radius: 40px;
    background: linear-gradient(
      90deg,
      #ffee94 1.23%,
      #ffb8b8 65.43%,
      #ffa4ba 98.5%
    );

    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);

    &-block {
      width: 98%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-btn {
      /* padding: 23px 56px; */
      min-height: 80px;
      min-width: 354px;
      align-self: center;
      /* margin-top: auto; */

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

    &-third {
      display: flex;
      align-items: center;
    }

    &-typing {
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 415px) {
        height: 50px;
      }

      @media (min-width: 416px) and (max-width: 610px) {
        height: 50px;
      }

      @media (min-width: 611px) and (max-width: 900px) {
        height: 25px;
      }

      @media (min-width: 901px) {
        height: 62.4px;
      }
    }

    &-text {
      @media (max-width: 415px) {
        height: 50px;
      }

      @media (min-width: 416px) and (max-width: 610px) {
        height: 50px;
      }

      @media (min-width: 611px) and (max-width: 900px) {
        height: 25px;
      }

      @media (min-width: 901px) {
        height: 62.4px;
      }
    }
  }

  @media (max-width: 900px) {
    &__container {
      &-question {
        width: 96%;
        padding-top: 42px;
        padding-bottom: 60px;
      }

      &-points {
        width: 100%;
        margin-top: 15px;
      }
    }

    &__inform {
      width: calc(100vw - 4%);
      margin: 0 auto;

      padding: 16px;
      border-radius: 24px;

      font-size: 18px;
      line-height: 140%;

      &-block {
        flex-wrap: wrap;
        justify-content: center;
      }

      &-btn {
        display: none;
        margin-top: 15px;
        padding: 0;
        font-size: 28px;
        font-weight: 500;
        line-height: 140%;

        min-width: 100%;
        min-height: 52px;
      }
    }

    &__title {
      font-size: 28px;
      line-height: 120%;
      letter-spacing: -0.84px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      margin-top: 3px;
      gap: 0;
      padding: 0 24px;
    }

    &__item {
      max-width: initial;
    }

    &__img {
      &-1 {
        margin-bottom: 0;
      }

      &-2 {
        margin-top: 11px;
        margin-bottom: 0;
      }

      &-3 {
        margin-top: 20px;
        margin-bottom: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.lottery {
  .agile__dots {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, 0);
  }

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
