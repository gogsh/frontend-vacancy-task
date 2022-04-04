import { useMemo } from 'react'
import type { FC } from 'react'

import { Button } from '@material-ui/core'
import type { ButtonProps } from '@material-ui/core'

import { observer } from 'mobx-react-lite'
import clsx from 'clsx'

import classes from './MUIButton.module.css'

export type MUIButtonViews = 'default' | 'onlyText'

export interface MUIButtonProps extends ButtonProps {
  className?: string
  view: MUIButtonViews
}

export const MUIButton: FC<MUIButtonProps> = observer(
  ({ children, className, view, ...props }) => {
    const classNames = useMemo(
      () => clsx(classes.button, classes[view], className),
      [view, className],
    )
    return (
      <div className={classNames}>
        <Button {...props} disableTouchRipple>
          <div className={classes.text}>{children}</div>
        </Button>
      </div>
    )
  },
)

MUIButton.displayName = 'MUIButton'
