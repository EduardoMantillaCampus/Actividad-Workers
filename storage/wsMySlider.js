function showSlider(data){
    let plantilla = "";
    plantilla = `
    <div class="p-4 p-md-5 mb-4 text-white rounded style-img" style="background-image:url(${data.img}")> 
        <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">${data.title}</h1>
        <p class="lead my-3">${data.contenido}</p>
        <p class="lead mb-0"><a href="${data.url}" target="t_blank" class="text-white fw-bold">Saber Mas...</a></p>
        </div>
    </div>`;
    return plantilla;
}
onmessage = (event) =>{  
    postMessage(showSlider(event.data));
}