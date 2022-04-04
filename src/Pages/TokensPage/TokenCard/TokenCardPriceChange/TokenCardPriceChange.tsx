import { useMemo } from 'react'
import type { FC } from 'react'

import { observer } from 'mobx-react-lite'

import classes from './TokenCardPriceChange.module.css'

interface TokenCardPriceChangeProps {
  value: number
}

type PriceChangeType = 'green' | 'grey' | 'red'

export const TokenCardPriceChange: FC<TokenCardPriceChangeProps> = observer(
  ({ value }) => {
    const [prefix, style] = useMemo<[string, PriceChangeType]>(() => {
      if (value > 0) {
        return ['+', 'green']
      }
      if (value < 0) {
        return ['', 'red']
      }
      return ['', 'grey']
    }, [value])

    return (
      <span className={classes[style]}>
        {prefix}
        {value}%
      </span>
    )
  },
)

TokenCardPriceChange.displayName = 'TokenCardPriceChange'
