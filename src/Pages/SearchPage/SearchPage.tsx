import type { FC } from 'react'

import { observer } from 'mobx-react-lite'

import { Page } from 'Components'

export const SearchPage: FC = observer(() => {
  return (
    <Page>
      <Page.Heading text="Поиск" />
      <Page.Empty />
    </Page>
  )
})

SearchPage.displayName = 'SearchPage'
