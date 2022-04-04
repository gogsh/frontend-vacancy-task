import type { FC } from 'react'
import './App.css'

import { Provider, observer } from 'mobx-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { store } from 'store'

import { Navigation } from 'Components'
import { MainPage, SearchPage, TokensPage, TokenPage } from 'Pages'

export const App: FC = observer(() => {
  return (
    <Provider {...store}>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tokens" element={<TokensPage />} />
            <Route path={`/search`} element={<SearchPage />} />
            <Route path={`/token/:id`} element={<TokenPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
})

export default App
