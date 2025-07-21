import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import ProductPage from './pages/ProductPage'
import Details from './pages/Details'
import Checkout from './pages/Checkout'

function App() {

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/Products' element={<ProductPage/>}></Route>
        <Route path='/Details/:ProductIdNo' element={<Details/>}></Route>
        <Route path='/Checkout/:BuyId' element={<Checkout/>}></Route>
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  )
}

export default App
