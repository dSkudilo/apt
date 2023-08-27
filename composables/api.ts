import {UseFetchOptions} from "#app";
import {defu} from "defu";

export async function useApiRequest<T> (url: string, options: UseFetchOptions<T>){
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL,
    key: url,
    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},
    onRequest(_ctx) {},
    onRequestError(_ctx) {},
    onResponse(_ctx) {},
    onResponseError(_ctx) {}
  }

  const params = defu(options, defaults)
  return await useFetch(url, params)
}
