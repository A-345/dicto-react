import './RenderDefinition.css';
function RenderDefinition(props) {
    // var category = props.category.map(categoryName => <p>categoryName</p>
    // )
    console.log(props.category);
    var card = props.category.map(function (value , index ) {
        if(index < 2)
        return (<div key={index} className="property"> {value}</div>)
    })
    return (<div className="container">
        <div className="header-card"> 
                    {card}
            <div className="output"></div>
        </div>

    </div>)
}
export default RenderDefinition;
