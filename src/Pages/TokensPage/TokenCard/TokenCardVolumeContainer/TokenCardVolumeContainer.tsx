import { useMemo } from 'react'
import type { FC } from 'react'

import { observer } from 'mobx-react-lite'
import clsx from 'clsx'

import { numberWithSpaces } from 'utils'

import classes from '../TokenCard.module.css'

interface TokenCardVolumeContainerProps {
  value: number
  percentage: number
}

export const TokenCardVolumeContainer: FC<TokenCardVolumeContainerProps> = observer(
  ({ value, percentage }) => {
    const color = useMemo(() => (percentage < 0 ? 'textRed' : 'textPurple'), [percentage])

    return (
      <div className={classes.horizontalInfoContainer}>
        <span className={classes.textMedium}>{numberWithSpaces(value)}</span>
        <span className={clsx(classes.textSemiSmall, classes[color])}>{percentage}%</span>
      </div>
    )
  },
)

TokenCardVolumeContainer.displayName = 'TokenCardVolumeContainer'
