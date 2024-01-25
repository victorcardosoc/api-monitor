import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { ActiveListProvider } from '../../contexts/activeListContext'
import { AlarmListProvider } from '../../contexts/alarmListContext'

export function DefaultLayout() {
  return (
    <div>
      <AlarmListProvider>
        <ActiveListProvider>
          <Header />
          <Outlet />
        </ActiveListProvider>
      </AlarmListProvider>
    </div>
  )
}
