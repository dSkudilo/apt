<template>
  <ModalComponent
      v-model="isVisible"
      close-route="/"
  >
    <div>
      <p>Пост id - {{post?.id}}</p>
      <p>Заголовок поста - {{post?.title}}</p>
      <br/>
      <p>Текст поста - {{post?.body}}</p>
    </div>
  </ModalComponent>
</template>
<script setup lang="ts">
import ModalComponent from "@/components/ui/ModalComponent";
import {computed, Ref, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useSnackStore} from "~/store/snack";
import {getPost, getPosts} from "~/services/post.service";
import {IPost} from "~/types/IPost";
const isVisible = ref(true)
const route = useRoute()
const postId = computed(() => route.params.id)
const store = useSnackStore()

//Почему-то https://jsonplaceholder.typicode.com/ для posts с ssr на 1 рендеринге нормальнов все возвращает а для post/id нет
// из-за этого тут такой странный тип
const getItem = async ():Promise<Ref<IPost | null> | null> => {
  try {
    const {data} = await getPost(+postId.value)
    return data
  } catch (e) {
    console.error(e)
    store.setSnack({message:'Не удалось получить данные', type:'error'})
    return null
  }
}

const post = await getItem()
</script>
