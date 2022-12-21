import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import ToDoItem from './model/ToDoItem';
import ToDo from './model/ToDo'

class App extends React.Component {


  constructor(props) {
    super(props)

    this.toDo = new ToDo()

    this.state = {
      activeTab: -1,
      items: this.toDo.items
    }

    this.changeTab = this.changeTab.bind(this)
    this.examinePath = this.examinePath.bind(this)
    this.createItem = this.createItem.bind(this)

    this.changeItemState = this.changeItemState.bind(this)
    this.createItem = this.createItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount(){
    this.examinePath()
    window.onpopstate = this.examinePath
  }

  examinePath() {

    switch (window.location.pathname) {
      case "/add-contacs":
      case "":
      default:
        this.setState({ activeTab: 1 })
        break;
      case "/all-contacts":
      case 2:
        this.setState({ activeTab: 2 })
        break;
    }

  }

  changeTab(tab) {

    if (this.state.activeTab === tab) 
      return

    switch (tab) {
      case 1:
      default:
        this.setState({ activeTab: 1})
        window.history.pushState(null, "Tab1", "/add-contacts")
        break;
      case 2:
        this.setState({ activeTab: 2})  
        window.history.pushState(null, "Tab2", "/all-contacts")
        break;
    }

  }

  createItem(name, number) {
    let item = new ToDoItem(name, number)
    let items = this.toDo.add(item)

    this.setState({items: items})
  }

  changeItemState(item) {
    let items = this.toDo.changeState(item);
    this.setState({items: items})
  }

  deleteItem(item) {
    let items = this.toDo.delete(item)
    this.setState({items: items})
  }


  render() {
    return (
      <div id="app-container">
        <Header changeTab={this.changeTab} tab={this.state.activeTab}></Header>
        <Body tab={this.state.activeTab} items={this.state.items} onDeleteItem={this.deleteItem}></Body>
        <Footer createItem={this.createItem}></Footer>
      </div>
    )
  }


}

export default App;
