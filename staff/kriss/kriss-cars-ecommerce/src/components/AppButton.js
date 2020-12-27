
function AppButton({ text, color = 'default', classes = '', buttonClick }) {

    return (
        <button onClick={buttonClick} className={`button button--${color} ${classes}`}>{text}</button>
    );
}

export default AppButton