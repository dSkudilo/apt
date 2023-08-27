<template>
  <transition name="fade">
    <div class="modal__back" @click="closeModal" v-show="isVisible">
      <div class="modal" @click.stop>
        <button class="modal__close" @click="closeModal">X</button>
        <slot/>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref, watchEffect} from "vue";
const emit = defineEmits(['update:modelValue'])
interface IProps {
  modelValue: boolean,
  closeRoute?: string,
}
const props = withDefaults(defineProps<IProps>(),{
  modelValue: false,
})
const isVisible = ref()
const router = useRouter()
const closeModal = () => {
  if (props.closeRoute) {
    router.push(props.closeRoute)
    return
  }
  emit('update:modelValue', false)
}
watchEffect(() => {
  isVisible.value = props.modelValue
})
</script>
<style lang="scss" scoped>
.modal {
  padding: 20px;
  background-color: $white;
  border-radius: 10px;
  position: relative;
  min-width: 300px;
  &__back {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
   }
  &__close {
    position: absolute;
    top: 2px;
    right: 10px;
    border: none;
    background-color: transparent;
    color:$grey-text;
    cursor: pointer;
    transition: color $transition, background-color $transition;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    &:hover{
      color: $primary;
      background-color: rgba(0,0,0,0.3);
    }
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
