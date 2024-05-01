<template>
  <div class="modal">
    <div class="modal__fog" @click="closeModal"></div>
    <div class="modal__wrapper">
      <h2 class="modal__title" v-if="modal">Заявка на подключение sleeptery</h2>
      <p class="modal__text" v-if="modal">Заполните поля и мы свяжемся с вами</p>
      <div class="modal__join" v-if="!modal">
        <img class="modal__join-img" src="@/assets/img/icons/letter.svg" />
        <p class="modal__join-inform">
          Наша поддержка работает только днем, потому что ночью мы спим и вам
          рекомендуем
        </p>
      </div>
      <Form :modal="modal" @switchModal="closeModal" :join="modal">
        <button slot="btn" type="submit" class="modal__btn">Отправить</button>
      </Form>
      <button class="modal__close" @click="closeModal">
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
import Form from "@/components/Form.vue";

@Component({
  components: {
    Form,
  },
})
export default class Modal extends Vue {
  @Prop({ type: Boolean, default: true }) modal;
  
  closeModal() {
    this.$emit("switchModal");
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 4;

  &__join {
    display: none;

    &-inform {
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      margin-left: 15px;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

      max-width: 400px;
    }

    &-img {
      width: 70px;
      height: 56px;
    }

    @media (max-width: 900px) {
      display: flex;
      margin-bottom: 17px;
    }
  }

  &__fog {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(102, 102, 102, 0.6);
  }

  &__title {
    font-family: "Gilroy";
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }

  &__text {
    margin-top: 8px;
    margin-bottom: 32px;

    font-family: "Gilroy";
    font-size: 18px;
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
  }

  &__wrapper {
    padding: 40px 44px 56px 44px;
    box-sizing: border-box;
    border-radius: 40px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 50%;

    z-index: 5;

    transform: translate(50%, -50%);
  }

  @media (max-width: 900px) {
    &__wrapper {
      width: 100%;
      padding: 40px 24px;
      border-radius: 16px;
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
