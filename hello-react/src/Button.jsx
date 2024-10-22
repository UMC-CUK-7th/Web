function Button({ onClick, label, type = 'button' }) {
    return (
        <button className="button" onClick={onClick} type={type}>
            {label}
        </button>
    );
}

export default Button;