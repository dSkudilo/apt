<template>
  <transition name="fade">
    <div
        class="snack"
        v-if="snack.isVisible"
        :class="getSnackClass(snack.type)"
    >
      {{snack.message}}
    </div>
  </transition>
</template>
<script setup lang="ts">
import {useSnackStore} from "~/store/snack";
import {snackType} from "~/store/snack/snackType";

const store = useSnackStore()
const snack = store.getSnack

const getSnackClass = (type:snackType) => {
  return `snack_${type}`
}
</script>
<style lang="scss" scoped>
.snack {
  position: fixed;
  bottom: 5px;
  left: 5px;
  padding: 10px 16px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  &_success{
    background-color: $success;
  }
  &_error{
    background-color: $error;
  }
  &_info{
    background-color: $info;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
