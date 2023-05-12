import { Navigate, Route, Routes } from 'react-router'
import Landing from './Landing'
import Second from './Second'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/main" />}
      />
      <Route
        path="/main"
        element={<Landing />}
      />
      <Route
        path="/second"
        element={<Second />}
      />
    </Routes>
  )
}

export default App
