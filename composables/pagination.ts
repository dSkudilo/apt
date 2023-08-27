import {computed, Ref, ref} from "vue";

export function pagination <T>(arr: Ref<T[]>, step = 10) {
  const list = ref<T[]>([]) as Ref<T[]>
  const totalPages = computed(() => Math.ceil(arr.value.length / step))

  const loadItems = (page: number) => {
   list.value = arr.value.slice((page - 1) * step, page * step)
  }

  return {
    list,
    totalPages,
    loadItems
  }
}
