function showMyBody(dat){
    let plantilla = ""
    plantilla +=
    `
    <div class="col-md-8">
    <h3 class="pb-4 mb-4 fst-italic border-bottom">
      ${dat.title}
    </h3>`;

    dat.article.forEach((val,id)=>{
        plantilla +=
        `
        <article class="mb-5">
          <h2 class="blog-post-title">${val.titleArticle}</h2>
          <p class="blog-post-meta">${val.dateArticle}</p>
          <p>${val.contentArticle}</p>
          <hr>
        </article>`;
    })
    return plantilla;
}
onmessage = (event) =>{
    let resultado = showMyBody(event.data)
    postMessage(resultado);
}