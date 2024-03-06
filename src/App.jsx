import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarapp from './components/navbar/Navbarapp'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
      <Navbarapp />
      <ItemListContainer greeting="Libreria JuanREADS" />
      <ItemDetailContainer/>
     </>
  )
}

export default App
