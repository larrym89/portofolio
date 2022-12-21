
class ToDoItem {

    constructor(name, number) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
        this.completed = false;
    }


    static fromJSON (json) {
        let toDoItem = new ToDoItem();
        toDoItem.id = json.id;
        toDoItem.name = json.name;
        toDoItem.number = json.number;
        toDoItem.completed = json.completed;

        return toDoItem;
    }
}

export default ToDoItem;