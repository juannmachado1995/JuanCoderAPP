import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarapp from './components/navbar/Navbarapp'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemCount from './components/itemCount/itemCount'
import Promises from './components/promises/promises'
import PracticandoApi from './components/PRACTICANDO/PracticandoApi'
import AgregarProducto from './components/PRACTICANDO/PracticandoApi'

function App() {

  return (
    <>
      <Navbarapp />
      <ItemListContainer greeting="App de Juan hook" />
     </>
  )
}

export default App
