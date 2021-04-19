let apiKey = 'a747758cca2546569991ba04e0b4ef4e';
let source = 'bbc-news';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let news = "";
        articles.forEach(function(element,index) {
            news += `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking news ${index+1}: </b> ${element.description};
                                </button>
                            </h2>
                        </div>
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">${element.content} <a href="${element.url}"> Read more...</a></div>
                        </div>
                    </div>`
        });
        newsAccordion.innerHTML = news;
    }
    else{
        console.log('Some error occured');
    }
}
xhr.send();