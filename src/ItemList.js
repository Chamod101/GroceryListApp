
import LineItem from "./LineItem";

const ItemList = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={props.handleCheck}
                    handleDelete={props.handleDelete}
                />
            ))}
        </ul>
    )
}


export default ItemList