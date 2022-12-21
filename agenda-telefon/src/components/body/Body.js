import React from 'react';
import './Body.css';
import ItemsAll from '../items-all/ItemsAll';


function Body(props) {
    return (
        <div id="app-body">

            <div id="all-items" className="items-container" style={{ marginLeft: -(props.tab - 1) * 100 + '%' }}>
                <div id="all-items-container">
                <h1 className="no-items-message">Phone Book</h1>
                </div>
            </div>

            <div id="active-items" className="items-container">
                <div id="active-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsAll items={props.items} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></ItemsAll>
                </div>
            </div>



        </div>
    );


}

export default Body;