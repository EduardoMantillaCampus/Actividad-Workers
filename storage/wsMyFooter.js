function showMyFooter(dat){
    let plantilla = ""
    plantilla += 
    `
    <footer class="blog-footer">
        <p>${dat.title}</p>
        <p>
        <a href="#">${dat.subtitle}</a>
        </p>
    </footer>
    `;
    return plantilla;
}

onmessage = (event) =>{
    let resultado=showMyFooter(event.data)
    postMessage(resultado);
}