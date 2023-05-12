import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { IssuePage } from './pages/IssuePage'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue-page/:issueNumber" element={<IssuePage />} />
      </Route>
    </Routes>
  )
}
