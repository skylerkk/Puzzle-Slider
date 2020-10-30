import './App.css';
import React from 'react'
import Tile from './Components/Tile.js'
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: [{ pos: 0, correctPos: 0, click: false, empty: true },
      { pos: 1, correctPos: 1, click: false, empty: false },
      { pos: 2, correctPos: 2, click: false, empty: false },
      { pos: 3, correctPos: 3, click: false, empty: false },
      { pos: 4, correctPos: 4, click: false, empty: false },
      { pos: 5, correctPos: 5, click: false, empty: false },
      { pos: 6, correctPos: 6, click: false, empty: false },
      { pos: 7, correctPos: 7, click: false, empty: false },
      { pos: 8, correctPos: 8, click: false, empty: false },
      { pos: 9, correctPos: 9, click: false, empty: false },
      { pos: 10, correctPos: 10, click: false, empty: false },
      { pos: 11, correctPos: 11, click: false, empty: false },
      { pos: 12, correctPos: 12, click: false, empty: false },
      { pos: 13, correctPos: 13, click: false, empty: false },
      { pos: 14, correctPos: 14, click: false, empty: false },
      { pos: 15, correctPos: 15, click: false, empty: false }],
    }

    // this.validMove = [];

    this.checkWin = this.checkWin.bind(this);
    // this.updateList = this.updateList.bind(this);
    this.addClickEve = this.addClickEve.bind(this);
    this.moveTile = this.moveTile.bind(this);
  }

  addClickEve() {
    let empty = this.state.board.findIndex((item) => { return item.empty === true });
    // this.validMove.length = 0;
    let newBoard = this.state.board.map((item, index) => {
      if (empty === 4 || empty  === 8 || empty  === 12) {
        if (empty - 4 === index || empty + 4 === index || empty + 1 === index) {
          item.click = true;
          // this.validMove.push(item);
        }
        else {
          item.click = false;
        }
      }
      else if (empty  === 3 || empty  === 7 || empty  === 11) {
        if (empty - 4 === index || empty + 4 === index || empty - 1 === index) {
          item.click = true;
          // this.validMove.push(item);
        }
        else {
          item.click = false;
        }
      }
      else if (empty - 4 === index || empty + 4 === index || empty - 1 === index || empty + 1 === index) {
        item.click = true;
        // this.validMove.push(item);
      }
      else {
        item.click = false;
      }
      return item;
    })
    this.setState({ board: newBoard })
  }

  // updateList(newList) {
  //   this.setState({ board: newList })
  // }

  checkWin() {
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i].pos !== this.state.board[i].correctPos) {
        return false;
      }
    }
    return true;
  }

  shuffle() {
    for (let i = 0; i < 500; i++) {
      let movesArr = this.state.board.filter( (item) => {
        if(item.click) return item
      })
      let rand = (Math.floor(Math.random() * movesArr.length))
      let move = this.state.board.findIndex((item) => item.correctPos === movesArr[rand].correctPos)
      this.moveTile(move);
    }
    // this.setState({ board: newBoard })
  }

  moveTile(index) {
    let empty = this.state.board.findIndex((item) => item.empty === true)
    let copy = this.state.board;
    let holder = this.state.board[empty].pos
    copy[empty].pos = copy[index].pos;
    copy[empty].empty = false;
    copy[index].pos = holder;
    copy[index].empty = true;
    this.setState({ board: copy })
    this.addClickEve();
    // console.log(props.winCheck())
  }


  componentDidMount() {
    this.addClickEve()
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Tile
            data={this.state.board}
            update={this.moveTile}
            checkWin={this.checkWin}
          />
          <button className='btn btn-primary' onClick={() => this.shuffle()}>Shuffle</button>
        </div>
      </div>
    )
  }
}

export default App;
