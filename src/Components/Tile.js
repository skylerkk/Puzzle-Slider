import React from 'react'

function Tile(props) {

    function updateTile(e) {
        props.update(e.target.id)
        props.checkWin();
    }

    return (
        props.data.map((item, index) => {
            if (item.click === true) {
                return (<div
                    className='col-3 border'
                    onClick={updateTile}
                    style={{
                        height:200
                    }}
                    id={index}
                >
                    {item.pos}
                </div>
                )
            }
            else {
                return (
                    <div
                        style={{
                            height: 200
                        }}
                        className='col-3 border'
                        id={index}
                    >
                        {item.pos}
                    </div>
                )
            }
        }
        )

    )

}

export default Tile;