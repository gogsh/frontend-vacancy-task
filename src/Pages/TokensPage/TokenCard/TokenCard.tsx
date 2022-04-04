import { useMemo, useState, useCallback } from 'react'
import type { FC, MouseEventHandler } from 'react'

import { useNavigate } from 'react-router'
import clsx from 'clsx'

import { observer } from 'mobx-react-lite'

import { numberWithSpaces } from 'utils'
import { useStore } from 'store'
import type { Token } from 'store/Tokens'

import { Icon } from 'Components'

import { TokenCardPriceChange } from './TokenCardPriceChange'
import { TokenCardVolumeContainer } from './TokenCardVolumeContainer'

import classes from './TokenCard.module.css'

export interface TokenCardProps {
  token: Token
  number: number
}

export const TokenCard: FC<TokenCardProps> = observer(({ token, number }) => {
  const { tokens } = useStore()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const tokenId = useMemo(() => `#${token.id}`, [token.id])

  const onToggle = useCallback<MouseEventHandler<HTMLSpanElement>>(
    (e) => {
      e.stopPropagation()
      setIsOpen(!isOpen)
    },
    [isOpen, setIsOpen],
  )

  const onClick = useCallback(() => {
    tokens.setCurrentToken(token)
    navigate(`/token/${token.id}`)
  }, [navigate])

  return (
    <div className={classes.wrapper} onClick={onClick}>
      <div className={classes.token}>
        <div className={classes.number}>{tokenId}</div>
        <img className={classes.logo} src={token.logoURI} alt={token.name} />
        <div className={classes.infoContainer}>
          <div className={classes.verticalInfoContainer}>
            <span className={classes.textLarge}>{token.name}</span>
            <span className={clsx(classes.textMedium, classes.textPurple)}>
              {token.symbol}
            </span>
          </div>
        </div>
        <div className={classes.verticalInfoContainer}>
          <span className={clsx(classes.textMedium, classes.textPurple)}>
            {token.price} $
          </span>
          <div className={classes.priceChange}>
            <TokenCardPriceChange value={token.priceChange.hours24} />
            {` • `}
            <TokenCardPriceChange value={token.priceChange.days7} />
            {` • `}
            <TokenCardPriceChange value={token.priceChange.days365} />
          </div>
        </div>
        <TokenCardVolumeContainer
          value={token.volume}
          percentage={token.volumeChangePercentage}
        />
        <TokenCardVolumeContainer
          value={token.tvl}
          percentage={token.tvlChangePercentage}
        />
        <div className={clsx(classes.horizontalInfoContainer, classes.peoples)}>
          <Icon type="people" />
          <span className={classes.textMedium}>{numberWithSpaces(token.users)}</span>
        </div>
        <Icon
          type="arrow"
          className={clsx(classes.arrow, isOpen && classes.isOpen)}
          onClick={onToggle}
        />
      </div>
      {isOpen && <span className={classes.description}>{token.description}</span>}
    </div>
  )
})

TokenCard.displayName = 'TokenCard'
