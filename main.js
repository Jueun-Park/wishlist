const container = document.getElementById('wishlist-container');
const wishlist = [
    {
        "completed": true,
        "name": "화장실 앞에 둘 발매트 2개",
        "link": "https://ozip.me/6I7takF",
    },
    {
        "completed": false,
        "name": "벽에 걸 시계",
        "link": "https://smartstore.naver.com/bananagongbang81/products/10224566072",
    },
    {
        "completed": true,
        "name": "씨서볼",
        "link": "http://haude.kr/products/8285694270",
    },
    {
        "completed": true,
        "name": "거실에 둘 장스탠드",
        "link": "https://www.ikea.com/kr/ko/p/hektogram-floor-uplighter-silver-colour-white-40477731/",
    },
    {
        "completed": true,
        "name": "거실에 둘 장스탠드에 끼울 스마트 전구",
        "link": "https://brand.naver.com/tplink/products/5744555273",
    },
    {
        "completed": true,
        "name": "옷방 전신거울 앞에 둘 러그",
        "link": "https://smartstore.naver.com/likethix/products/5235191470",
    },
    {
        "completed": true,
        "name": "바이칸 청소솔",
        "link": "https://brand.naver.com/vikan/products/8401370561",
    },
    {
        "completed": false,
        "name": "펠로우 오드 브루 그라인더 Gen2 화이트",
        "link": "https://brand.naver.com/fellowkorea/products/11378776732",
    },
    {
        "completed": false,
        "name": "핸드드립용 전기 주전자",
        "link": "https://brand.naver.com/fellowkorea/products/11379675377",
    },
    {
        "completed": true,
        "name": "핸드드립/요리용 저울",
        "link": "https://smartstore.naver.com/modernpeak/products/6186277243"
    },
    {
        "completed": false,
        "name": "반려 미생물",
        "link": "https://brand.naver.com/reencle/products/3337932462",
    },
    {
        "completed": true,
        "name": "컵 (집에 아직 없는 종류의 것들)",
    },
    {
        "completed": true,
        "name": "오래 사는 식물이 심겨진 화분",
    },
    {
        "completed": true,
        "name": "여름 잠옷",
        "link": "https://brand.naver.com/dossy/products/11662445695"
    },
    {
        "completed": false,
        "name": "장식용 아크릴 함",
        "link": "https://smartstore.naver.com/ezu/products/11658955522",
    },
    {
        "completed": false,
        "name": "앨리스 배열 저소음 바나나축 키보드",
        "link": "https://brand.naver.com/keychron/products/11615578456"
    },
    {
        "completed": true,
        "name": "미니 2단 스텐 트롤리와 사이드 바스켓",
        "link": "https://smartstore.naver.com/ways/products/11825096698"
    },
    {
        "completed": false,
        "name": "세븐원더스 듀얼",
        "link": "https://brand.naver.com/koreaboardgames/products/5189378227"
    },
    {
        "completed": false,
        "name": "센추리: 향신료의 길",
        "link": "https://brand.naver.com/asmodeekorea/products/5572353047"
    },
    {
        "completed": false,
        "name": "더마인드 익스트림",
        "link": "https://smartstore.naver.com/edupop/products/11351699367"
    },
    {
        "completed": false,
        "name": "스틱 스택",
        "link": "https://smartstore.naver.com/edupop/products/5672975163"
    }
]
const wishlist2024 = [
    {
        "completed": true,
        "name": "배드민턴 가방",
        "link": "https://www.yonexmall.com/m2/goods/view.php?goodsno=7099",
        "link_title": "요넥스 가방 링크",
    },
    {
        "completed": true,
        "name": "종이비행기 모양 금속 조각",
        "link": "https://idus.kr/Fu6JV",
        "link_title": "https://idus.kr/Fu6JV",
    },
    {
        "completed": true,
        "name": "맥주잔 2개",
        "link": "https://kko.to/13XXgcPl3u",
        "link_title": "https://kko.to/13XXgcPl3u",
    },
    {
        "completed": true,
        "name": "배드민턴 반바지",
        "link": "https://kko.to/PP76qaRZHF",
        "link_title": "https://kko.to/PP76qaRZHF",
    },
    {
        "completed": true,
        "name": "하리오 V60 커피 드리퍼",
        "link": "https://kko.to/U0s2DW7zFE",
        "link_title": "https://kko.to/U0s2DW7zFE",
    },
    {
        "completed": true,
        "name": "브라질 빈할 누텔라 커피 원두",
        "link": "https://www.neato.co.kr/48/?idx=203",
        "link_title": "https://www.neato.co.kr/48/?idx=203",
    },
    {
        "completed": true,
        "name": "모여봐요 동물의 숲",
        "link": "https://store.nintendo.co.kr/70010000027621",
        "link_title": "https://store.nintendo.co.kr/70010000027621",
    },
    {
        "completed": true,
        "name": "슈퍼 마리오 오디세이",
        "link": "https://store.nintendo.co.kr/70010000009372",
        "link_title": "https://store.nintendo.co.kr/70010000009372",
    },
    {
        "completed": true,
        "name": "배드민턴 키링",
        "link": "https://idus.kr/FYMde",
        "link_title": "https://idus.kr/FYMde",
    },
    {
        "completed": true,
        "name": "미니 크로스백",
        "link": "https://www.musinsa.com/app/goods/1992253?_gf=A",
        "link_title": "https://www.musinsa.com/app/goods/1992253?_gf=A",
    },
    {
        "completed": true,
        "name": "현금 지갑",
        "link": "https://www.musinsa.com/app/goods/3870889?_gf=A",
        "link_title": "https://www.musinsa.com/app/goods/3870889?_gf=A",
    },
]
const wishlist2023 = [
    {
        "completed": true,
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
        "completed": true,
        "name": "종이학 모양 금속 조각",
        "link": "https://idus.kr/FTjGn",
        "link_title": "https://idus.kr/FTjGn",
    },
    {
        "completed": true,
        "name": "약과 모형",
        "link": "https://idus.kr/F5Sil",
        "link_title": "https://idus.kr/F5Sil",
    },
    {
        "completed": true,
        "name": "실리콘 컵받침",
        "link": "http://kko.to/fFmUboezF0",
        "link_title": "http://kko.to/fFmUboezF0",
    },
    {
        "completed": true,
        "name": "악세사리 트레이",
        "link": "https://idus.kr/F9avO",
        "link_title": "https://idus.kr/F9avO",
    },
    {
        "completed": true,
        "name": "조말론 코롱",
        "link": "http://kko.to/n_Z9jIDCXA",
        "link_title": "http://kko.to/n_Z9jIDCXA",
    },
    {
        "completed": true,
        "name": "드립 분쇄 원두",
        "link": "https://terarosa.com/market/product/detail/158-158?categoryId=5#;",
        "link_title": "테라로사 원두 링크",
    },
    {
        "completed": true,
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
                ${wish.name}${wish.link ? `, 예를 들면 이런 것: <a target="_blank" href=${wish.link}>${wish.link_title || wish.link}</a>` : ""}
            </span>
            <small class="thanks">${wish.completed ? "고마워요!" : ""}</small>
        </li>
    `).join('') + "</ul>"
}

function getBody() {
    return (
        getWishlist(wishlist) +
        "<h3>작년의 기록</h3>" + getWishlist(wishlist2024) +
        "<h3>재작년의 기록</h3>" + getWishlist(wishlist2023)
    )
}

container.innerHTML = getBody();
