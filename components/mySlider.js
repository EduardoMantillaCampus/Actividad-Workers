export default{
    data:
    {
        title:"Title of a longer featured blog post",
        contenido: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
        url:"https://www.google.com/",
        img:"/assets/dist/img/fondo.png"
    },
    showSlider(){
        let worker = new Worker('storage/wsMySlider.js');
        worker.postMessage(this.data);
        worker.onmessage = (event)=>{
            let info = event.data;
            document.querySelector("#slider").insertAdjacentHTML("beforeend",info);
        }
    } 
}