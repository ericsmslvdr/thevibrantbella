import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { MainLayout } from "./layout"
import { NotFound } from "./components"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
