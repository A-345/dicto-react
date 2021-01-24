import React from 'react';
import './SearchBox.css';
import 'font-awesome/css/font-awesome.min.css';

class SearchBox extends React.Component {
    constructor()
    {
        super();
        this.state = {
            buttonClicked : false , 
            name : ""
        }
    }
    onChangeHandler = (e)=>{
        var value = e.target.value;
        this.setState({
            buttonClicked : false , 
            name : value
        })
    }

    onClickHandler = ()=>
    {
        let searchBar = document.getElementById("searchbar-container");
        searchBar.style.height = "50px";
        searchBar.style.transition = "height 0.5s";


        this.setState(prevState => {
            return {
                buttonClicked : prevState.buttonClicked,
                name : prevState.name
            }
        })
        this.props.getWord(this.state.name);
    }
    render() {
        return (
            <div className="header">
                <div id="searchbar-container">
                    <div className="icon">
                        <img src={require("./logo.svg").default}  height="35" alt="react-log"/>
                    </div>
                <div className="searchbar">
                    <div className="logo">&nbsp; Dictionary</div>
                    <div className="input-bar">
                        <input type="text" value={this.state.name} onChange={this.onChangeHandler} placeholder="&nbsp; Search Phase or Word"></input>
                    </div>
                    <div className="search-symbol" onClick={this.onClickHandler}>
                        <span className="fa fa-search"></span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SearchBox;