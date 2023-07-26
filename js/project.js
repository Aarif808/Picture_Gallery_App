// it is a accesskey variable to take my unsplash accesskey
const accesskey="sU7XUZCDobRIgHoU1yiJzTy4A0u_om-hNXv0UJPAHAE";
// id of search form
const searchForm=document.getElementById("search-form");
// id variable of first btn
const searchBox=document.getElementById("search-box");
// div id 
const searchResult=document.getElementById("search-result");
// id of second btn
const searchMore=document.getElementById("show-more");
// created one const variable to take my unsplash accesskey
let keyword="";
// 
let page=1;
// function to display img on web page
async function searchImages(){
  keyword=searchBox.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response=await fetch(url);
  const data=await response.json();
  if(page===1){
    searchResult.innerHTML="";
  }

  // console.log(data);
  const results=data.results;
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })
  searchMore.style.display="block";
}
//
searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchImages();
})
searchMore.addEventListener("click",()=>{
  page++;
  searchImages();

})
