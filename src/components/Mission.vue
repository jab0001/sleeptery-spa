<template>
  <div :class="`mission mission-${page}`">
    <div class="mission__wrapper">
      <h2 class="mission__badget" v-if="page === 'user'">наша миссия</h2>
      <h3 class="mission__title" v-if="page === 'user'">
        Создать<span class="mission__emblem">
          <img src="@/assets/img/I-1.png" /></span
        >&nbsp;&nbsp;самый эффективный сервис по улучшению сна и сделать его
        доступным для всех
      </h3>
      <h3 class="mission__title" v-else>
        Вы не можете <br v-if="mobile" /> заставить спать ваших <br v-if="mobile" /> сотрудников лучше, но… <br /><br />Вы
        точно можете <br v-if="mobile" />стимулировать это <br v-if="mobile" /> с&nbsp;помощью игровых <br v-if="mobile" />механик sleeptery
      </h3>
      <div v-if="page === 'user'" class="mission__text" ref="missionInform">
        <p v-if="loaded">
          {{ resultText }}
        </p>
        <div class="mission__text-typing" v-else>
          <p class="mission__text-third">печатает</p>
          <lottie
            :options="lottieOptions"
            ref="improveAnimation"
            :height="0"
            :width="32"
            style="margin: 0; display: flex; align-items: center"
          />
        </div>
      </div>
      <!-- <ul v-else class="mission__list">
        <li class="mission__item" v-for="item in items" :key="item.id">
          <img class="mission__picture" :src="item.img" />
          <p class="mission__picture-text">{{ item.text }}</p>
        </li>
      </ul> -->
    </div>
    <div class="mission__wrapper-phone">
      <img class="mission__img-desktop" src="@/assets/img/phone-mission.png" />
      <img class="mission__img-mobile" src="@/assets/img/phone-mission.png" />
      <img class="mission__cloud-1" src="@/assets/img/icons/cloud-1.svg" />
      <img class="mission__cloud-3" src="@/assets/img/icons/cloud-3.svg" />
    </div>
    <img class="mission__cloud-2" src="@/assets/img/icons/cloud-2.svg" />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Mission extends Vue {
  @Prop({ type: String, default: "user" }) page;

  items = [
    {
      id: 1,
      text: "Мотивирует спать",
      img: require("@/assets/img/icons/mission-1.svg"),
    },
    {
      id: 2,
      text: "Вырабатывается привычка спать качественно",
      img: require("@/assets/img/icons/mission-2.svg"),
    },
    {
      id: 3,
      text: "Делает сон осознанным",
      img: require("@/assets/img/icons/mission-3.svg"),
    },
    {
      id: 4,
      text: "Рост когнитивных и физических способностей",
      img: require("@/assets/img/icons/mission-4.svg"),
    },
    {
      id: 5,
      text: "Увеличивается продуктивность",
      img: require("@/assets/img/icons/mission-5.svg"),
    },
  ];

  lottieOptions = {
    animationData: require("@/assets/animation/loader.json"),
    /*  loop: true, */
    autoplay: true,
  };
  loaded = true;
  start = 0;
  text =
    "Мы не можем не спать. Давайте возьмем все преимущества от качественного сна и сделаем его своей полезной привычкой 🥰";
  speed = 50;
  resultText = "";
  mobile = false;

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

  handleScrollMission() {
    const lotteryInform = this.$refs.missionInform;
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
      window.removeEventListener("scroll", this.handleScrollMission);
    }
  }

  mounted() {
    window.addEventListener("scroll", this.handleScrollMission);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScrollMission);
  }
  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }
  }
}
</script>

