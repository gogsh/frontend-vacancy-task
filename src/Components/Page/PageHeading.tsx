import type { FunctionComponent } from 'react'

import { observer } from 'mobx-react-lite'

import classes from './Page.module.css'

export interface PageHeadingProps {
  text?: string
}

export interface PageHeadingComponent extends FunctionComponent<PageHeadingProps> {}

export const PageHeading: PageHeadingComponent = observer(({ text, children }) => {
  return (
    <div className={classes.heading}>
      <span className={classes.text}>{text}</span>
      {children}
    </div>
  )
})

PageHeading.displayName = 'PageHeading'
