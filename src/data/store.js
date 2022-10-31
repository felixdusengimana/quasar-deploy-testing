import {reactive} from 'vue'

export const store = reactive({
  dashboardHear: '',
  setHeaderTitle(text) {
    this.dashboardHear = text
  }
})
