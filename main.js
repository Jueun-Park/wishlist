const container = document.getElementById('wishlist-container');
const wishlist = [
    {
        "completed": false,
        "name": "접고 펴는 부채",
        "link": "https://idus.kr/Fibow",
        "link_title": "https://idus.kr/Fibow",
    },
    {
        "completed": true,
        "name": "도커 각티슈 케이스",
        "link": "https://incatos.shop/product/%EB%8F%84%EC%BB%A4-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EA%B0%81%ED%8B%B0%EC%8A%88-%ED%9C%B4%EC%A7%80-%EC%BC%80%EC%9D%B4%EC%8A%A4-%ED%8B%B0%EC%8A%88%EC%BB%A4%EB%B2%84-%EC%82%AC%EA%B0%81-%EC%95%84%ED%81%AC%EB%A6%B4-%EA%B0%81%ED%8B%B0%EC%8A%88-%EC%BB%A4%EB%B2%84/11/",
        "link_title": "도커 각티슈 케이스 링크"
    },
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function getWishlist(wishlist) {
    shuffle(wishlist)
    return "<ul>" + wishlist.map(wish => `
        <li>
            <span class="${wish.completed ? "wishlist completed" : "wishlist"}">
                ${wish.name}, 예를 들면 이런 것: <a href=${wish.link}>${wish.link_title}</a>
            </span>
            <span class="thanks">${wish.completed ? "고마워요!" : ""}</span>
        </li>
    `).join('') + "</ul>"
}

container.innerHTML = getWishlist(wishlist);
