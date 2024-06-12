import { useQueryParamsStore } from '@/stores/queryParamsStore'
import debounce from 'lodash.debounce'

export const updateSort = (sortBy) => {
  const queryParamsStore = useQueryParamsStore()
  queryParamsStore.setSortBy(sortBy)
}

export const updateTitle = debounce((title) => {
  const queryParamsStore = useQueryParamsStore()
  queryParamsStore.setTitle(title)
}, 500)
