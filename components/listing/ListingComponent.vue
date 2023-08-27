<template>
  <div class="listing">
    <div class="listing__wrapper">
      <div class="listing__header">
        <SearchComponent
          v-model="searchValue"
        />
        <TogglerComponent
          v-model="currentView"
          :list="views"
        />
      </div>

      <div class="listing__content">
        <Transition name="slide-fade">
          <component
              :is="currentView.component"
              :items="list"
              :field="props.field"
              @itemClick="$emit('itemClick', $event)"
          ></component>
        </Transition>
      </div>
    </div>

    <div class="listing__pagination">
      <PaginationComponent
        :pages="totalPages"
        v-if="totalPages > 1"
        v-model="currentStep"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchComponent from '@/components/listing/header/SearchComponent.vue'
import TogglerComponent from '@/components/listing/header/toggler/TogglerComponent.vue'
import {computed, markRaw, ref, watchEffect} from "vue";
import {IViewsConfig} from "~/components/listing/header/IViewsConfig"
import {useSnackStore} from "~/store/snack";
import PaginationComponent from "~/components/listing/pagination/PaginationComponent.vue";
import {pagination} from "~/composables/pagination";
const emit = defineEmits(['itemClick'])
interface IProps {
  request: Function,
  views: IViewsConfig[],
  field: string
}
const props = defineProps<IProps>()
const store = useSnackStore()

const getItems = async () => {
  try {
    const {data} = await props.request()
    return data.value
  } catch (e) {
    console.error(e)
    store.setSnack({message:'Не удалось получить данные', type:'error'})
    return []
  }
}
const views = props.views
const currentView = ref<IViewsConfig>(views[0])

const items = await getItems() || []

const searchValue = ref('')
//фильтрацию для вложенных объектов не делал тк в апишке их нет
const filteredItems = computed(() =>
    items.filter(<T>(e:T) =>
      Object.values(e).reduce((acc, val) => {
        if (
            typeof val === 'string'
            && val.toLowerCase().includes(searchValue.value.toLowerCase())) acc = true
        if (
            !isNaN(+searchValue.value)
            && typeof val === 'number'
            && val === +searchValue.value) acc = true
        return acc
      }, false)
  )
)

const currentStep = ref(1)
const {list, loadItems, totalPages} = pagination(filteredItems, 7)
watchEffect(() => {
  loadItems(currentStep.value)
})

</script>
<style scoped lang="scss">
.listing {
  &__wrapper {
    background-color: $white;
    box-shadow: $shadow;
  }
  &__header {
    display: flex;
    align-items: center;
  }
  &__content {
    border-left: $border;
    border-bottom: $border;
    border-right: $border;
  }
  &__pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

