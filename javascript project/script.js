const API_KEY="0ce759863cf943b3a04d96650fccd4ff";
const url="https://newsapi.org/v2/everything?q="
window.addEventListener('load',() => fetchNews("nepal"));
function reload(){
    window.location.reload();
}
async function fetchNews (query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const cardscontainer=document.querySelector('.cards-container');
    const newsCardTemplate=document.getElementById('template-news-card');
    cardscontainer.innerHTML="";
     articles.forEach(article=>{
        if(!article.urlToImage) return;
        const cardClone= newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardscontainer.appendChild(cardClone);
}) ;     
}
function fillDataInCard(cardClone,article){
    const newsImg= cardClone.querySelector("#news-img");
    const newsTitle= cardClone.querySelector("#news-title");
    const newsSource= cardClone.querySelector("#news-source");
    const newsDesc= cardClone.querySelector("#news-desc");
    newsImg.src=article.urlToImage ;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;
    const date= new Date(article.publishedAt).toLocaleString("en-us",{
      timezone:"Asia/Jakarta"
    });
    newsSource.innerHTML=`${article.source.name} . ${date}`;
    

cardClone.firstElementChild.addEventListener('click',()=>{
    window.open(article.url,"_blank")
});
}
let curSelectedNav=null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav=navItem;
    curSelectedNav.classList.add('active');

}
const searchButton=document.getElementById('search-button');
const searchText=document.getElementById('search-text');

searchButton.addEventListener('click',()=>{
   const query=searchText.value;
   if(!query) return;
   fetchNews(query);
   curSelectedNav?.classList.remove(active);
   curSelectedNav=null;


});