import { Route, Routes } from 'react-router-dom'
import FullPages from './template/FullPages'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ContentCreate from './components/Content/ContentCreate'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPages />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="new" element={<ContentCreate />} />
      </Route>
    </Routes>
  )
}

export default App
