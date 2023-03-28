function mostrarData(data){
    let plantilla=""
    data.forEach((val,id) => {
        plantilla+= `<a>${val.name}</a><br>`;
    });
    return plantilla;
}
function showFundadores(dat){
    let data ="";
        dat.forEach((val,id) => {
            data+=`<a class="p-2 link-secondary" target="t_blank" href="${val.url}">${val.name}</a>`
        })
    return data;

}
function showHeader(dat){
    let plantilla = "";
    plantilla =
    `
    <div class="container">
        <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-center align-items-center">
            <div class="col-12 text-center">
            <a class="blog-header-logo text-dark" href="#">${dat}</a>
            </div>
        </div>
        </header>
        <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between" id="listFundadores">
        </nav>
        </div>
    </div>
    `;
    return plantilla;
}
onmessage = (event) =>{
    //let prueba= event.data;
    let respuesta = []
    //let prueba = mostrarData(event.data);
    //postMessage(event.data[0])

    switch (event.data[0]){
        case 1:
            respuesta=[1,showHeader(event.data[1])];
            break;
        case 2:
            respuesta=[2,showFundadores(event.data[1])];
            break;
    }
    postMessage(respuesta)
}