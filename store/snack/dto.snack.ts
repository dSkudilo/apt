import {snackType} from "~/store/snack/snackType";

export interface DtoSnack {
  message: string,
  type: snackType,
}
