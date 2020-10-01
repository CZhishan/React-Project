import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selected: undefined
  };

  // from method to class properties
  removeAll = () => {
    this.setState(() => ({options: []}));
  };
  pickRandom = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const op = this.state.options[randomNum];
    this.setState(() => ({selected: op}));
  };
  addOption = (newOption) => {
    if (!newOption) {
      return 'Please enter a valid option';
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists';
    }
    this.setState((prev) => ( {options: prev.options.concat(newOption)} ));
  };
  removeOption = (deleteOption) => {
    this.setState((prev) => ({
      options: prev.options.filter((op) => deleteOption !== op)
    }));
  };
  clearSelected = () => {
    this.setState(() => ({selected: undefined}));
  }

  // Lifecycle methods:
  // componentDidMount, componentDidUpdate(prevProps, prevState), componentWillUnmount
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      } 
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Action visible={this.state.options.length > 0} handlePick={this.pickRandom} />
          <div className="widget">
            <Options options={this.state.options} handleRemove={this.removeAll} handleRemoveOne={this.removeOption} />
            <AddOption handleAdd={this.addOption} />
          </div>
        </div>
        <OptionModal selected={this.state.selected} handleClose={this.clearSelected}/>
      </div>
    );
  }
}
