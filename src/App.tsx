import { Route, Routes } from 'react-router-dom'
import FullPages from './template/FullPages'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPages />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
