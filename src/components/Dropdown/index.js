import React, { Component } from 'react';
import Item from './Item';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.scss';

class Dropdown extends Component {
  static Item = Item;

  render() {
    const { children, text } = this.props;

    return (
      <span className="dropdown">
        <div className="popup">{children}</div>
        <span className="selected">{text}</span>
      </span >
    );
  }
}

export default Dropdown;
