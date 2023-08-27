import {IPost} from "~/types/IPost";

export async function getPosts(page:number = 1, limit:number = 100) {
  const data = await useApiRequest<IPost[]>('/posts',
    {
      method:'GET',
      query:{'_page':page, '_limit':limit}
    },
  )
  if (data.status.value === 'error' && data.error.value) throw new Error(data.error.value.message)
  return data
}

export async function getPost(postId: number) {
  const data = await useApiRequest<IPost>(`/posts/${postId}`,
    {
      method:'GET',
    },
  )
  if (data.status.value === 'error' && data.error.value) throw new Error(data.error.value.message)
  return data
}
