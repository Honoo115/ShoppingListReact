import React from "react";
import AddItemForm from "./shopping-list/AddItemForm";
import ShoppingList from "./shopping-list/ShoppingList";

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };
  handleDeleteItem = item => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item);
    this.setState({
      shoppingItems: newItems
    });
  };
  handleCheckItem = item => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems
    });
  };
  handleAddItem = itemName => {
    console.log("handle add item", { itemName });
  };
  handleDeleteItem(item) {
    console.log("handle delete item called", { item });
  }
  handleCheckItem(item) {
    console.log("handle check item called", { item });
  }
  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}
export default App;
