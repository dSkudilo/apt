import {DtoSnack} from "~/store/snack/dto.snack";

export interface ISnack extends DtoSnack{
  isVisible: boolean,
}
