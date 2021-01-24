import './RenderDefinition.css';
function RenderDefinition(props) {
    // var category = props.category.map(categoryName => <p>categoryName</p>
    // )
    console.log(props.category);
    var card = props.category.map(function (value) {
        return (<div className="property"> {value}</div>)
    })
    return (<div className="container">
        <div className="header-card"> 
                    {card}
            <div className="output">output </div>
        </div>

    </div>)
}
export default RenderDefinition;
