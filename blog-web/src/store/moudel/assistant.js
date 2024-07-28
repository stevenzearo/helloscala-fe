import {defineStore} from "pinia";

export const useAssistantStore = defineStore('assistant', {
    state: () => ({
        summaryList: [],
        current: null
    }),
    persist: {
        enabled: true, //Store中数据持久化生效
    },
    getters: {
        getSummaryList() {
            return this.summaryList
        },
        getCurrent() {
            return this.current
        },
    },
    actions: {
        setSummaryList(value) {
            this.summaryList = value
        },
        setCurrent(value) {
            this.current = value
        },
    },
})
