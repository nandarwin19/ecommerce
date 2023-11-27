import React from 'react'
import './NewCollections.css';
import new_collection from '../assets/new_collections'
// import Item from '../Item/Item';
import Item from '../item/Item';

const NewCollections = () => {
  return (
    <div className='new-collection items'>
        <h1 className='title'>NEW COLLECTIONS</h1>
        
        <div className="items-cards new-collection-cards">
            {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections