import type { FC } from 'react'

import { computed } from 'mobx'
import { observer } from 'mobx-react'

import { Tag } from 'Components'
import type { TagColors } from 'Components'
import { useStore } from 'store'
import type { Category } from 'store/Tokens'

interface FilterTagProps {
  category: Category
}

export const FilterTag: FC<FilterTagProps> = observer(({ category }) => {
  const { tokens } = useStore()

  const calculateTagColor = computed<TagColors>(() =>
    tokens.activeFilter.id === category.id ? 'primary' : 'default',
  ).get()

  const onClick = computed(() => () => {
    tokens.setActiveFilter(category)
  }).get()

  return <Tag color={calculateTagColor} onClick={onClick} text={category.title} />
})

FilterTag.displayName = 'FilterTag'
