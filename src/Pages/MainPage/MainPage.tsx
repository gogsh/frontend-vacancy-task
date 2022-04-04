import type { FC } from 'react'

import { observer } from 'mobx-react-lite'

import { Page } from 'Components'

export const MainPage: FC = observer(() => {
  return (
    <Page>
      <Page.Heading text="Главная" />
      <Page.Empty />
    </Page>
  )
})

MainPage.displayName = 'MainPage'
