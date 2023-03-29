import config from '../storage/config/data.js';

export default{
   /*  data:{
        title: `Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
        href="https://twitter.com/mdo">@mdo</a>.`,
        subtitle: "Back to top"
    }, */
    showFooter(){

        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("dataMyFooter")));
        let worker = new Worker('storage/wsMyFooter.js');
        worker.postMessage(this.data);
        worker.onmessage = (event) =>{
            document.querySelector("#footer").insertAdjacentHTML("beforeend",event.data);
        }
    }
}