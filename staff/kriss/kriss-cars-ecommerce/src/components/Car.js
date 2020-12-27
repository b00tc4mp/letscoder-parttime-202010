function Car({ id, name, thumbnail, price }) {

    return (<div className='car'>
        <div className='car__id'>ID: {id}</div>
        <div className='car__name'>{name}</div>
        <img className='car__img' alt='' src={thumbnail} />
        <div className='car__price'>{price}€</div>
    </div>)
}

export default Car