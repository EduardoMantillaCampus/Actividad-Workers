import config from '../storage/config/data.js';

export default{
    /* data:
    {
        title:"About",
        content:"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.",
        article:[
            {
                titleArticle: "Archives",
                content:[
                    'March 2021',
                    'February 2021',
                    'January 2021',
                    'December 2020',
                    'November 2020',
                    'October 2020',
                    'September 2020',
                    'August 2020',
                    'July 2020',
                    'June 2020',
                    'May 2020',
                    'April 2020'
                ]
            },
            {
                titleArticle: "Elsewhere",
                content:[
                    'GitHub',
                    'Twitter',
                    'Facebook'
                ]
            }
        ]
    }, */
    showAbout(){

        config.dataMySidebar();
        Object.assign(this, JSON.parse(localStorage.getItem("dataMySidebar")));

        let worker = new Worker('storage/wsMySidebar.js');
        worker.postMessage(this.data)
        worker.onmessage = (event) =>{
            document.querySelector("#body").insertAdjacentHTML("beforeend",event.data);
        }
        
    }
}