<template>
  <div class="business">
    <BusinessBanner @switchModal="openModal" />
    <CardList class="business__card-list" page="business" />
    <Mission class="business__mission" page="business" />
    <Services class="business__services" page="business" />
    <Banner class="business__banner" page="business" :number="1" />
    <!-- <Comments class="business__comments" page="business" />
    <Partners class="business__partners" page="business" /> -->
    <Join class="business__join" @switchModal="switchModal"/>
    <Result class="business__result" page="business" @switchModal="openModal" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import CardList from "@/components/CardList.vue";
import BusinessBanner from "@/components/BusinessBanner.vue";
import Mission from "@/components/Mission.vue";
import Services from "@/components/Services.vue";
import Banner from "@/components/Banner.vue";
import Partners from "@/components/Partners.vue";
import Comments from "@/components/Comments.vue";
import Join from "@/components/Join.vue";
import Result from "@/components/Result.vue";

@Component({
  components: {
    CardList,
    BusinessBanner,
    Mission,
    Services,
    Banner,
    Partners,
    Comments,
    Join,
    Result,
  },
})
export default class BusinessPage extends Vue {
  openModal() {
    this.$emit("switchModal", true);
  }

  switchModal() {
    this.$emit("switchModal", false);
  }
}
</script>

<style scoped lang="scss">
.business {
  &__card-list {
    margin-top: 40px;
  }

  &__services {
    position: relative;
    z-index: 3;
  }

  &__banner {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* &__comments {
    margin-top: 90px;
  } */

  &__join {
    margin-top: 5px;
  }

  @media (max-width: 900px) {
    &__card-list {
      margin-top: 67px;
    }

    &__banner {
      margin-top: 80px;
    }

    &__join {
      margin-top: 64px;
    }
  }
}
</style>
