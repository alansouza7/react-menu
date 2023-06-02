import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import data from './data'
import Menu from './components/Menu'
import Categories from './components/Categories'

function App() {

  const categories = data.map(item=>{
    return item.category
 })

 const uniqueArray = [...new Set(categories)]

  const [items, setItems] = useState(data)
  const [allCategories, setAllCategories]= useState(uniqueArray)


const filterCategory = (category) => {
  const categorySelected = data.filter(selected =>{
    return selected.category === category
  })
  setItems(categorySelected)
}

const selectAll = () =>{
  setItems(data)
}

  return (
    <main>
    <Title />
    <Categories categories={allCategories} filter={filterCategory} selectAll={selectAll}/>
    <Menu  data={items}/>
    </main>
  )
}

export default App
