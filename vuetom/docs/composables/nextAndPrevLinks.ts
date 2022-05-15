import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  isArray,
  ensureStartingSlash,
  removeExtention
} from '../../support/utils'
import { getSideBarConfig, getFlatSideBarLinks } from '../composables/sideBar'
import { useLang } from '../../support/lang'

export function useNextAndPrevLinks() {
  const { page, theme } = useData()
  const lang = useLang()
  const path = computed(() => removeExtention(ensureStartingSlash(page.value.relativePath)))
  const candidates = computed(() => {
    const config = getSideBarConfig(theme.value.sidebar, path.value, lang.value)

    return isArray(config) ? getFlatSideBarLinks(config) : []
  })
  const index = computed(() => candidates.value.findIndex((item: any) => item.link === path.value))

  // eslint-disable-next-line vue/return-in-computed-property
  const next = computed(() => {
    if (
      theme.value.nextLinks !== false
      && index.value > -1
      && index.value < candidates.value.length - 1
    ) {
      return candidates.value[index.value + 1]
    }
    return null
  })
  // eslint-disable-next-line vue/return-in-computed-property
  const prev = computed(() => {
    if (theme.value.prevLinks !== false && index.value > 0) {
      return candidates.value[index.value - 1]
    }
    return null
  })
  const hasLinks = computed(() => !!next.value || !!prev.value)

  return {
    next,
    prev,
    hasLinks
  }
}

export default {}
