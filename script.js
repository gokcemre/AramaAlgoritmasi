const searchInput = document.querySelector("#searchInput");
const list = document.querySelector("#list");

searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toUpperCase().trim();
    // console.log(searchTerm);

    let items = document.querySelectorAll("li")
    // console.log(items);

    for(let i=0; i < items.length; i++){
        let item = items [i]
        let text = item.innerHTML.toUpperCase().trim();

        if(text.includes(searchTerm)){
            item.style.display = "block"
        }else{
            item.style.display="none"
        }
    }
});