import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    text: "",
  };
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios.get("http://localhost:3333/plants").then((res) => {
      const plants = res.data;
      this.setState({ plants: plants.plantsData });
    });
  }

  // Update Search Plant Input
  updateSearch(e) {
    this.setState({ text: e.target.value.substr(0, 25) });
  }

  // Filter Plant List
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    let filteredPlants = this.state.plants.filter((plant) => {
      return (
        plant.name.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1
      );
    });
    return (
      <main className="plant-list">
        <input
          type="text"
          name="text"
          placeholder="Search Plants..."
          value={this.state.text}
          onChange={this.onChange}
        />
        {filteredPlants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
