import { useCallback } from 'react'
import type { FC } from 'react'

import { useNavigate } from 'react-router'
import { observer } from 'mobx-react-lite'
import { menu } from './menu'

import { NavigationItem } from './NavigationItem'

import classes from './Navigation.module.css'

export const Navigation: FC = observer(() => {
  const navigate = useNavigate()
  const logoClickHandler = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className={classes.menu}>
      <img
        src="./Logo.png"
        alt="logo"
        onClick={logoClickHandler}
        className={classes.logo}
      />
      <div className={classes.menuItems}>
        {menu.map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
})

Navigation.displayName = 'Navigation'
