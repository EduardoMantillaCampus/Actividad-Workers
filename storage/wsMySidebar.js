function showMySidebar(dat){
    let plantilla = "";
        plantilla+=`
        <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
                <div class="p-4 mb-3 bg-light rounded">
                    <h4 class="fst-italic">${dat.title}</h4>
                    <p class="mb-0">${dat.content}</p>
                </div>`;

            dat.article.forEach((val,id)=>{
                plantilla+=`    
                <div class="p-4">
                    <h4 class="fst-italic">${dat.article[id].titleArticle}</h4>
                    <ol class="list-unstyled mb-0">`;
                    dat.article[id].content.forEach((val,id)=>{
                        plantilla+=`
                        <li><a href="#">${val}</a></li>`
                    })
                    plantilla+=`
                    </ol>
                </div>`;
            })

        plantilla+=`    
            </div>
        </div>
        `;
    return plantilla;
}
onmessage = (event) =>{
    let resultado = showMySidebar(event.data);
    postMessage(resultado);
}