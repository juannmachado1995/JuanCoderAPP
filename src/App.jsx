import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarapp from './components/navbar/Navbarapp'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <Navbarapp />
      <ItemListContainer greeting="App de Juan hook" />
     </>
  )
}

export default App
