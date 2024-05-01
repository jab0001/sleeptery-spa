<template>
  <div class="join">
    <div class="join__wrapper-accordion">
      <h2 class="join__title">Частые вопросы</h2>
      <AccordionList />
    </div>
    <div class="join__wrapper-form">
      <img class="join__img" src="@/assets/img/icons/letter.svg" />
      <p class="join__inform">
        Наша поддержка работает только днем, потому что ночью мы спим и вам советуем
      </p>
      <Form class="desktop">
        <button slot="btn" type="submit" class="join__btn">
          Задать вопрос
        </button>
      </Form>
      <button class="join__btn desktop-mobile-btn" @click="switchModal">Задать вопрос</button>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AccordionList from "@/components/Accordion/AccordionList.vue";
import Form from "@/components/Form.vue";

@Component({
  components: {
    AccordionList,
    Form,
  },
})
export default class Join extends Vue {
  switchModal() {
    this.$emit('switchModal');
  }
}
</script>

<style scoped lang="scss">
.desktop {
  &-mobile-btn {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;

    &-mobile-btn {
      display: block;
      margin-top: 0 !important;
    }
  }
}
.join {
  display: flex;
  justify-content: space-between;

  width: 98%;
  margin: 0 auto;
  background: #fff;
  border-radius: 40px;
  padding: 8.3vw 11vw;
  box-sizing: border-box;

  &__title {
    margin-bottom: 30px;
    font-family: "Gilroy";
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.44px;
  }

  &__inform {
    margin-top: 25px;
    margin-bottom: 35px;

    /* padding: 3px 37px 0 37px; */

    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
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

    &:hover {
      background: #444;
    }
  }

  &__wrapper {
    &-accordion {
      width: 64%;
    }

    &-form {
      width: 30%;
      padding: 3px 2.4vw 32px 2.6vw;
      box-sizing: border-box;

      @media (min-width: 1500px) {
        padding: 0;
      }
    }
  }

  @media (max-width: 900px) {
    width: 96%;
    flex-direction: column;
    padding: 0;

    &__wrapper {
      &-accordion {
        width: 100%;
        padding: 40px 16px 24px 16px;
        box-sizing: border-box;
      }

      &-form {
        width: 100%;
        padding: 20px 16px 35px 16px;
        padding-top: 0;

        img {
          width: 70px;
          height: 56px;
        }
      }
    }

    &__title {
      margin-bottom: 15px;

      font-size: 32px;
      line-height: 38px;
      letter-spacing: -0.03em;
      text-align: center;
    }

    &__inform {
      display: none;
      margin-top: 10px;
      margin-bottom: 17px;

      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__img {
      display: none;
    }

    &__btn {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0em;
    }
  }
}
</style>
