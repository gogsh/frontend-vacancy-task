import type { FunctionComponent } from 'react'

import { observer } from 'mobx-react-lite'
import { useStore } from 'store'

import { Page } from 'Components'

import { TokenCard } from './TokenCard'
import { TokensPageFilters } from './TokensPageFilters'

import classes from './TokensPage.module.css'

export const TokensPage: FunctionComponent = observer(() => {
  const { tokens } = useStore()

  return (
    <Page>
      <Page.Heading text="Токены Everscale">
        <TokensPageFilters />
      </Page.Heading>
      <div className={classes.itemsContainer}>
        {tokens.filteredTokens.map((token, index) => (
          <TokenCard token={token} key={token.address} number={++index} />
        ))}
      </div>
    </Page>
  )
})

TokensPage.displayName = 'TokensPage'
