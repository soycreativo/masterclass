import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating: 4, title: 'Harry Poter y el cáliz de fuego', image: 'Libro01.jpg'},
        {id:0, rating: 4, title: 'The shining', image: 'Libro02.jpg'},
        {id:0, rating: 4, title: 'Codigo Da Vinci', image: 'Libro03.jpg'},
        {id:0, rating: 4, title: 'El principito', image: 'Libro04.jpg'},
        {id:0, rating: 4, title: 'Sobrenatural', image: 'Libro05.jpg'},
      ]
    };
  }

render(){
  return (
    <div>
      <div className="app">
        <Menu title="Amozon"/>
        <List items={this.state.books} />
      </div>
    </div>
  );
}
}

export default App;
