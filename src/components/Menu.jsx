import React from 'react'
import Item from './Item'

const Menu = ({data}) => {

  return (
    <div className='section-center'>{data.map(item =>{
         return <Item key={item.id} {...item} /> 
    })}</div>
  )
}

export default Menu