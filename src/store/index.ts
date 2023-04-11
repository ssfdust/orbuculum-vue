import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
import { useUserStore } from './modules/user'
import { useConnectionStore } from './modules/connection'
export default createPinia()
export { useCountStore, useUserStore, useConnectionStore }
