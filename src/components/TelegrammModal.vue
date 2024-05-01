<template>
  <div class="telegramm">
    <div class="telegramm__fog" @click="closeModal"></div>
    <div class="telegramm__wrapper">
      <h3 class="telegramm__title">
        Beta-версия sleeptery уже доступна для тестирования
      </h3>
      <p class="telegramm__text">
        {{
          btnName === "apple"
            ? "Чтобы принять участие в тестировании, необходимо использовать TestFlight"
            : "Чтобы принять участие в тестировании, скачайте установочный файл приложения"
        }}
      </p>
      <!-- <input
        class="telegramm__nick"
        v-model="nick"
        placeholder="Введите почту"
        @blur="isValidEmail"
        @click="validate = true"
        type="email"
      />
      <p v-if="!validate" class="telegramm__error">
        {{ textValid }}
      </p> -->
      <!-- <button class="telegramm__btn" :disabled="sendingBtn" @click="submitForm">
        {{ sendingBtn ? "Отправляем..." : "Отправить" }}
      </button> -->

      <a
        v-if="btnName === 'apple'"
        class="telegramm__btn telegramm__btn-link"
        href="https://testflight.apple.com/join/qIRAc6Kg"
        target="_blank"
        @click="downloadApp"
        >Скачать</a
      >
      <a
        v-else
        class="telegramm__btn telegramm__btn-link"
        href="./app/app.pdf"
        @click="downloadApp"
        download
        >Скачать</a
      >
      <img class="telegramm__btn-qr" :src="qrs[btnName].img" />

      <button class="telegramm__close" @click="closeModal">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.626953"
            y="0.5"
            width="30"
            height="30"
            rx="15"
            fill="#7F7F7F"
            style="mix-blend-mode: luminosity"
          />
          <rect
            x="0.626953"
            y="0.5"
            width="30"
            height="30"
            rx="15"
            fill="#3D3D3D"
            style="mix-blend-mode: overlay"
          />
          <path
            d="M10.5488 20.9531C10.4186 20.8229 10.3327 20.6719 10.291 20.5C10.2493 20.3229 10.2493 20.1484 10.291 19.9766C10.3327 19.8047 10.416 19.6562 10.541 19.5312L14.2051 15.8672L10.541 12.2109C10.416 12.0859 10.3327 11.9375 10.291 11.7656C10.2493 11.5938 10.2493 11.4219 10.291 11.25C10.3327 11.0729 10.4186 10.9193 10.5488 10.7891C10.6738 10.6641 10.8223 10.5807 10.9941 10.5391C11.1712 10.4922 11.3457 10.4922 11.5176 10.5391C11.6947 10.5807 11.8457 10.6615 11.9707 10.7812L15.627 14.4453L19.291 10.7891C19.416 10.6641 19.5618 10.5807 19.7285 10.5391C19.9004 10.4922 20.0723 10.4922 20.2441 10.5391C20.4212 10.5807 20.5723 10.6667 20.6973 10.7969C20.8327 10.9219 20.9212 11.0729 20.9629 11.25C21.0046 11.4219 21.0046 11.5938 20.9629 11.7656C20.9212 11.9375 20.8353 12.0859 20.7051 12.2109L17.0566 15.8672L20.7051 19.5312C20.8353 19.6562 20.9212 19.8047 20.9629 19.9766C21.0046 20.1484 21.0046 20.3229 20.9629 20.5C20.9212 20.6719 20.8327 20.8203 20.6973 20.9453C20.5723 21.0755 20.4212 21.1641 20.2441 21.2109C20.0723 21.2526 19.9004 21.2526 19.7285 21.2109C19.5618 21.1693 19.416 21.0833 19.291 20.9531L15.627 17.2969L11.9707 20.9609C11.8457 21.0807 11.6947 21.1641 11.5176 21.2109C11.3457 21.2526 11.1712 21.2526 10.9941 21.2109C10.8223 21.1641 10.6738 21.0781 10.5488 20.9531Z"
            fill="#7F7F7F"
            style="mix-blend-mode: luminosity"
          />
          <path
            d="M10.5488 20.9531C10.4186 20.8229 10.3327 20.6719 10.291 20.5C10.2493 20.3229 10.2493 20.1484 10.291 19.9766C10.3327 19.8047 10.416 19.6562 10.541 19.5312L14.2051 15.8672L10.541 12.2109C10.416 12.0859 10.3327 11.9375 10.291 11.7656C10.2493 11.5938 10.2493 11.4219 10.291 11.25C10.3327 11.0729 10.4186 10.9193 10.5488 10.7891C10.6738 10.6641 10.8223 10.5807 10.9941 10.5391C11.1712 10.4922 11.3457 10.4922 11.5176 10.5391C11.6947 10.5807 11.8457 10.6615 11.9707 10.7812L15.627 14.4453L19.291 10.7891C19.416 10.6641 19.5618 10.5807 19.7285 10.5391C19.9004 10.4922 20.0723 10.4922 20.2441 10.5391C20.4212 10.5807 20.5723 10.6667 20.6973 10.7969C20.8327 10.9219 20.9212 11.0729 20.9629 11.25C21.0046 11.4219 21.0046 11.5938 20.9629 11.7656C20.9212 11.9375 20.8353 12.0859 20.7051 12.2109L17.0566 15.8672L20.7051 19.5312C20.8353 19.6562 20.9212 19.8047 20.9629 19.9766C21.0046 20.1484 21.0046 20.3229 20.9629 20.5C20.9212 20.6719 20.8327 20.8203 20.6973 20.9453C20.5723 21.0755 20.4212 21.1641 20.2441 21.2109C20.0723 21.2526 19.9004 21.2526 19.7285 21.2109C19.5618 21.1693 19.416 21.0833 19.291 20.9531L15.627 17.2969L11.9707 20.9609C11.8457 21.0807 11.6947 21.1641 11.5176 21.2109C11.3457 21.2526 11.1712 21.2526 10.9941 21.2109C10.8223 21.1641 10.6738 21.0781 10.5488 20.9531Z"
            fill="#3D3D3D"
            style="mix-blend-mode: overlay"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TelegrammModal extends Vue {
  @Prop({ type: Object, default: () => {} }) formModel;
  @Prop({ type: String, default: "" }) btnName;

  nick = "";
  validate = true;
  textValid = "Необходимо указать почту";
  sendingBtn = false;
  qrs = {
    apple: {
      img: require("@/assets/img/icons/qr-apple.svg"),
    },
    google: {
      img: require("@/assets/img/icons/qr-google.svg"),
    },
  };
  reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

  isValidEmail() {
    if (!this.reg.test(this.nick)) {
      this.textValid = "Введите верную почту";
    }
    this.validate = this.reg.test(this.nick);
  }

  downloadApp() {
    dataLayer.push({
      event: "download_form_submit",
      eventCategory: "form_steps",
      eventAction: "click",
      eventLabel: "submit",
    });
    this.closeModal();
  }

  async submitForm() {
    if (!this.nick) {
      this.validate = false;
      this.textValid = "Необходимо указать почту";
    }
    if (this.validate) {
      this.sendingBtn = true;
      let res = await this.axios({
        method: "post",
        url: `https://script.google.com/macros/s/1AKfycbxDmHIAMSAPX0Wi2SHV0n-lx759AhTfPEJ-rsb-2UTmVsh9UcapNSvqXHP937GcCE9R/exec?p1=${this.nick}&p2=${this.formModel.old}&p3=${this.formModel.gender}&p4=${this.formModel.work}&p5=${this.formModel.target}&p6=${this.formModel.sleepHours}&p7=${this.formModel.raiting}&p8=${this.formModel.control}&p9=${this.formModel.device}&p10=${this.formModel.raitingToSleep}&p11=${this.formModel.deepOfSleep}&p12=${this.formModel.raitingAfterSleep}&p13=${this.btnName}`,
        /* data: bodyFormData, */
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res && res.data) {
        dataLayer.push({
          event: "download_form_submit",
          eventCategory: "form_steps",
          eventAction: "click",
          eventLabel: "submit",
        });

        console.log("download_form_submit");
        this.sendingBtn = false;
        this.nick = "";
        this.closeModal();
        this.$emit("switchFormModal");
      }
    }
  }

  closeModal() {
    this.$emit("switchTelegrammModal");
  }
}
</script>

<style scoped lang="scss">
.telegramm {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 14;

  &__fog {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(102, 102, 102, 0.6);
  }

  &__nick {
    margin: 0 auto;
    display: block;
    width: 150px;
    padding: 14px 12px 11px 14px;
    border-radius: 16px;
    border: 1px solid #838383;
    box-sizing: border-box;
    min-height: 48px;
    background: #fff;
    color: #636363;

    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;

    &::placeholder {
      text-align: center;
    }
  }

  &__error {
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;

    color: red;

    text-align: center;
  }

  &__btn {
    margin: 0 auto;
    margin-top: 16px;
    border: none;
    padding: 6.5px 32px;
    display: block;

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

    &:disabled {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    &-link {
      width: 155px;
      box-sizing: border-box;
      text-align: center;
      display: none;

      @media (max-width: 900px) {
        display: block;
      }
    }

    &-qr {
      display: block;
      width: 200px;
      height: 200px;
      margin: 0 auto;

      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  &__title {
    margin-top: 15px;
    font-family: "Gilroy";
    font-size: 30px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }

  &__text {
    margin-top: 35px;
    margin-bottom: 32px;
    font-family: "Gilroy";
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    border: none;
    background: none;

    cursor: pointer;

    svg {
      rect {
        fill: #000;
        opacity: 1;
      }
      path {
        fill: #fff;
      }
    }

    &:hover {
      svg {
        rect {
          fill: #444;
          opacity: 0.7;
        }

        path {
          fill: #fff;
        }
      }
    }
  }

  &__wrapper {
    padding: 40px 44px 56px 44px;
    box-sizing: border-box;
    border-radius: 40px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 50%;

    max-width: 500px;

    z-index: 5;

    transform: translate(50%, -50%);
  }

  @media (max-width: 900px) {
    &__wrapper {
      width: 100%;
      padding: 40px 24px;
      border-radius: 16px;
    }

    &__nick {
      padding: 5px 15px;
    }

    &__close {
      top: 8px;
      right: 0;
    }

    &__title {
      font-size: 18px;
      line-height: 25px;
    }

    &__text {
      font-size: 16px;
      line-height: 22px;
    }

    &__btn {
      width: 100%;
    }
  }
}
</style>
