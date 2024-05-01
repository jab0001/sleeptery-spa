<template>
  <div class="accordion-item">
    <div :class="[show ? 'header header-open' : 'header']" v-on:click="toggle">
      <slot name="header"></slot>
      <div class="accordion-icon">
        <img :src="show ? arrowUp : arrowDown" />
      </div>
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="body" v-show="show">
        <div class="body-inner">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component()
export default class AccordionItem extends Vue {
  @Prop({ type: String, default: "" }) page;
  show = false;

  arrowUp = require("@/assets/img/icons/arrowUp.svg");
  arrowDown = require("@/assets/img/icons/arrowDown.svg");

  toggle() {
    this.show = !this.show;
  }

  beforeEnter(el) {
    el.style.height = "0";
  }

  enter(el) {
    el.style.height = el.scrollHeight + "px";
  }

  beforeLeave(el) {
    el.style.height = el.scrollHeight + "px";
  }

  leave(el) {
    el.style.height = "0";
  }
}
</script>

<style lang="scss" scoped>
.accordion-item {
  width: 100%;
  box-sizing: border-box;
}

.accordion-icon {
  display: flex;
  align-items: center;
}

.accordion-item .header {
  display: flex;
  justify-content: space-between;
  padding: 31px 0;

  cursor: pointer;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 16px 0;
  }

  h3 {
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    @media (max-width: 900px) {
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}

.accordion-item .header-open {
  padding-bottom: 24px;

  @media (max-width: 900px) {
    padding-bottom: 15px;
  }
}

.accordion-item .body {
  overflow: hidden;
  background-color: #fff;
  transition: 150ms ease-out;

  font-family: "Gilroy";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
}

.accordion-item .body-inner {
  padding-right: 8px;
  padding-bottom: 32px;
  overflow-wrap: break-word;

  @media (max-width: 900px) {
    padding-right: 0;
  }
}
</style>
