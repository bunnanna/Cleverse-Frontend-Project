import { Route, Routes } from 'react-router-dom'
import FullPages from './template/FullPages'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ContentCreate from './components/Content/ContentCreate'
import Content from './components/Content/Content'
import ContentEdit from './components/Content/ContentEdit'
import GuardRoute from './template/GuardRoute'
import { useUser } from './provider/AuthProvider'

function App() {
  const { user } = useUser()
  return (
    <Routes>
      <Route path="/" element={<FullPages />}>
        <Route index element={<MainPage />} />
        <Route path="content/:id" element={<Content />} />

        <Route element={<GuardRoute isRouteAccessible={!user} redirectRoute={'/'} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route element={<GuardRoute isRouteAccessible={!!user} redirectRoute={'/'} />}>
          <Route path="new" element={<ContentCreate />} />
          <Route path="content/:id/edit" element={<ContentEdit />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
