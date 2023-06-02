
const Categories = ({categories, filter, selectAll}) => {


  return (
    <div className="btn-container">
        <button className="btn" onClick={selectAll}>All</button>
        {categories.map(category=>{
            return <button key={category} className="btn" onClick={()=> filter(category)}>{category}</button>
        })}
        
    </div>
  )
}

export default Categories