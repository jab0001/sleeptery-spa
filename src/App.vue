<template>
  <div
    :class="`main ${
      $router.history.current.name === 'user' ? '' : 'main-business'
    }`"
  >
    <div class="main__background">
      <div class="main__background-1">
        <div class="main__background-1-point"></div>
      </div>
      <div class="main__background-2">
        <div class="main__background-2-point"></div>
      </div>
    </div>
    <lottie
      v-if="$router.history.current.name === 'user'"
      class="main__animation"
      ref="mainAnimation"
      :options="lottieOptionsUser"
      :height="400"
      :width="400"
    />
    <lottie
      v-else
      class="main__animation main__animation-business"
      ref="mainAnimation"
      :options="
        mobile ? lottieOptionsBusiness.mobile : lottieOptionsBusiness.desktop
      "
      :height="400"
      :width="400"
    />
    <Modal v-if="modal" :modal="!!page" @switchModal="switchModal" />
    <FormModal
      v-show="formModal"
      @switchFormModal="switchFormModal"
      :openModal="formModal"
    />
    <TelegrammModal
      v-if="telegrammModal"
      @switchTelegrammModal="switchTelegrammModal"
      :btnName="btnName"
    />
    <div class="main__wrapper">
      <nav class="main__nav">
        <a href="/" class="main__link">
          <i
            :class="`icon-logo ${
              $router.history.current.name === 'user'
                ? ''
                : 'icon-logo-business'
            }`"
          ></i>
          <img src="@/assets/img/I-1.png" />
        </a>
        <div class="main__container">
          <a
            v-if="$router.history.current.name === 'user'"
            href="/business"
            class="main__rout"
            >Для бизнеса</a
          >
          <a v-else href="/" class="main__rout">Пользователям</a>
          <button
            v-if="$router.history.current.name === 'user'"
            class="main__btn"
            @click="switchFormModal"
          >
            Начать
          </button>
          <button v-else class="main__btn" @click="switchModal">
            Подключить
          </button>
        </div>
      </nav>
      <router-view
        @switchModal="switchModal"
        @switchFormModal="switchFormModal"
        @switchTelegrammModal="switchTelegrammModal"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "@/components/Modal.vue";
import FormModal from "@/components/FormModal.vue";
import TelegrammModal from "@/components/TelegrammModal.vue";

@Component({
  components: {
    Modal,
    FormModal,
    TelegrammModal,
  },
})
export default class App extends Vue {
  mobile = false;

  lottieOptionsUser = {
    animationData: require("@/assets/animation/index.json"),
    /*  loop: true, */
    autoplay: true,
  };

  lottieOptionsBusiness = {
    mobile: {
      animationData: require("@/assets/animation/mobile-biz.json"),
      /*  loop: true, */
      autoplay: true,
    },
    desktop: {
      animationData: require("@/assets/animation/desktop-biz.json"),
      /*  loop: true, */
      autoplay: true,
    },
  };

  modal = false;
  formModal = false;
  telegrammModal = false;
  page = null;
  btnName = "";

  switchTelegrammModal(name) {
    this.telegrammModal = !this.telegrammModal;
    this.btnName = name;

    if (this.telegrammModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  switchModal(page) {
    this.page = page;
    this.modal = !this.modal;

    if (this.modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  switchFormModal() {
    this.formModal = !this.formModal;

    if (this.formModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  setZoom() {
    document.body.style.zoom = "80%";
  }

  created() {
    if (window.innerWidth < 900) {
      this.mobile = true;
    }

    /* if (this.$router.history.current.name === "user") { */
    if (window.matchMedia("(min-width: 900px)").matches) {
      this.setZoom();
    }
    /* } */
  }
}
</script>

<style scoped lang="scss">
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.icon-logo-business {
  color: #000;
}
.main {
  background: rgba(0, 241, 169, 1);
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100%;

  &__background {
    position: fixed;
    position: -webkit-fixed;
    height: calc(100vh + 221.5px);
    width: 100%;
    z-index: 1;
    top: 0;

    &-1 {
      position: absolute;

      top: 50%;
      left: 50%;

      background: rgba(0, 0, 240, 1);

      width: 100%;
      height: 100%;
      border-radius: 50%;
      filter: blur(400px);

      animation: 20s linear infinite rotate;
      transform-origin: top left;

      /* &-point {
        position: absolute;
        top: 0;
        left: 0;

        width: 20px;
        height: 20px;
        background: red;

        transform: translate(-50%, -50%);
      } */
    }

    &-2 {
      position: absolute;

      bottom: 50%;
      right: 50%;

      background: rgba(0, 0, 240, 1);

      animation: 20s linear infinite rotate;
      transform-origin: bottom right;

      width: 100%;
      height: 100%;
      border-radius: 50%;
      filter: blur(400px);

      /* &-point {
        position: absolute;
        bottom: 0;
        right: 0;

        width: 20px;
        height: 20px;
        background: red;

        transform: translate(-50%, -50%);
      } */
    }

    @media (max-width: 900px) {
      height: 100vh;

      &-1 {
        width: 580px;
        height: 580px;
        filter: blur(115px);
      }

      &-2 {
        width: 580px;
        height: 580px;
        filter: blur(115px);
      }
    }
  }

  &-business {
    background: rgba(255, 249, 173, 1);

    .main__background {
      &-1 {
        background: rgba(255, 154, 178, 1);
      }

      &-2 {
        background: rgba(255, 154, 178, 1);
      }

      @media (max-width: 900px) {
        &-1 {
          background: rgba(255, 154, 178, 1);
        }

        &-2 {
          background: rgba(255, 154, 178, 1);
        }
      }
    }
  }

  &__animation {
    position: absolute;
    top: 0;
    right: -29%;
    z-index: 1;
    width: 128% !important;
    height: auto !important;
    max-width: 2800px;

    &-business {
      right: -20%;
      width: 100% !important;
      max-width: 1800px;
    }
  }

  &__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  &__link {
    color: #fff;
    img {
      display: none;
    }

    i {
      font-size: 36px;
      display: block;

      &:before {
        margin: 0;
      }
    }
  }

  &__nav {
    display: flex;
    padding: 40px;
    justify-content: space-between;
  }

  &__container {
    display: flex;
  }

  &__rout {
    margin-right: 40px;
    display: flex;
    align-items: center;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    &:hover {
      color: #444;
    }
  }

  &__btn {
    padding: 0 16px;
    border-radius: 12px;
    background: #000;
    border: none;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    cursor: pointer;

    color: #fff;

    &:hover {
      background: #444;
    }
  }

  @media (max-width: 900px) {
    background: rgba(0, 241, 169, 1);
    overflow-y: initial;
    overflow-x: hidden;

    &-business {
      background: rgba(255, 249, 173, 1);
    }

    &__nav {
      padding: 16px;
      padding-right: 12px;
    }

    &__animation {
      right: -37vh;
      width: 134vh !important;
      top: -10vh;

      &-business {
        right: 0vh;
        width: 90% !important;
        top: 0;
      }
    }

    &__container {
      align-items: baseline;
    }

    &__rout {
      margin-right: 2px;
      margin-top: 5px;

      font-family: "Gilroy";
      font-size: 16px;
      line-height: 140%;
      padding: 2px 10.5px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 16px;
    }

    &__link {
      img {
        display: block;
        width: 48px;
        height: 48px;

        border-radius: 12px;
      }
      i {
        display: none;
      }
    }

    &__btn {
      display: none;
    }
  }
}
</style>
