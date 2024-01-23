import { Routes, Route } from 'react-router-dom'
import { ColumnView } from './pages/ColumnView/ColumnView'
import { RowView } from './pages/RowView/RowView'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ColumnView />} />
        <Route path="/rowview" element={<RowView />} />
      </Route>
    </Routes>
  )
}
