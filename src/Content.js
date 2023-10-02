import ItemList from "./ItemList";


const Content = (props) => {




    return (
        <>
            {props.items.length ? (
                <ItemList
                    items={props.items}
                    handleCheck={props.handleCheck}
                    handleDelete={props.handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}


export default Content