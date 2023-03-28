export default{
    data:
    {
        title: "From the Firehose",
        article:[
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            },
            {
                titleArticle: `Sample blog post`,
                dateArticle: `January 1, 2021 by <a href="#">Mark</a>`,
                contentArticle: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.`
            }
        ]
    },
    showBody(){
        let worker = new Worker('storage/wsMyBody.js');
        worker.postMessage(this.data);

        worker.onmessage = (event) =>{            
            document.querySelector("#body").insertAdjacentHTML("beforeend", event.data);
        }        
    }
}