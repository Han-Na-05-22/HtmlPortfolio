const body = document.querySelector("body");
const main = document.querySelector("main");
const video = document.querySelector(".video");
const playListId = "PL0sD6ZGYpbrKWrPFqyeaTvHFb5lL8h4p7";
const Key = "AIzaSyCn1tyD9aK47ZQNCljr9-sDVPjoLxpdJhc";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${Key}&playlistId=${playListId}&maxResult=${num}`;

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    let items = json.items;
    console.log(items);

    let result ="";

    items.map(item=>{
        result += `
                        <article>
                            <a href="${item.snippet.resourceId.videoId}">
                                <img src="${item.snippet.thumbnails.medium.url}">
                            </a>
                            <h3>${item.snippet.title}</h3>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia recusandae architecto, dolore aliquid adipisci voluptatem, laboriosam quod, perferendis ipsa at temporibus nam laudantium accusamus. Ratione eaque nam repellat, deserunt quidem aperiam ex excepturi exercitationem magnam tenetur id explicabo odit consectetur obcaecati? Porro ea doloribus dolores. Eum animi dolorem nostrum amet, illum autem inventore nisi ea, repellendus quasi maxime expedita molestias in error voluptatem suscipit minus fugiat impedit? Autem, ullam!</p>
                                <hr>
                                <hr>
                                <span>Saturday, January 15th, 2022</span>
                            </div>
                        </article>
                        `;
    });

    video.innerHTML = result;
});