import React from 'react';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.insert = this.insert.bind(this);
    this.clear = this.clear.bind(this);
    this.remain = this.remain.bind(this);
    this.genToggle = this.genToggle.bind(this);
    this.genRemove = this.genRemove.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.id = 0;
  }

  insert(event) {
    if(event.keyCode !== 13) return;
    if(event.target.value === "") return;
    this.state.items.push( {id: this.id++, checked: false, removed: false, label: event.target.value});
    this.setState({items: this.state.items});
    event.target.value = "";
  }

  clear() {
    for(let i = 0; i < this.state.items.length; ++i) {
      if(this.state.items[i].checked)
        this.state.items[i].removed = true;
    }
    this.setState({items: this.state.items});
  }

  remain() {
    let undone = 0, present = 0;
    for(let i = 0; i < this.state.items.length; ++i) {
      if(!this.state.items[i].removed) {
        present++;
        if(!this.state.items[i].checked) ++undone;
      }
    }
    return [present, undone];
  }

  toggleAll() {
    let remain = !!this.remain()[1];
    for(let i = 0; i < this.state.items.length; ++i) {
      this.state.items[i].checked = remain;
    }
    this.setState({items: this.state.items});
  }

  genToggle(key) {
    function toggle() {
      this.state.items[key].checked = !this.state.items[key].checked;
      this.setState({items: this.state.items});
    }
    toggle = toggle.bind(this);
    return toggle;
  }

  genRemove(key) {
    function remove() {
      this.state.items[key].removed = true;
      this.setState({items: this.state.items});
    }
    remove = remove.bind(this);
    return remove;
  }

  render() {
    return <section className="todoapp">
      <Header insert={this.insert}/>
      <Main items={this.state.items} genToggle={this.genToggle} genRemove={this.genRemove} toggleAll={this.toggleAll} remain={this.remain}/>
      <Footer clear={this.clear} remain={this.remain} />
    </section>
  }
}