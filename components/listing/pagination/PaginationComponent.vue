<template>
  <div class="pagination">
    <PaginationItem
        v-for="item in visiblePages"
        :page="item"
        :key="item"
        @click="selectPage(item)"
        :isActive="modelValue === item"
    ></PaginationItem>
  </div>
</template>
<script setup lang="ts">

import PaginationItem from "~/components/listing/pagination/PaginationItem.vue";
import {computed, ref} from "vue";
import {paginationItemType} from "~/components/listing/pagination/paginationItemType";

const LIMIT = 3

interface IProps {
  pages: number,
  modelValue: number,
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

const selectPage = (page: paginationItemType) => {
  if (typeof page !== 'number') return
  emit('update:modelValue',page)
}

const visiblePages = computed(() => {
  let arr = []
  if (props.pages < 7)  {
    for (let i = 1; i <= props.pages; i++) {
      arr.push(i)
    }
  } else {
    if (props.modelValue < LIMIT + 1) {
      for (let i = 1; i <= LIMIT + 1; i++) {
        arr.push(i)
      }
      arr.push('...', props.pages)
    } else if (props.modelValue > props.pages - LIMIT) {
      arr.push(1,'...')
      for (let i = props.pages - LIMIT; i <= props.pages; i++) {
        arr.push(i)
      }
    } else {
      arr.push(1, '...')
      for (let i = props.modelValue - 1; i <= props.modelValue + 1; i++) {
        arr.push(i)
      }
      arr.push('...', props.pages)
    }
  }
  return arr
})
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
