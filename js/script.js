
const url = "https://fedup.hollundplants.no/wp-json/wp/v2/posts?_embed&per_page=10";
const blogContainer = document.querySelector(".blog-container");

async function getPosts() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        blogContainer.innerHTML = "";
        

        for (let i = 0; i < results.length; i++) {

            const convertDate = new Date (results[i].date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric",});


            blogContainer.innerHTML += `<div class="post-card">
                                            <h3>${results[i].title.rendered}</h3>
                                            <p>By: ${results[i]._embedded.author[0].name}</p>
                                            <a href="blogdetails.html?id=${results[i].id}">
                                                <button class="read-button">Read Post</button>
                                            </a>
                                        </div>`;

        }

    } catch(error){
        console.log(error);
    }
}

getPosts();