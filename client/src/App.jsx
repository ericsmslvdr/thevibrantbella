import { NotFound } from "@components/not-found"
import { Home } from "@pages/Home"
import { MainLayout } from "@pages/layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

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
