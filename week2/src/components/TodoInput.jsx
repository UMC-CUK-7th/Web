const TodoInput = ({hasDefault, type, onChange, defaultValue=''} ) => {
    return (
        <input 
            className="todo-input"
            type={type} 
            /*...(hasDefault) ? 
                (defaultValue={defaultValue}):
                (value={defaultValue})
            */
            {...(hasDefault ? { defaultValue } : { value: defaultValue, onChange })}
            onChange={onChange} 
        />
    );
}

export default TodoInput;