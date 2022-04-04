import { useCallback, useMemo } from 'react'
import type { FC } from 'react'

import { useNavigate, useLocation } from 'react-router'
import { observer } from 'mobx-react-lite'

import { MUIButton } from 'Components'
import type { MUIButtonViews } from 'Components'
import type { MenuItem } from '../menu'

interface NavigationItemProps {
  item: MenuItem
}

export const NavigationItem: FC<NavigationItemProps> = observer(({ item }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const onItemClick = useCallback(() => {
    navigate(item.href)
  }, [item.href, navigate])

  const itemView = useMemo<MUIButtonViews>(
    () => (item.href === location.pathname ? 'default' : 'onlyText'),
    [item.href, location.pathname],
  )

  return (
    <MUIButton onClick={onItemClick} view={itemView} startIcon={item.icon}>
      {item.title}
    </MUIButton>
  )
})

NavigationItem.displayName = 'NavigationItem'
