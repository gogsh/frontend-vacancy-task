import { useState } from 'react'
import type { FC } from 'react'
import { tokens, categories } from './tokens'
import { menu } from './menu'
import './App.css'

import { Provider, observer } from 'mobx-react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from './store'

export const App: FC = observer(() => {
  const [category, setCategory] = useState(categories[0])

  return (
    <Provider store={store}>
      <div className="app">
        <div className="menu">
          {menu.map((item) => (
            <div className="menu-item">{item.title}</div>
          ))}
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="tokens">
                  {tokens.map((item) => (
                    <div className="token">{item.name}</div>
                  ))}
                </div>
              }
            />
            <Route path={`/search`} element={<div>123</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
})

export default App
