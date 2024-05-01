<template>
  <div class="modal-form">
    <div class="modal-form__fog"></div>
    <div class="modal-form__wrapper">
      <button
        v-if="step !== 0"
        class="modal-form__close-btn"
        @click="closeModalWithData"
      >
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
      <div class="modal-form__progress" v-if="step !== 12 && step !== 13">
        <svg
          v-if="step !== 0"
          class="modal-form__arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          @click="prevStep(step)"
        >
          <path
            d="M2.875 6.75L7.0625 10.9375L6 12L0 6L6 0L7.0625 1.0625L2.875 5.25H12V6.75H2.875Z"
            fill="grey"
          />
        </svg>

        <svg
          v-else
          @click="closeModal"
          class="modal-form__close"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62126 0.792893C2.23074 0.402369 1.59757 0.402369 1.20705 0.792893C0.816525 1.18342 0.816525 1.81658 1.20705 2.20711L8.58588 9.58594L0.793137 17.3787C0.402613 17.7692 0.402613 18.4024 0.793137 18.7929C1.18366 19.1834 1.81683 19.1834 2.20735 18.7929L10.0001 11.0002L17.7928 18.7929C18.1834 19.1834 18.8165 19.1834 19.207 18.7929C19.5976 18.4024 19.5976 17.7692 19.207 17.3787L11.4143 9.58594L18.7931 2.20711C19.1837 1.81658 19.1837 1.18342 18.7931 0.792893C18.4026 0.402369 17.7694 0.402369 17.3789 0.792893L10.0001 8.17172L2.62126 0.792893Z"
            fill="#AFAFAF"
          />
        </svg>

        <div class="modal-form__line-wrapper">
          <div
            class="modal-form__line"
            :style="`width: ${(100 / 12) * (step + 1)}%`"
          ></div>
        </div>
      </div>
      <div v-if="step === 12"><br /></div>
      <div v-if="step === 13"><br /></div>
      <div class="modal-form__title">
        <p>
          {{ options[step].title }}
        </p>
        <!-- <p
          v-if="loaded"
          :style="`width: ${
            (options[step].title.length - 1) * 14
          }px; margin: 0 auto;`"
        >
          {{ resultText }}
        </p> -->
        <!-- <div class="improve__item message-third" v-else>
          <lottie
            :options="lottieOptions"
            ref="improveAnimation"
            :height="44"
            :width="32"
          />
        </div> -->
      </div>
      <!--    {{ step }} -->
      <div class="modal-form__wrapper-form">
        <div style="width: 100%">
          <FormulateForm
            :class="`modal-form__main modal-form__main-${step}`"
            autocomplete="off"
            v-if="step !== 0 && step !== 12 && step !== 13"
          >
            <div>
              <FormulateInput
                class="modal-form__radio"
                v-model="formModel[options[step].name]"
                :name="options[step].title"
                type="radio"
                :options="options[step].options"
                autocomplete="off"
                @input="checkInputNotEmpty"
              />
            </div>
            <!-- <p class="modal-form__error" v-if="error">Необходимо выбрать ответ</p> -->
          </FormulateForm>
          <div v-if="step === 13">
            <p class="result__title">Осталось только скачать приложение</p>
            <ul class="result__list">
              <li class="result__item" v-for="link in links" :key="link.id">
                <a
                  class="result__link"
                  :href="link.href"
                  @click.prevent="openTelegrammModal(link.name)"
                  target="_blank"
                >
                  <img
                    class="result__img"
                    width="200"
                    height="64"
                    :src="link.img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          v-if="step === 0"
          class="modal-form__btn"
          @click="nextStep(step)"
        >
          {{ btnText }}
        </button>
        <button
          v-else
          class="modal-form__btn"
          :disabled="isButtonDisabled || sendingBtn"
          @click="nextStep(step)"
        >
          {{ btnText }}
        </button>
      </div>
    </div>
    <TelegrammModal
      v-if="telegrammModal"
      @switchTelegrammModal="switchTelegrammModal"
      @switchFormModal="closeModal"
      @closeModal="closeModal"
      :formModel="formModel"
      :btnName="btnName"
    />
  </div>
</template>

<script>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import TelegrammModal from "@/components/TelegrammModal.vue";

@Component({
  components: {
    TelegrammModal,
  },
})
export default class FormModal extends Vue {
  @Prop({ type: Boolean, default: false }) openModal;
  step = 0;
  maxSteps = 12;
  error = false;
  isButtonDisabled = true;
  telegrammModal = false;
  btnName = "";
  sendingBtn = false;

  links = [
    {
      id: 1,
      img: require("@/assets/img/apple.png"),
      name: "apple",
      href: "",
    },
    {
      id: 2,
      img: require("@/assets/img/google.png"),
      name: "google",
      href: "",
    },
  ];

  options = [
    {
      title: "ну что начнем?",
    },
    {
      title: "Прежде всего, какой твой возраст",
      name: "old",
      options: {
        "0-17": "0-17",
        "18-24": "18-24",
        "25-34": "25-34",
        "35-44": "35-44",
        "45+": "45+",
      },
    },
    {
      title: "И укажи свой пол",
      name: "gender",
      options: {
        М: "М",
        Ж: "Ж",
        "Предпочитаю не отвечать": "Предпочитаю не отвечать",
      },
    },
    {
      title: "Чем ты занимаешься?",
      name: "work",
      options: {
        "Я работаю": "Я работаю",
        "Я учусь": "Я учусь",
        "Я делаю что-то другое": "Я делаю что-то другое",
        "Предпочитаю не отвечать": "Предпочитаю не отвечать",
      },
    },
    {
      title: "Давай определимся с целью - что ты хочешь от своего сна:",
      name: "target",
      options: {
        "Повысить иммунитет": "Повысить иммунитет",
        "Больше энергии каждый день": "Больше энергии каждый день",
        "Спать и выигрывать призы": "Спать и выигрывать призы",
        "Справиться с лишним весом": "Справиться с лишним весом",
        "Просыпаться без будильника": "Просыпаться без будильника",
      },
    },
    {
      title: "Сколько часов ты обычно спишь?",
      name: "sleepHours",
      options: {
        "0-4": "0-4",
        "4-6": "4-6",
        "6-8": "6-8",
        "8+": "8+",
      },
    },
    {
      title: "Оцените свой обычный сон",
      name: "raiting",
      options: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
    {
      title: "Измеряешь свой сон с помощью носимых девайсов?",
      name: "control",
      options: {
        да: "да",
        "не регулярно": "не регулярно",
        нет: "нет",
      },
    },
    {
      title: "Какое устройство используется для измерения?",
      name: "device",
      options: {
        "Apple watch": "Apple watch",
        "Samsung Watch": "Samsung Watch",
        OURA: "OURA",
        Garmin: "Garmin",
        Xiaomi: "Xiaomi",
        Другое: "Другое",
      },
    },
    {
      title: "Как ты обычно засыпаешь?",
      name: "raitingToSleep",
      options: {
        "Вообще без проблем": "Вообще без проблем",
        "Обычно легко": "Обычно легко",
        "Не так то просто…": "Не так то просто…",
        "У меня бессонница": "У меня бессонница",
      },
    },
    {
      title: "Как часто просыпаешься среди ночи?",
      name: "deepOfSleep",
      options: {
        никогда: "никогда",
        иногда: "иногда",
        часто: "часто",
        "каждую ночь": "каждую ночь",
      },
    },
    {
      title:
        "Как часто чувствуешь себя свежим и энергичным после того как проснулся?",
      name: "raitingAfterSleep",
      options: {
        никогда: "никогда",
        иногда: "иногда",
        часто: "часто",
        "каждый раз": "каждый раз",
      },
    },
    {
      title: "Сохранять мотивацию бывает нелегко…",
    },
    {
      title:
        "Именно поэтому мы превратим сон в полезную привычку по науке, весело и эффективно",
    },
  ];

  formModel = {};

  async closeModalWithData() {
    if (Object.keys(this.formModel).length) {
      let res = await this.axios({
        method: "post",
        url: `https://script.google.com/macros/s/1AKfycbxDmHIAMSAPX0Wi2SHV0n-lx759AhTfPEJ-rsb-2UTmVsh9UcapNSvqXHP937GcCE9R/exec?p2=${this.formModel.old}&p3=${this.formModel.gender}&p4=${this.formModel.work}&p5=${this.formModel.target}&p6=${this.formModel.sleepHours}&p7=${this.formModel.raiting}&p8=${this.formModel.control}&p9=${this.formModel.device}&p10=${this.formModel.raitingToSleep}&p11=${this.formModel.deepOfSleep}&p12=${this.formModel.raitingAfterSleep}`,
        /* data: bodyFormData, */
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res && res.data) {
        this.formModel = {};
      }
    }
    this.step = 0;
    this.closeModal();
  }

  switchTelegrammModal(name) {
    this.telegrammModal = !this.telegrammModal;
    this.btnName = name;

    if (this.telegrammModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  openTelegrammModal(name) {
    dataLayer.push({
      event: "step_12_download",
      eventCategory: "form_steps",
      eventAction: "click",
      eventLabel: "step_12_download",
    });

    console.log("step_12_download");
    this.telegrammModal = !this.telegrammModal;
    this.btnName = name;
  }

  /* lottieOptions = {
    animationData: require("@/assets/animation/loader.json"),
    autoplay: true,
  };
  loaded = true;
  start = 0;
  speed = 50;
  text = "";
  resultText = "";
  timer = "";
  timerId = ""; */

  checkInputNotEmpty() {
    if (this.formModel[this.options[this.step].name]) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  /* async printSmbl() {
    let timeout = 50;
    this.text = this.options[this.step].title;
    this.resultText += this.text[this.start];
    this.start++;
    this.loaded = true;
    if (this.start < this.text.length) {
      this.timer = setTimeout(this.printSmbl, timeout);
    }
  } */

  /* @Watch("step")
  onStepChange() {
    clearTimeout(this.timerId);
    clearTimeout(this.timer);
    this.start = 0;
    this.loaded = false;
    this.resultText = "";
    this.timerId = setTimeout(() => {
      this.loaded = true;
      setTimeout(this.printSmbl, 100);
    });
  } */

  /* @Watch("openModal")
  onModalOpen() {
    clearTimeout(this.timerId);
    clearTimeout(this.timer);
    this.start = 0;
    this.loaded = false;
    this.resultText = "";
    this.timerId = setTimeout(() => {
      this.loaded = true;
      setTimeout(this.printSmbl, 100);
    });
  } */

  get btnText() {
    if (this.step === 12) {
      return "Есть такое";
    }
    if (this.step === 13) {
      return this.sendingBtn ? "Отправляем..." : "Закрыть";
    }
    if (this.step === 0) {
      return "Давай";
    }

    return "Дальше";
  }

  closeModal() {
    this.step = 0;
    this.formModel = {};
    this.$emit("switchFormModal");
  }

  prevStep(step) {
    if (this.step === 9 && this.formModel["control"] === "нет") {
      this.step -= 2;
    } else {
      this.step--;
    }
  }

  sendMetrik() {
    /* window.dataLayer = window.dataLayer || []; */
    console.log(dataLayer);
    if (this.step === 1) {
      dataLayer.push({
        event: "step_1_age",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_1_age",
      });

      console.log("step_1_age");
    }

    if (this.step === 2) {
      dataLayer.push({
        event: "step_2_sex",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_2_sex",
      });

      console.log("step_2_sex");
    }

    if (this.step === 3) {
      dataLayer.push({
        event: "step_3_work",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_3_work",
      });

      console.log("step_3_work");
    }

    if (this.step === 4) {
      dataLayer.push({
        event: "step_4_sleep_goal",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_4_sleep_goal",
      });

      console.log("step_4_sleep_goal");
    }

    if (this.step === 5) {
      dataLayer.push({
        event: "step_5_how_long_sleep",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_5_how_long_sleep",
      });

      console.log("step_5_how_long_sleep");
    }

    if (this.step === 6) {
      dataLayer.push({
        event: "step_6_rate_ur_sleep",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_6_rate_ur_sleep",
      });

      console.log("step_6_rate_ur_sleep");
    }

    if (this.step === 7) {
      dataLayer.push({
        event: "step_7_sleep_devices",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_7_sleep_devices",
      });

      console.log("step_7_sleep_devices");
    }

    if (this.step === 8) {
      dataLayer.push({
        event: "step_7-1_sleep_devices",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_7-1_sleep_devices",
      });

      console.log("step_7-1_sleep_devices");
    }

    if (this.step === 9) {
      dataLayer.push({
        event: "step_8_how_u_sleep",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_8_how_u_sleep",
      });

      console.log("step_8_how_u_sleep");
    }

    if (this.step === 10) {
      dataLayer.push({
        event: "step_9_night_wake_up",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_9_night_wake_up",
      });

      console.log("step_9_night_wake_up");
    }

    if (this.step === 11) {
      dataLayer.push({
        event: "step_10_fresh_man",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_10_fresh_man",
      });

      console.log("step_10_fresh_man");
    }

    return;
  }

  async nextStep(step) {
    this.sendMetrik();

    if (step === 0) {
      dataLayer.push({
        event: "form_start",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "form_start",
      });
      console.log(step, "form_start");
      this.step++;
      return;
    }

    if (step === 13) {
      dataLayer.push({
        event: "download_form_submit",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "submit",
      });

      console.log("download_form_submit");
      this.sendingBtn = true;
      let res = await this.axios({
        method: "post",
        url: `https://script.google.com/macros/s/1AKfycbxDmHIAMSAPX0Wi2SHV0n-lx759AhTfPEJ-rsb-2UTmVsh9UcapNSvqXHP937GcCE9R/exec?p2=${this.formModel.old}&p3=${this.formModel.gender}&p4=${this.formModel.work}&p5=${this.formModel.target}&p6=${this.formModel.sleepHours}&p7=${this.formModel.raiting}&p8=${this.formModel.control}&p9=${this.formModel.device}&p10=${this.formModel.raitingToSleep}&p11=${this.formModel.deepOfSleep}&p12=${this.formModel.raitingAfterSleep}`,
        /* data: bodyFormData, */
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res && res.data) {
        this.sendingBtn = false;
        this.formModel = {};
      }

      this.isButtonDisabled = true;
      this.step = 0;
      this.closeModal();
      return;
    }

    if (step === 12) {
      this.$emit("sendData", this.formModel);
      dataLayer.push({
        event: "step_11_motivation",
        eventCategory: "form_steps",
        eventAction: "click",
        eventLabel: "step_11_motivation",
      });

      console.log(step, "step_11_motivation");
      this.step++;
    }

    if (
      step !== 0 &&
      step !== 12 &&
      step !== 13 &&
      this.formModel[this.options[step].name]
    ) {
      if (this.step === 7 && this.formModel["control"] === "нет") {
        this.step += 2;

        return;
      }
      this.step++;
      this.error = false;
      return;
    } else {
      this.error = true;
    }
  }
}
</script>

<style scoped lang="scss">
.message-third {
  width: fit-content !important;
  margin: 0 auto;

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
}
.modal-form {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 4;

  &__close {
    cursor: pointer;
    margin-right: 16px;
    path {
      fill: rgba(221, 221, 221, 1);
    }

    &:hover {
      path {
        fill: #000;
      }
    }

    &-btn {
      position: absolute;
      top: 33px;
      right: 5px;
      border: none;
      background: none;

      cursor: pointer;

      svg {
        rect {
          fill: #000;
          opacity: 1;
        }
        path {
          fill: rgb(221, 221, 221);
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
  }

  &__error {
    margin-top: 10px;
    padding: 0;
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    text-align: center;

    color: red;
  }

  &__fog {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/img/night-bg.png");
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  &__title {
    p {
      /* max-width: 100%; */
      /* font-family: "Gilroy";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; */
      font-family: "Gilroy";
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
      /* min-height: 30px; */

      color: #fff;

      text-align: center;

      /* padding: 18px 24px; */

      /* border-radius: 40px;
      background: linear-gradient(
        90deg,
        #ffee94 1.23%,
        #ffb8b8 65.43%,
        #ffa4ba 98.5%
      );
      box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3); */
    }
  }

  &__progress {
    display: flex;
    align-items: center;
    padding-right: 25px;
  }

  &__line {
    border-radius: 16px;
    border: 1px solid #2ad9ff;
    background: #007aff;
    height: 100%;
    box-sizing: border-box;

    &-wrapper {
      width: 100%;
      height: 16px;
      border-radius: 16px;
      background: rgba(221, 221, 221, 1);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
        0px 8px 12px 6px rgba(0, 0, 0, 0.15);
    }
  }

  &__arrow {
    margin-right: 16px;
    width: 18px;
    height: 18px;

    cursor: pointer;

    path {
      fill: rgba(221, 221, 221, 1);
    }

    &:hover {
      path {
        fill: #000;
      }
    }
  }

  &__exit {
    background: inherit;
  }

  &__radio {
    display: flex;
    justify-content: center;
  }

  &__btn {
    padding: 23px 56px;
    align-self: center;
    margin: 0 auto;
    margin-top: 50px;
    box-sizing: border-box;

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

    &:disabled {
      color: #0064cd;
      box-shadow: none;
      border: 1px solid #007aff;

      &:hover {
        background: #007aff;
        box-shadow: none;
      }
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 44px 40px 44px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 50%;
    height: 100%;
    width: 100%;
    max-width: 1440px;

    z-index: 5;

    transform: translate(50%, -50%);

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 900px) {
    &__error {
      padding: 0;
      font-size: 17px;
    }

    &__wrapper {
      width: 100%;
      padding: 40px 24px;
      border-radius: 16px;
    }

    &__line {
      &-wrapper {
        height: 11px;
      }
    }

    &__btn {
      margin-top: 25px;
      padding: 14px 77px;
      font-size: 16px;
      line-height: 140%;
    }

    &__wrapper {
      padding-bottom: 60px;
    }

    &__title {
      p {
        /* width: 100% !important;
        border-radius: 24px;
        padding: 7px; */

        /* font-size: 21px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.84px; */

        text-align: center;

        font-size: 25px;
        font-weight: 500;
        line-height: 140%;

        /* box-sizing: border-box; */
      }
    }
  }
}

.result {
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

  &__item {
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 900px) {
    &__title {
      padding-top: 40px;

      font-size: 32px;
      line-height: 38px;
      letter-spacing: -0.03em;
      text-align: center;
    }

    &__list {
      gap: 8px;
    }

    &__link {
      img {
        width: 154px;
        height: 49px;
      }
    }
  }
}
</style>

<style lang="scss">
.modal-form__main {
  .formulate-input-element {
    input {
      display: none;
    }
  }

  .formulate-input-wrapper {
    width: 35%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .formulate-input-group-item {
    margin-top: 10px;
    padding: 15px 20px;
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    align-self: center;

    cursor: pointer;

    box-sizing: border-box;

    min-width: 100%;
    min-height: 50px;
    background: #fff;
    color: #000;
    border-radius: 16px;

    box-shadow: 0px 3px 3px 0px rgba(19, 0, 133, 0.6);

    .formulate-input-wrapper {
      width: 100%;
      height: 50px;

      label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        cursor: pointer;
      }
    }

    &[data-has-value] {
      background: rgba(0, 77, 226, 1);
      color: #fff;
    }

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 900px) {
      font-size: 20px;
      padding: 0;
    }
  }

  /*  step 6 */
  &-6 {
    .formulate-input-wrapper {
      width: 100%;

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    .formulate-input-element--group {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .formulate-input-group-item {
      min-width: calc(100% / 5 - 60px);
      min-height: 80px;

      .formulate-input-wrapper {
        width: 100%;
        height: 80px;

        @media (max-width: 900px) {
          height: 50px;
        }

        label {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      @media (max-width: 900px) {
        min-width: calc(100% / 5 - 16px);
        font-size: 20px;
        padding: 0;
        min-height: 50px;
      }
    }
  }
}
</style>
