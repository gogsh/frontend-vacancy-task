import { useMemo } from 'react'
import type { FC } from 'react'

import clsx from 'clsx'

import classes from './Tag.module.css'

export type TagColors = 'primary' | 'default'

export interface TagProps {
  text: string
  color: TagColors
  onClick?: () => void
}

export const Tag: FC<TagProps> = ({ text, onClick, color }) => {
  const styles = useMemo(() => clsx(classes.tag, classes[color]), [color])

  return (
    <div className={styles} onClick={onClick}>
      {text}
    </div>
  )
}

Tag.displayName = 'Tag'
