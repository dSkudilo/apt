import {Component} from "@vue/runtime-core";

export interface IViewsConfig {
  name: string,
  component: Component ,
  icon: {
    component: Component,
    activeColor?: string,
    defaultColor?: string
  }
}
