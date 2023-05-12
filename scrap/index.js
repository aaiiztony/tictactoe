let columns = Math.floor(document.body.clientWidth/50);
let rows =  Math.floor(document.body.clientHeight/50)

const createTile = (index) => {
    const tile  = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}

const createTiles = (quantity) =>{
    Array.from(Array(quantity)).map((tile, index)=>{
        const wrapper = document.getElementById('tiles');
        wrapper.appendChild(createTile(index))
    })
}

createTiles(columns*rows);