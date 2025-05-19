import './App.css'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import List from './components/ui/List'
 
function App() {
  
  
  return (
    <>
      <div className='relative grid grid-rows-[1fr_10fr_1fr] h-full'>
        <Header/>
        <Body/>
        <Footer/>
        <List />
      </div>
    </>
  )
}

export default App
