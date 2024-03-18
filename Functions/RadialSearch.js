//Sleep function to wait for the animation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Clearing the child nodes in the grid-container class
function clearGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//Not out of bounds
function safe(i,j,n){
    if(i < n && i >= 0 && j < n && j >= 0) return true;
    return false;
}

//Color Change of the Grid
function ChangeColors(i,j){
    var node = document.getElementById(i.toString() + "-" + j.toString());
    node.style.backgroundColor = '#FF204E';
    return;
}

//Directions of propogation
async function Up(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    Up(i-1,j,n);
}

async function Down(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    Down(i+1,j,n);
}

async function Left(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    Left(i,j-1,n);
}

async function Right(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    Right(i,j+1,n);
}

async function DiagonalLeftUp(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    DiagonalLeftUp(i-1,j-1,n);
    Left(i,j-1,n);
    Up(i-1,j,n);
}

async function DiagonalLeftDown(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    DiagonalLeftDown(i+1,j-1,n);
    Left(i,j-1,n);
    Down(i-1,j,n);
}

async function DiagonalRightDown(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    DiagonalRightDown(i+1,j+1,n);
    Down(i-1,j,n);
    Right(i,j+1,n);
}

async function DiagonalRightUp(i, j, n){
    if(safe(i,j,n) === false) return;
    ChangeColors(i,j);
    await sleep(100);
    DiagonalRightUp(i-1,j+1,n);
    Up(i-1,j,n);
    Right(i,j+1,n);
}

//Main Function
async function RadialSearch(){
    var gridContainer = document.querySelector(".grid-container");
    clearGrid(gridContainer);

    //Recieving Dimensions of grid
    var n = document.getElementById("build").value;
    n = parseInt(n);

    //Building the grid
    var g_layout = "";
    for(let i=0;i<n;i++){
        g_layout = g_layout + "'";
        for(let j=0;j<n;j++){
            var r = document.createElement("div");
            var cname = i.toString();
            r.className = cname;
            r.id = i.toString() + "-" + j.toString();
            r.style.gridArea = cname;
            g_layout = g_layout + cname + " ";
            gridContainer.appendChild(r);
        }
        g_layout = g_layout + "' ";
    }

    //Grid Specifications
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateAreas = g_layout;
    gridContainer.style.gap = "5px";
    gridContainer.style.backgroundColor = "#00224D";
    gridContainer.style.padding = "10px";

    //Child Node div specifications
    var gridContainerDivs = document.querySelectorAll('.grid-container > div');
    gridContainerDivs.forEach( function(div) {
        div.style.backgroundColor = '#5D0E41';
        div.style.textAlign = 'center';
        div.style.padding = '10px 0';
        div.style.fontSize = '30px';
        div.style.borderRadius = "100%"
    });

    //Starting the radial propogation from the centre of grid
    let mi = Math.floor(n/2);
    let mj = mi;

    //Fixing a color to centre
    var centre = document.getElementById(mi.toString() + "-" + mj.toString());
    centre.style.backgroundColor = '#A0153E';

    //Starting the asynchronous function calls for the color change and 
    DiagonalLeftUp(mi-1,mj-1,n);
    Left(mi,mj-1,n);
    DiagonalLeftDown(mi+1,mj-1,n);
    Down(mi+1,mj,n);
    DiagonalRightDown(mi+1,mj+1,n);
    Right(mi,mj+1,n);
    DiagonalRightUp(mi-1,mj+1,n);
    Up(mi-1,mj,n);
}