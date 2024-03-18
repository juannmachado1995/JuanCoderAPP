import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarapp from './components/navbar/Navbarapp'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/form/Form'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbarapp />

        <Routes>

          <Route path='/' element={<ItemListContainer greeting="Libreria JuanREADS" />} />
          <Route path='/categorias/:categoria' element={<ItemListContainer greeting="CATEGORIA: "/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/form' element={<Form />} />

          <Route path='*' element={<h1>Ruta no encontrada</h1>} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
