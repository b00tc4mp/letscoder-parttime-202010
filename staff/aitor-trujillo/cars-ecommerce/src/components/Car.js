import AppButton from "./AppButton";

function Car({ id, name, thumbnail, price, showRemoveButton = false, onDelete, onBuyCar }) {

    return (<div className='car'>
        <div className='car__id'>ID: {id}</div>
        <div className='car__name'>{name}</div>
        <img className='car__img' alt='' src={thumbnail} />
        <div className='car__price'>{price}€</div>
        <div className='container-horizontal'>
            {showRemoveButton && <AppButton text='X' buttonClick={(event) => onDelete(event, id)} />}
            <AppButton text='💰' buttonClick={(event) => onBuyCar(event, price)} />
        </div>
    </div>)
}

export default Car