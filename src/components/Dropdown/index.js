import React, { Component } from 'react';
import Item from './Item';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.scss';

class Dropdown extends Component {
  static Item = Item;
  constructor(props, context) {
    super(props, context);
    this.click = this.click.bind(this);
  }

  state = {
    open: undefined
  };

  click() {
    this.setState({ open: true });

    const self = this;
    document.addEventListener(`click`, function onClickOutside() {
      self.setState({ open: undefined });
      document.removeEventListener(`click`, onClickOutside);
    });
  }

  render() {
    const { children, style, text } = this.props;
    const { open } = this.state;
    return (
      <span className="dropdown" onClick={this.click} style={style}>
        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {open && <div className="popup">{children}</div>}
        </CSSTransitionGroup>

        <span className="selected">{text}</span>
      </span>
    );
  }
}

export default Dropdown;
