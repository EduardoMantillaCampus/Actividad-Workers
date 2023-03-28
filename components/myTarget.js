export default{
    data:[
        {
            title: "World",
            article :"Featured post",
            date : "Nov 12",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content",
            url: "https:www.google.com",
            img: "./assets/dist/img/SmarthWatch.jpg"
        },
        {
            title: "World",
            article :"Featured post",
            date : "Nov 12",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content",
            url: "https:www.google.com",
            img: "./assets/dist/img/SmarthWatch.jpg"
        },
        {
            title: "World",
            article :"Featured post",
            date : "Nov 12",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content",
            url: "https:www.google.com",
            img: "./assets/dist/img/SmarthWatch.jpg"
        },{
            title: "World",
            article :"Featured post",
            date : "Nov 12",
            content: "This is a wider card with supporting text below as a natural lead-in to additional content",
            url: "https:www.google.com",
            img: "./assets/dist/img/SmarthWatch.jpg"
        }
    ],
    showTarget(){
        let worker = new Worker('storage/wsMyTarget.js');
        worker.postMessage(this.data);
        worker.onmessage=(event)=>{
            console.log(event.data);
            document.querySelector("#target").insertAdjacentHTML("beforeend",event.data);
        }
        
    }
}