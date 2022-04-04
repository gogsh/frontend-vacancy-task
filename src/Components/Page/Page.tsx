import type { FunctionComponent } from 'react'

import { PageHeading } from './PageHeading'
import type { PageHeadingComponent } from './PageHeading'
import { PageEmpty } from './PageEmpty'
import type { PageEmptyComponent } from './PageEmpty'

import classes from './Page.module.css'

interface PageComponent extends FunctionComponent {
  Heading: PageHeadingComponent
  Empty: PageEmptyComponent
}

export const Page: PageComponent = ({ children }) => {
  return <div className={classes.root}>{children}</div>
}

Page.Heading = PageHeading
Page.Empty = PageEmpty

Page.displayName = 'Page'
