import React from 'react';
import './Item.css'

function Item(props) {
    return (
        <div className={`todo-item ${props.item.completed ? ' completed' : ''}`} onClick={(e) => {
            e.stopPropagation();
            props.onItemClick(props.item)
        }}>
            <div className="todo-item-content">
                <span>{props.item.name}</span>
            </div>
            <div className="todo-item-content">
                <span>{props.item.number}</span>
            </div>
            <span className="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation()
                props.onDeleteItem(props.item)
            }}></span>
        </div>
    )
}

export default Item;