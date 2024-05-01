<template>
  <div class="user">
    <div v-if="visibleBtn" class="user__container">
      <div class="user__wrapper">
        <a href="/" class="user__link">
          <img src="@/assets/img/I-1.png" />
        </a>
        <p class="user__sleeptery">Sleeptery</p>
      </div>
      <button class="user__btn" @click="switchFormModal">начать</button>
    </div>
    <ImproveLife
      class="user__improve"
      @switchFormModal="switchFormModal"
      ref="improve"
    />
    <CardList class="user__cardlist" />
    <Mission class="user__mission" />
    <Infolist />
    <!-- <Statistic class="user__statistic" /> -->
    <Comments class="user__comments" />
    <Lottery class="user__lottery" @switchFormModal="switchFormModal" @switchTelegrammModal="switchTelegrammModal" />
    <!-- <Partners page="user"/> -->
    <Services class="user__services" />
    <Banner class="user__banner" />
    <Join class="user__join" @switchModal="switchModal" />
    <Result @switchFormModal="switchFormModal" @switchTelegrammModal="switchTelegrammModal" ref="result" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ImproveLife from "@/components/ImproveLife.vue";
import CardList from "@/components/CardList.vue";
import Mission from "@/components/Mission.vue";
import Infolist from "@/components/InfoList.vue";
import Statistic from "@/components/Statistic.vue";
import Comments from "@/components/Comments.vue";
import Lottery from "@/components/Lottery.vue";
import Partners from "@/components/Partners.vue";
import Services from "@/components/Services.vue";
import Banner from "@/components/Banner.vue";
import Join from "@/components/Join.vue";
import Result from "@/components/Result.vue";

@Component({
  components: {
    ImproveLife,
    CardList,
    Mission,
    Infolist,
    Statistic,
    Comments,
    Lottery,
    Partners,
    Services,
    Banner,
    Join,
    Result,
  },
})
export default class UserPage extends Vue {
  visibleBtn = false;

  switchTelegrammModal(name) {
    this.$emit("switchTelegrammModal", name);
  }

  switchFormModal() {
    this.$emit("switchFormModal");
  }

  switchModal() {
    this.$emit("switchModal", false);
  }

  checkElementVisibility() {
    const element = this.$refs.improve.$refs.buttonOne;
    const element2 = this.$refs.result.$refs.buttonTwo;

    if (!element || !element2) {
      return;
    }

    const rect1 = element.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const visibleVertically = rect2.top > windowHeight && rect1.top < 0;

    this.visibleBtn = visibleVertically;
  }

  destroyed() {
    window.removeEventListener("scroll", this.checkElementVisibility);
  }

  mounted() {
    window.addEventListener("scroll", this.checkElementVisibility);
  }
}
</script>

<style scoped lang="scss">
.user {
  /* overflow: auto; */
  position: relative;

  &__container {
    display: none;
  }

  &__improve {
    margin-top: 80px;
    padding: 0 48px;
  }

  &__cardlist {
    margin-top: 80px;
  }

  &__mission {
    margin-top: 120px;
  }

  &__statistic {
    margin-top: 80px;
  }

  &__comments {
    margin-top: 55px !important;
  }

  &__lottery {
    margin-top: 8px;
  }

  &__services {
    margin-top: 80px !important;
  }

  &__banner {
    margin-top: 16px;
  }

  &__join {
    margin-top: 16px;
  }

  @media (max-width: 900px) {
    &__container {
      position: fixed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      width: 100%;
      height: 52px;
      box-sizing: border-box;
      backdrop-filter: blur(25px);
      bottom: 0;
      z-index: 9;
    }

    &__wrapper {
      display: flex;
      align-items: center;
    }

    &__link {
      display: flex;
      align-items: center;
      img {
        width: 36px;
        height: 36px;
        border-radius: 12px;
      }
    }

    &__sleeptery {
      margin-left: 12px;
      font-family: "Gilroy";
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }

    &__btn {
      height: 100%;
      min-width: 150px;

      font-family: "Gilroy";
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;

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

    &__improve {
      /* margin-top: 90vw; */
      margin-top: 0;
      padding: 0 8px 15px 8px;
    }

    &__cardlist {
      margin-top: 50px;
    }

    &__mission {
      margin-top: 20px;
    }

    &__statistic {
      margin-top: 64px;
    }

    &__comments {
      margin-top: 35px !important;
    }

    &__lottery {
      margin-top: 2px;
    }

    &__services {
      margin-top: 60px !important;
    }
  }
}
</style>
