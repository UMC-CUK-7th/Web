const List = (props) => {
    console.log(props)
    const {tech: t}=props
    return(
        <li style={{listStyle: 'none'}}>
            {t}
        </li>
    )
}

export default List