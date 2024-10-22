const Button = ({onClick, type='button', text}) => {
    
    return(
        <button className="my-button" onClick={onClick} type={type} >
            {text}
        </button>
    )
}

export default Button;