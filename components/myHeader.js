export default{
    title:"Apple",
    fundadores:[
        {
            name:"Steve Jobs",
            url:"https://es.wikipedia.org/wiki/Steve_Jobs"
        },
        {
            name:"Steve Wozniak",
            url:"https://es.wikipedia.org/wiki/Steve_Wozniak"
        },
        {
            name:"Ronald Wayne",
            url:"https://es.wikipedia.org/wiki/Ronald_Wayne"
        },
        {
            name:"Mike Markkula",
            url:"https://es.wikipedia.org/wiki/Mike_Markkula"
        }
    ],
    /*showFundadores(){
        let data ="";
            this.fundadores.forEach((val,id) => {
                data+=`<a class="p-2 link-secondary" target="t_blank" href="${val.url}">${val.name+ "--"+ id}</a>`
            })
        document.querySelector("#listFundadores").insertAdjacentHTML("beforeend",data);
    }
    ,
    showHeader(dat){
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
        document.querySelector("#header").insertAdjacentHTML("beforeend",plantilla);
    },*/
    fragShow(){
        let worker = new Worker('storage/wsMyHeader.js');  

        let opcion = [1,this.title]  
        worker.postMessage(opcion);

        opcion = [2,this.fundadores]  
        worker.postMessage(opcion);

        worker.onmessage = (event) =>{
            let data ;
            switch (event.data[0]) {
                case 1:
                    data = new DOMParser().parseFromString(event.data[1], "text/html");
                    document.querySelector("#header").append(...data.body.children);
                    break;
                case 2:
                    data = new DOMParser().parseFromString(event.data[1], "text/html");
                    document.querySelector("#listFundadores").append(...data.body.children);
                    break;
                default:
                    console.log("Error");
                    break;
            }
        }
    }
    
    
}