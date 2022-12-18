import { defineStore } from 'pinia'
import { Names } from './name'
// 第一个参数是应用程序中 store 的唯一 id
export const useSystem = defineStore(Names.System, {
    state: () => {
        return {
            isLoading: false
        }
    },
    actions: {

    },
})