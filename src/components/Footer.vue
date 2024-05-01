<template>
  <div class="footer">
    <p class="footer__sleeptery">© 2024 sleeptery</p>
    <ul class="footer__list-link">
      <li class="footer__item-link" v-for="link in links" :key="link.id">
        <a class="footer__link-link" :href="link.href" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
    <!-- <ul class="footer__list-social">
      <li
        class="footer__list-social"
        v-for="social in socials"
        :key="social.id"
      >
        <a class="footer__link-social" :href="social.href"
          ><img :src="social.img"
        /></a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Footer extends Vue {
  links = [
    {
      id: 1,
      title: "Политика обработки данных",
      href: "static/privacy.pdf",
    },
    /* {
      id: 2,
      title: "Условия розыгрышей",
      href: "",
    },
    {
      id: 3,
      title: "Правила сервиса",
      href: "",
    },
    {
      id: 4,
      title: "Справка",
      href: "",
    }, */
  ];

  socials = [
    {
      id: 1,
      name: "youtube",
      href: "",
      img: require("@/assets/img/icons/youtube.svg"),
    },
    {
      id: 2,
      name: "vk",
      href: "",
      img: require("@/assets/img/icons/vk.svg"),
    },
    {
      id: 3,
      name: "telegram",
      href: "",
      img: require("@/assets/img/icons/telegram.svg"),
    },
  ];
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding: 0 40px 37px 40px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;

  z-index: 2;

  &__sleeptery {
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #333;
  }

  &__link-link {
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: #000;

    &:hover {
      opacity: 0.5;
    }
  }

  &__link-social {
    display: flex;
    align-items: center;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  &__list {
    &-link {
      display: flex;
      gap: 24px;
      margin-left: auto;
      /* margin-right: auto; */
    }

    &-social {
      display: flex;
      gap: 24px;
    }
  }

  @media (max-width: 900px) {
    position: initial;
    padding: 0;
    background: #fff;
    justify-content: space-between;
    padding: 0 24px;
    padding-bottom: 24px;

    &__sleeptery {
      order: 2;
      margin-top: 5px;
      font-size: 16px;

      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__link {
      &-link {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    &__list {
      &-link {
        order: 1;
        flex-direction: column;

        width: 100%;
        padding: 35px 0 40px 0;
        gap: 16px;
      }

      &-social {
        order: 3;
      }
    }
  }
}
</style>
