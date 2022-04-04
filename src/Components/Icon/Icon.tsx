import { useMemo, createElement } from 'react'
import type {
  FunctionComponent,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'

import clsx from 'clsx'

import { ReactComponent as People } from './svg/People.svg'
import { ReactComponent as Arrow } from './svg/Arrow.svg'

import classes from './Icon.module.css'

const icons = {
  people: People,
  arrow: Arrow,
}

export type IconTypes = keyof typeof icons

export type IconColors = 'white' | 'primary'

export interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  type: IconTypes
  className?: string
  color?: IconColors
  size?: number
}

export const Icon: FunctionComponent<IconProps> = ({
  type,
  className,
  color = 'primary',
  size = 20,
  ...props
}) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  )
  return (
    <span {...props} className={clsx(classes.icon, className)}>
      {createElement(icons[type], { className: classes[color], style })}
    </span>
  )
}

Icon.displayName = 'Icon'
