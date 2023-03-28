function showTarget(dat){
    let plantilla = "";
    dat.forEach((val,id) => {
        plantilla +=`
        <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col-6 p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">${val.title}</strong>
                    <h3 class="mb-0">${val.article}</h3>
                    <div class="mb-1 text-muted">${val.date}</div>
                    <p class="card-text mb-auto">${val.content}</p>
                    <a href="${val.url}" class="stretched-link">Continue reading</a>
                </div>
                <div class="col-6">
                    <img src="${val.img}" style="width:100%; height:100%; object-fit: scale-down;">
                </div>
                
            </div>
            
        </div>`
    })
    return plantilla;
}
onmessage = (event) => {
    let mensaje = showTarget(event.data);
    postMessage(mensaje);
}