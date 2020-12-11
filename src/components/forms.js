import React from "react";
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        asunto: "Kaksio",
        maalin_nimi: '',
        hinta: null,
        riittoisuuss: null,
        maalin_maara: null,


      };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      let hinta = this.state.hinta;
      let riittoisuus = this.state.riittoisuus;
      let maalin_maara = this.state.maara;
      if (!Number(hinta)) {
        alert("Arvo oltava numero");
      } else if (!Number(riittoisuus)) {
        alert("Arvo oltava numero")
      } else if (!Number(maalin_maara)) {
        alert("Arvo oltava numero")


      }
    }
    
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <h1>Maalilaskuri</h1>

          <select value={this.state.asunto}>
            <option value="Kaksio">2 h + kk -asunto</option>
            <option value="Kolmio">3 h + k -asunto </option>
          </select>

          <p>Maalin nimi:</p>
          <input
            type='text'
            name='maalin_nimi'
            onChange={this.myChangeHandler}
          />
          <p>Maalin hinta (€/l):</p>
          <input
            type='text'
            name='hinta'
            onChange={this.myChangeHandler}
          />
          <p>Maalin riittoisuus (m2/l):</p>
          <input
            type='text'
            name='riittoisuus'
            onChange={this.myChangeHandler}
          />
          <p>Maalauskertojen määrä:</p>
          <input
            type='text'
            name='maara'
            onChange={this.myChangeHandler}
          />

          <br />
          <br />
          <input type='submit' />
        </form>
      );
    }
  }

  ReactDOM.render(<MyForm />, document.getElementById('root'));