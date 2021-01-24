import './RenderDefinition.css';
import {useState} from 'react';
function RenderDefinition(props) {
    var [optionSelected , setOptionSelector]  =  useState(props.category[0])
    // var category = props.category.map(categoryName => <p>categoryName</p>
    // )

    function renderData(data, id){
        let index = 1;
        let index2 = 1;
        if (data !== '') 
            return (<div id={id}
                className='data'>
                <ol> {
                    data.map((description) => {
                            index ++
                            index2 = 1
                        if (!description.subsenses) 
                            return (<li> <p className='space' key={description.id}> {description.definitions}</p></li>)
                            else 
                                return (<li> <p key={description.id}> {description.definitions}
                                    {
                                    description.subsenses.map((defination) => {
                                            index2 ++
                                        return <p className='helping-text space'> {
                                            index - 1
                                        }.{
                                            index2 - 1
                                        }
                                            {
                                            defination.definitions[0]
                                        }</p>
                                })
                                }</p> </li>)
                    })
                } </ol>
            </div>)
        
    }

    function onClickHandler(e){
        var name =e.target.getAttribute("name");
        // e.target.classList.toggle("selected");
        if(name === props.category[0])
        {
            e.target.classList.add("selected");
            document.getElementsByName(props.category[1])[0].classList.remove("selected");
        }
        else if(name === props.category[1])
        {
             e.target.classList.add("selected");
            document.getElementsByName(props.category[0])[0].classList.remove("selected");
        }
        setOptionSelector(name);
    }

    var card = props.category.map((value, index)=> {
        if (index < 2)
        {
            return (<div key={value}  name={value} onClick={onClickHandler}
                className={index===0 ?  "property selected" : "property"}> {value}</div>)
        } 
        else 
        return null;        
    })

    return (<div className="container">
        <div className="header-card"> {card}
            <div className="output">
            {
                optionSelected === props.category[0] ? renderData(props.firstData , "noun2") : renderData(props.secondData , "verb2")
            }
            </div>
        </div>

    </div>)
}
export default RenderDefinition;
