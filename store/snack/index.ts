import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import {ISnack} from "~/store/snack/ISnack";
import {snackType} from "~/store/snack/snackType";
import {DtoSnack} from "~/store/snack/dto.snack";

const SHOW_TIME = 2000

const defaultSnackValue = {
  isVisible: false,
  message: '',
  type: 'info' as snackType,
}

export const useSnackStore = defineStore('snack', () => {
  const snack = ref<ISnack>({...defaultSnackValue})

  let timer: ReturnType<typeof setTimeout>

  const setSnack = (value: DtoSnack) => {
    clearTimeout(timer)
    snack.value = {...value,isVisible: true}
    timer = setTimeout(() => hiddeSnack(), SHOW_TIME)
  }

  const hiddeSnack = () => {
    snack.value = {...defaultSnackValue}
  }

  const getSnack = computed(() => {
    return snack
  })
  return {
    setSnack,
    getSnack
  }
})
