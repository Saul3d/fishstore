import React from 'react';
import fishData from '../../helpers/data/fishData';
import './Inventory.scss';

class Inventory extends React.Component {
  state ={
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('Could not get fishes', err));
  }

  render() {
    return (
      <h1>Inventory</h1>
    );
  }
}

export default Inventory;
