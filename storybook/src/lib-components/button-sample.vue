<template>
  <a v-if="isLink !== false"
    :href="hrefLink"
    class="proj_btn normal"
    :class="{white: isWhite, loading: isLoading && !stopLoader, loader: isLoader}"
    @click="isLoading = true"
  >{{title}} <i class='bx bx-loader-alt' v-if="isLoader"></i></a>
  <button
    v-else
    class="proj_btn normal"
    :class="{normal: isWhite, white: isWhite, loading: isLoading && !stopLoader, loader: isLoader}"
    @click="isLoading = true"
  >{{title}} <i class='bx bx-loader-alt' v-if="isLoader"></i></button>
</template>

<script lang="ts">
import Vue from 'vue';
//import "./utilities.scss";

export default /*#__PURE__*/Vue.extend({
  name: 'ButtonSample',
  data() {
    return {
      isLoading: false,
    };
  },
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
    isLoader: {
      type: Boolean,
      required: false,
      default: false,
    },
    stopLoader: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
:root {
  /* Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue. */
  --baseHslHue: 0;
  /* Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. */
  --baseHslSaturation: 99%;
  /* Lightness is also a percentage; 0% is black, 100% is white. */
  --baseHslLightness: 63%;

  --mainColor: hsl(var(--baseHslHue), var(--baseHslSaturation), var(--baseHslLightness));
  --mainColor-mid: hsl(var(--baseHslHue), calc(var(--baseHslSaturation) - 12%), calc(var(--baseHslLightness) + 14%));
  --mainColor-lighten: hsl(var(--baseHslHue), calc(var(--baseHslSaturation) - 20%), calc(var(--baseHslLightness) + 23%));
  --mainColor-light: hsl(var(--baseHslHue), calc(var(--baseHslSaturation) - 6%), calc(var(--baseHslLightness) + 27%));
  --mainColor-light-body: hsl(var(--baseHslHue), calc(var(--baseHslSaturation) - 40%), calc(var(--baseHslLightness) + 30.5%));

  --color-light-opacity: rgb(85 151 160 / 12%);

  --whiteColor: #f4f4f4;
  --blackColor: #333;
  --greyColor: #f3f3f4;
  --bgButton: #f4f4f4;

  --okColor: #0ccb84;
  --okColor-opacity: #168a2f;

  --dangerColor: #E63757;
  --dangerColor-opacity: hsl(0deg 100% 60% / 38%);

  --warningColor: #e6a937;
  --warningColor-opacity: #bd7e0a;

  --box-shadow: 0px 5px 20px 0.1px rgba(0, 0, 0, 0.1);
  --padding-topPage: 80px;

  --sidebar-color: var(--whiteColor);
  --toggle-color: #DDD;

  --text-color: #707070;
  --light-text: #b6b6b6;

  --specialGrey: #E4E9F7;

  /* ====== Transition ====== */
  --tran-03: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.3s ease;
  --tran-05: all 0.3s ease;

  /* ====== third party colors ====== */
  --blueGoogle: #3d6be1;
  --blueGoogleOpacity: #6B8EE8;

  --blueFacebook: #2D86FF;
}
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
    &.loader {
      position: relative;
      & i {
        opacity: 0;
        margin-left: -1em;
        transition: 0.2s;
      }
      &.loading {
        & i {
          display: block;
          opacity: 1;
          margin-left: 0.6rem;
          animation-name: loading;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @keyframes loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    &.disabled {
      cursor: no-drop;
      background: grey;
      user-select: none;
    }
    &[disabled="true"] {
      cursor: no-drop;
      background: grey;
      user-select: none;
    }
  }
}
</style>
