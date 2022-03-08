const ExpenseItem = (props) => {
    return (
        <div className="list-group-item d-flex justify-content-between m-1">
            {props.name}
            <span>
                Rs.{props.cost}
                <button className="mx-3">Delete</button>
            </span>
        </div>
    )
}

export default ExpenseItem;