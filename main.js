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
    {
        "completed": false,
        "name": "종이학 모양 금속 조각",
        "link": "https://idus.kr/FTjGn",
        "link_title": "https://idus.kr/FTjGn",
    },
    {
        "completed": false,
        "name": "약과 모형",
        "link": "https://idus.kr/F5Sil",
        "link_title": "https://idus.kr/F5Sil",
    },
    {
        "completed": false,
        "name": "실리콘 컵받침",
        "link": "http://kko.to/fFmUboezF0",
        "link_title": "http://kko.to/fFmUboezF0",
    },
    {
        "completed": false,
        "name": "악세사리 트레이",
        "link": "https://idus.kr/F9avO",
        "link_title": "https://idus.kr/F9avO",
    },
    {
        "completed": false,
        "name": "조말론 코롱",
        "link": "http://kko.to/n_Z9jIDCXA",
        "link_title": "http://kko.to/n_Z9jIDCXA",
    },
    {
        "completed": false,
        "name": "드립 분쇄 원두",
        "link": "https://terarosa.com/market/product/detail/158-158?categoryId=5#;",
        "link_title": "https://terarosa.com/market/product/detail/158-158?categoryId=5#;",
    },
    {
        "completed": false,
        "name": "하얗고 얇은 바람막이",
        "link": "https://www.nike.com/kr/t/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EC%97%90%EC%84%BC%EC%85%9C-%EC%97%AC%EC%84%B1-%EC%9A%B0%EB%B8%90-%EC%9E%AC%ED%82%B7-O66HvTMH/DX5865-100",
        "link_title": "나이키 바람막이 링크",
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
            <small class="thanks">${wish.completed ? "고마워요!" : ""}</small>
        </li>
    `).join('') + "</ul>"
}

container.innerHTML = getWishlist(wishlist);
