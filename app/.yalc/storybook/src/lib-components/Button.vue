<template>
  <button v-if="isLink && isLink === false" :class="isWhite === true ? 'proj_btn normal white' : 'proj_btn'">{{title}}</button>
  <a v-else :href="hrefLink" :class="isWhite === true ? 'proj_btn white normal' : 'proj_btn normal'">{{title}}</a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {
    title: {
      type: String,
      required: true,
    },
    isLink: {
      type: Boolean,
      required: true,
    },
    hrefLink: {
      type: String,
      required: false,
    },
    isExternal: {
      type: Boolean,
      required: false,
    },
    isWhite: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.proj_btn {
  &.normal {
    height: 35px;
    padding: 0px 35px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    appearance: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    background: var(--mainColor);
    transition: 0.25s;
    color: var(--whiteColor);
    display: flex;
    align-items: center;
    justify-content: center;
    &.white {
      color: var(--mainColor);
      background: var(--bgButton);
      border: 1px solid var(--mainColor);
      box-shadow: var(--box-shadow);
      &:hover {
        color: var(--whiteColor);
        background: var(--mainColor);
        & i {
          color: var(--whiteColor);
        }
      }
      & i {
        color: var(--mainColor);
        user-select: none;
      }
    }
    & i {
      color: var(--whiteColor);
      user-select: none;
    }
    &:hover {
      filter: contrast(1.7) brightness(0.9);
    }
  }
}
</style>
