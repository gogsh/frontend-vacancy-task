import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

import { root } from './RootStore'
import type { RootStore } from './RootStore'

import type { TokensStore } from './Tokens'

interface Store {
  root: RootStore
  tokens: TokensStore
}

export const store: Store = {
  root,
  tokens: root.tokens,
}

export const useStore = () => useContext(MobXProviderContext) as Store
