import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li className={this.props.removed ? "removed": (this.props.checked ? "completed" : "")}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={this.props.checked} onClick={this.props.toggle}/>
        <label>{this.props.label}</label>
        <button className="destroy" onClick={this.props.remove} ></button>
      </div></li>
  }
}

export default ListItem;
