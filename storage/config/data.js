export default{
    
    dataMyHeader(){
        localStorage.setItem("dataMyHeader", JSON.stringify({
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
            ]
        }))
    },
    dataMySidebar(){
       localStorage.setItem('dataMySidebar', JSON.stringify({
        data:
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
        }
       }))
    },
    dataMySlider(){
        localStorage.setItem('dataMySlider', JSON.stringify({
            data:
            {
                title:"Title of a longer featured blog post",
                contenido: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
                url:"https://www.google.com/",
                img:"/assets/dist/img/fondo.png"
            }
        }))
    },
    dataMyTarget(){
        localStorage.setItem('dataMyTarget', JSON.stringify({ 
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
            ]
        }))
    },
    dataMyBody(){
        localStorage.setItem("dataMyBody", JSON.stringify({
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
    }
        }))
    },
    dataMyFooter(){
        localStorage.setItem('dataMyFooter', JSON.stringify({
            data:{
                title: `Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                href="https://twitter.com/mdo">@mdo</a>.`,
                subtitle: "Back to top"
            }
        }))
    }
}