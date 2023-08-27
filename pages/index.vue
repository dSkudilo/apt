<template>
  <div>
    <ListingComponent
        :request="getPosts"
        :views="views"
        field="title"
        @itemClick="routeHandler"
    />
    <nuxt-page/>
  </div>
</template>
<script setup lang="ts">
import ListingComponent from "../components/listing/ListingComponent.vue";
import {getPosts} from "../services/post.service";
import {IViewsConfig} from "~/components/listing/header/IViewsConfig";
import ListView from "~/components/listing/views/ListView.vue";
import ListSvg from "~/components/listing/header/toggler/ListSvg.vue";
import TileView from "~/components/listing/views/TileView.vue";
import TileSvg from "~/components/listing/header/toggler/TileSvg.vue";
import {markRaw} from "vue";
import {useRouter} from "vue-router";
import {IPost} from "~/types/IPost";

const views: IViewsConfig[] = [
  {name:'list', component: markRaw(ListView), icon: {component:markRaw(ListSvg)},},
  {name:'tile', component: markRaw(TileView), icon: {component:markRaw(TileSvg)},}
]
const router = useRouter()
const routeHandler = (val: IPost) => {
  router.push({
    name: 'index-id',
    params:{
      id: val.id
    }
  })
}
</script>
