# Puzzle

## Model
    state = {
    board = [{pos: 0 - 15, correctPos : 0 - 15, image: part of the image, click: false}] Where position will change and correctPos is a constant
    }
    
## View
    displays the whole board
    render(){
        return(
            stuff about the game
            <Tile 
                data = this.state.board
            />
        )
    }

## Controller
    checkWin()
        loop through each tile and if the pos is equal to correctPos for each then return true else false;
        checkWin(){
            for(let i = 0; i < board.length; i++){
                if(board[i].pos !== board[i].correctPos){
                    return false;
                }
            }
            return true;
        }

    winBoard()
        if win then display winner
        winBoard(){
            change the display text to say winner
        }

    shuffle()
        shuffles the tiles. random number from 1-count move to that area.
        shuffle(){
            let newBoard = this.state.board
            for(let i = 0; i < 500; i++){
                let count = 0;
                for(let j = 0; j < newBoard.length; j++){
                    if(newBoard[i].click === true) count++
                }
                let random = Math.floor(Math.random() * count);
                for(let j = 0; j < newBoard.length; j++){
                    if(count = random && newBoard[i].click === true){
                        let empty = this.state.board.findIndex((item) => item.correctPos === 0);
                        let oldPos = empty.pos;
                        empty.pos = newBoard[i].pos;
                        newBoard[i].pos = oldPos;
                    }
                    else if (newBoard[i].click === true){
                        count++;
                    }
                }
            }
            this.setState({board: newBoard})
        }

    importImage()
        takes the an image and splits it into 16 square pieces then puts those images into the board state
        importImage(){
            maybe put in tile
        }

    addClickEve()
        add click event for the tiles taht surrond the open space
        addClickEve(){
            let empty = this.state.board.findIndex((item) => item.correctPos === 0);
            let newBoard = this.state.board.map( (item, index) =>{
                if(empty.pos - 4 === index || empty.pos 4 === index || empty.pos - 1 === index || empty.pos + 1 === index){ 
                    item.click = true;
                }
                else{
                    item.click = false;
                }
            })
            this.setState({board: newBoard})
        }

# Tile

## Model
    send props from board

## View
    show the tile
    render() {
        return(
            this.props.data.map((item, index) => {
                if(item.click === true){
                    <div
                    onClick = {() => swapEmpty()}
                    value = item
                    >
                    {item.pos}
                    </div>
                }
                else{
                    <div>
                        {item.pos}
                    </div>
                }
            })
        )
    }

## Controller
    updateTile()
        when a tile moves update the currentPos of it and add an eventClick if it has event click of true.
        updateTile(){
            let empty = board.findIndex((item) => item.empty === true)
            let copy = board;
            let holder = board[empty].pos
            copy[empty].pos = copy[index].pos;
            copy[empty].empty = false;
            copy[index].pos = holder;
            copy[index].empty = true;
            updateState(copy)
            checkWin()
        }