<style scoped lang="scss">
.mission {
  padding-left: 48px;
  /* padding-right: 48px; */
  display: flex;
  position: relative;
  padding-bottom: 134px;

  &-business {
    margin-top: 123px;
    padding-bottom: 93px;

    .mission__title {
      color: #000;
    }

    .mission__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 55px;
      gap: 44px;
      position: relative;
      z-index: 3;
    }

    .mission__item {
      max-width: 120px;
    }

    .mission__picture {
      &-text {
        margin-top: 12px;

        font-family: "Gilroy";
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    .mission__cloud-1 {
      top: -26px;
      right: 34%;
    }

    .mission__cloud-3 {
      display: none;
    }
  }

  &__img {
    &-desktop {
      position: absolute;
      bottom: -6px;
      right: 8.5vw;
      z-index: 2;
      width: 395px;
      height: auto;
    }

    &-mobile {
      display: none;
    }
  }

  &__wrapper {
    width: 60%;

    &-phone {
      /* position: relative; */
    }
  }

  &__cloud {
    &-1 {
      position: absolute;
      top: 12px;
      right: 41%;
      z-index: 1;
    }
    &-2 {
      position: absolute;
      top: 127px;
      right: 0;
      z-index: 1;
      transform: rotate(180deg);
    }
    &-3 {
      position: absolute;
      bottom: 90px;
      right: 32%;
      z-index: 1;
    }
  }

  &__text {
    position: relative;
    z-index: 3;
    width: 65.5%;
    margin-top: 58px;
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

    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    &-third {
      display: flex;
      align-items: center;
    }

    &-typing {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: 414px) {
        height: 101px;
      }

      @media (min-width: 415px) and (max-width: 593px) {
        height: 68.5px;
      }

      @media (min-width: 594px) and (max-width: 900px) {
        height: 50.4px;
      }

      @media (min-width: 901px) and (max-width: 1027px) {
        height: 118px;
      }

      @media (min-width: 1028px) {
        height: 88px;
      }
    }

    p {
      @media (max-width: 414px) {
        height: 101px;
      }

      @media (min-width: 415px) and (max-width: 593px) {
        height: 68.5px;
      }

      @media (min-width: 594px) and (max-width: 900px) {
        height: 50.4px;
      }

      @media (min-width: 901px) and (max-width: 1027px) {
        height: 118px;
      }

      @media (min-width: 1028px) {
        height: 88px;
      }
    }
  }

  &__badget {
    position: relative;
    z-index: 3;
    border-radius: 40px;
    background: #6bffa1;
    width: fit-content;
    padding: 3px 12px;

    color: var(--black, #000);

    font-family: "GilroySemibold";
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    color: #000;
  }

  &__emblem {
    img {
      position: relative;
      top: 10px;
      left: 12px;
      width: 48px;
      height: 48px;

      border-radius: 12px;
    }
  }

  &__title {
    margin-top: 40px;
    position: relative;
    z-index: 3;

    font-family: "Gilroy";
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -1.28px;

    color: #fff;
  }

  @media (max-width: 900px) {
    padding: 0 8px;
    display: flex;
    flex-direction: column;

    &-business {
      margin-top: 19px;

      .mission__badget {
        margin-left: 9px;
      }

      .mission__title {
        margin-left: 9px;
        font-size: 28px;
      }

      .mission__item {
        min-width: 120px;
      }

      .mission__list {
        /* flex-direction: column ; */

        gap: 21px 56px;
        position: relative;
        z-index: 3;

        padding-left: 22px;
        /* height: 485px; */
        width: 100%;
        /* align-items: center; */
      }

      .mission__picture-text {
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }

      .mission__emblem {
        img {
          left: 8px;
        }
      }

      .mission__wrapper-phone {
        min-height: 430px;
      }

      .mission__img-mobile {
        bottom: -20%;
      }

      .mission__cloud-1 {
        top: 157px;
      }

      .mission__cloud-3 {
        display: block;
        top: -45px;
        right: -39%;
      }
    }

    &__wrapper {
      width: 100%;

      &-phone {
        min-height: 464px;
        position: relative;
      }
    }

    &__text {
      width: 100%;
      padding: 16px;
      width: 100%;
      margin-top: 15px;
      border-radius: 24px;
      box-sizing: border-box;

      font-size: 18px;
      line-height: 140%;
    }

    &__cloud {
      &-1 {
        top: 43px;
        left: -10%;
      }
      &-2 {
        display: none;
      }

      &-3 {
        bottom: 80px;
        right: -33%;
        transform: rotate(180deg);
      }
    }

    &__title {
      margin-left: 17px;

      margin-top: 10px;
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.96px;
    }

    &__badget {
      margin-left: 17px;
    }

    &__emblem {
      img {
        width: 40px;
        height: 40px;
        top: 12px;
        left: 7px;
        border-radius: 8px;

        box-shadow: 0px 1.0666667222976685px 1.8666667938232422px 0px
          rgba(0, 62, 183, 0.5);
      }
    }

    &__img {
      &-desktop {
        display: none;
      }

      &-mobile {
        display: block;
        position: absolute;
        bottom: -20%;
        right: 8vw;
        z-index: 2;
        width: 275px;
        height: auto;
      }
    }
  }
}
</style>
