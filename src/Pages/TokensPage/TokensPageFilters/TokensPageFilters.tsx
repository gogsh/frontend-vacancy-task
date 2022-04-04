import type { FunctionComponent } from 'react'

import { observer } from 'mobx-react-lite'
import { categories } from 'store/Tokens'

import { FilterTag } from './FilterTag'

import classes from './TokensPageFilters.module.css'

export const TokensPageFilters: FunctionComponent = observer(() => (
  <div className={classes.filters}>
    {categories.map((category) => (
      <FilterTag key={category.id} category={category} />
    ))}
  </div>
))

TokensPageFilters.displayName = 'TokensPageFilters'
