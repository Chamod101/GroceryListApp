const Footer = (props) => {



    return (
        <p>{props.length} List {props.length === 1 ? "item" : "Items"}</p>
    )
}


export default Footer