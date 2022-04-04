import type { FunctionComponent } from 'react'

import { observer } from 'mobx-react-lite'

import classes from './Page.module.css'

export interface PageEmptyComponent extends FunctionComponent {}

export const PageEmpty: PageEmptyComponent = observer(() => {
  return (
    <div className={classes.empty}>
      Тестовое задание не предусматривает реализацию контента здесь.
    </div>
  )
})

PageEmpty.displayName = 'PageEmpty'
