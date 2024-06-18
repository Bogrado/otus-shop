import { useCatalogParamsStore } from '@/stores/catalog/catalogParams.js'
import debounce from 'lodash.debounce'
import { computed } from 'vue'

export const useCatalogParams = () => {
  const catalogParamsStore = useCatalogParamsStore()

  const filters = [
    { label: 'По умолчанию', value: '' },
    { label: 'По названию', value: 'title' },
    { label: 'Сначала недорогие', value: 'price' },
    { label: 'Сначала дорогие', value: '-price' },
    { label: 'По категории', value: 'category' }
  ]

  const updateSearch = debounce((title) => {
    catalogParamsStore.setTitle(title)
  }, 600)

  const updateSortBy = (sortBy) => {
    catalogParamsStore.setSortBy(sortBy)
  }

  const title = computed(() => catalogParamsStore.getTitle)
  const sortBy = computed(() => catalogParamsStore.getSortBy)
  const filtersList = computed(() => filters)

  return {
    updateSearch,
    updateSortBy,
    title,
    sortBy,
    filtersList
  }
}