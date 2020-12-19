function Feedback({ message, type = 'info' }) {

    return (
        <div className={`feedback feedback--${type}`}>{message}</div>
    );
}

export default Feedback