import { useState } from 'react'
import type { FC } from 'react'
import { tokens, categories } from './tokens'
import './App.css'

import { Provider, observer } from 'mobx-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from './store'

import { Navigation } from './Components'

export const App: FC = observer(() => {
  const [category, setCategory] = useState(categories[0])

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<div>123</div>} />
            <Route
              path="/tokens"
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
