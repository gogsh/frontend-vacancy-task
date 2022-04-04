import type { FunctionComponent } from 'react'

import { observer } from 'mobx-react-lite'

import { useStore } from 'store'

import { Page } from 'Components'

export const TokenPage: FunctionComponent = observer(() => {
  const { tokens } = useStore()
  return (
    <Page>
      <Page.Heading text={tokens.currentToken?.name} />
      <Page.Empty />
    </Page>
  )
})

TokenPage.displayName = 'TokenPage'
