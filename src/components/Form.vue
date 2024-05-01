<template>
  <div class="form">
    <FormulateForm
      class="form__main"
      autocomplete="off"
      @submit="submitForm"
      name="question"
    >
      <div>
        <FormulateInput
          class="form__fio"
          v-model="formMailings.fio"
          name="fio"
          label="Ваше имя"
          type="text"
          validation="required"
          :validation-messages="{
            required: 'Это поле обязательно',
          }"
          autocomplete="off"
        />
        <FormulateInput
          v-if="modal"
          class="form__email"
          v-model="formMailings.company"
          name="company"
          type="text"
          label="Компания"
          validation="required"
          :validation-messages="{
            required: 'Это поле обязательно',
          }"
          autocomplete="off"
        />
        <FormulateInput
          v-if="modal"
          class="form__email"
          v-model="formMailings.phone"
          name="phone"
          type="text"
          label="Телефон"
          v-mask="`+7(###) ###-##-##`"
          validation="^required|min:17"
          :validation-messages="{
            required: 'Это поле обязательно',
            min: 'Введите верный телефон',
          }"
          autocomplete="off"
        />
        <FormulateInput
          class="form__email"
          v-model="formMailings.email"
          name="email"
          type="text"
          label="Email"
          validation="^required|email"
          :validation-messages="{
            required: 'Это поле обязательно',
            email: 'Введите реальный email',
          }"
          autocomplete="off"
        />
        <FormulateInput
          v-if="!modal"
          class="form__comment"
          v-model="formMailings.comment"
          name="comment"
          type="textarea"
          :label="modal ? 'Сообщение' : 'Вопрос...'"
          :validation="modal ? '' : 'required'"
          :validation-messages="{
            required: 'Это поле обязательно',
          }"
          autocomplete="off"
        />
        <FormulateInput
          class="form__checkbox"
          v-model="formMailings.checkbox"
          name="checkbox"
          type="checkbox"
          :label="labelCheckbox"
          validation="required"
          :validation-messages="{
            required: 'Ваше согласие обязательно',
          }"
        >
          <template #label="{ label, id }">
            <label :for="id" v-html="label" class="formulate-input-label">
            </label>
          </template>
        </FormulateInput>
      </div>
      <span v-if="!sendingBtn"><slot name="btn"></slot></span>
      <button v-if="sendingBtn" style="opacity: 0.5" class="form__btn" disabled>
        Отправка...
      </button>
    </FormulateForm>
    <div v-if="sended && !modal" @click="sended = false" class="form__success">
      <p class="form__success-text">Вопрос отправлен!</p>
      <button class="form__btn" @click="sended = false">Хорошо</button>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Form extends Vue {
  @Prop({ type: Boolean, default: false }) modal;

  labelCheckbox = `Я соглашаюсь с <a href="static/privacy.pdf" target="_blank">условиями обработки персональных данных</a>`;
  formMailings = {};
  sendingBtn = false;
  sended = false;

  async submitForm() {
    this.sendingBtn = true;
    let page =
      this.$router.history.current.name === "user"
        ? "user"
        : this.modal
        ? "business-join"
        : "business";
    if (this.modal) {
      let res = await this.axios({
        method: "post",
        url: `https://script.google.com/macros/s/1AKfycbxF7O4QnbWBZoj-FZ3s_b_CeNA04CxU4vNnpp_HUDH-lMMpP_ndoTZ5yBQJlTkzAirccg/exec?p1=${this.formMailings.fio}&p2=${this.formMailings.company}&p3=${this.formMailings.phone}&p4=${this.formMailings.email}&p5=${this.formMailings.comment}&p6=${page}`,
        /* data: bodyFormData, */
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res && res.data) {
        this.sendingBtn = false;
        this.sended = true;
        this.$emit("switchModal");
        this.formMailings = {};
        this.$formulate.reset("question");
      }
    } else {
      let res = await this.axios({
        method: "post",
        url: `https://script.google.com/macros/s/1AKfycbxF7O4QnbWBZoj-FZ3s_b_CeNA04CxU4vNnpp_HUDH-lMMpP_ndoTZ5yBQJlTkzAirccg/exec?p1=${this.formMailings.fio}&p2=${this.formMailings.company}&p3=${this.formMailings.phone}&p4=${this.formMailings.email}&p5=${this.formMailings.comment}&p6=${page}`,
        /* data: bodyFormData, */
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res && res.data) {
        this.sendingBtn = false;
        this.sended = true;
        this.$emit("switchModal");
        this.formMailings = {};
        this.$formulate.reset("question");
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  &__fio,
  &__email,
  &__comment {
    .formulate-input-errors {
      font-family: "Gilroy";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 115%;
      color: #e05058;
      text-align: left;
    }

    .formulate-input-wrapper {
      position: relative;
      padding: 14px 12px 11px 14px;
      border-radius: 16px;
      border: 1px solid #838383;
      box-sizing: border-box;
      min-height: 48px;

      @media (max-width: 900px) {
        min-height: 45px;
      }

      input,
      textarea {
        width: 100%;
        padding: 0;
        border: none;
        background: #fff;
        color: #636363;
      }

      &:hover {
        border-color: #92c6ff;
        input,
        textarea {
          outline: none;
        }
      }

      &:focus-within {
        border-color: #007aff;
        input,
        textarea {
          color: #2e2e2e;
          outline: none;
        }
      }

      .formulate-input-label {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        transition: top 0.3s, font-size 0.3s;
        font-family: "Gilroy";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        color: #636363;
        background: #fff;
        padding: 1px;

        cursor: text;
      }

      &:focus-within .formulate-input-label {
        top: 0;
        cursor: default;
        font-size: 12px;
      }

      &:hover .formulate-input-label {
        color: #007aff;
      }
    }

    &[data-has-value] {
      .formulate-input-label {
        top: 0;
        cursor: default;
        font-size: 12px;
      }

      input,
      textarea {
        color: #000;
      }
    }

    &[data-is-showing-errors] {
      .formulate-input-label {
        top: 0;
        cursor: default;
        font-size: 12px;
        color: #e05058;
      }

      .formulate-input-wrapper {
        border-color: #e05058;
      }
    }
  }

  &__comment {
    .formulate-input-wrapper {
      min-height: 120px;

      .formulate-input-label {
        top: 23px;
      }

      textarea {
        min-height: 90px;
        resize: vertical;
      }
    }

    &[data-is-showing-errors] {
      .formulate-input-label {
        top: 0 !important;
        cursor: none !important;
      }
    }

    &[data-has-value] {
      .formulate-input-label {
        top: 0;
        cursor: default;
      }
    }
  }

  &__checkbox {
    &[data-is-showing-errors] {
      input ~ label {
        border: 1px solid #e05058;
      }
    }
    .formulate-input-errors {
      font-family: "Gilroy";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 115%;
      color: #e05058;
      text-align: left;
    }

    .formulate-input-wrapper {
      display: flex;

      .formulate-input-label {
        font-family: "Gilroy";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;

        @media (max-width: 900px) {
          font-size: 12px;
        }

        a {
          text-decoration-line: underline;
        }
      }
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input ~ label {
      background: #fff;
      border: 1px solid #838383;
      width: 16px;
      height: 16px;
      display: block;
      border-radius: 3px;
      margin-right: 8px;
      box-sizing: border-box;

      cursor: pointer;
    }

    input:checked ~ label {
      background: #fff;
      border: 1px solid #838383;
      width: 16px;
      height: 16px;
      box-sizing: border-box;

      &::before {
        content: "\E802";
        font-family: "fontello";
        position: relative;
        left: 1px;
        top: -4px;
        width: 9px;
        font-size: 12px;
      }
    }
  }
}
</style>

<style scoped lang="scss">
.form {
  position: relative;

  &__success {
    width: 100%;
    height: 102%;
    background: #fff;
    position: absolute;
    top: -6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-text {
      font-family: "Gilroy";
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      color: #000;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__btn {
    margin-top: 16px;
    border: none;
    width: 100%;
    padding: 6.5px 32px;

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    color: #fff;

    border-radius: 12px;
    background: #000;

    cursor: pointer;

    /* opacity: 0.5; */

    &:hover {
      background: #444;
    }

    @media (max-width: 900px) {
      &__btn {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0em;
      }
    }
  }

  &__email {
    margin-top: 20px;
  }

  &__comment {
    margin-top: 20px;
  }

  &__checkbox {
    margin-top: 36px;

    @media (max-width: 900px) {
      margin-top: 33px;
    }
  }
}
</style>
