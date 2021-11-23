const quotes = [
    {
        quote: "부자 처럼 생각하고 부자처럼 행동하라. 나도 모르는 사이에 부자가 되어있다.",
        auathor: "삼성 이건희",
    },
    {
        quote: "지도를 거꾸로 돌려봐라. 우리가 갇힌게 아니라 우리가 바다로 나가는 출발점이다.",
        auathor: "동원 김재철",
    },
    {
        quote: "잠자는 동안에도 돈이 들어오는 방법을 찾지 못한다면 당신은 죽을때 까지 일해야 할것이다.",
        auathor: "워렌버핏"
    },
    {
        quote: "가지고 있는 어떤 재주든 써라. 가장 노래 잘하는 새들만 지저귄다면, 숲은 너무 적막할 것이다.",
        auathor: "헨리 반 다이크"
    },
    {
        quote: "목표에 가까워지면 가까워 질수록 고난과 시련은 점점 심화된다",
        auathor: "요한 괴테"
    },
    {
        quote: "인생의 위대한 목표는 지식이 아니라 행동이다",
        auathor: "헉슬러"
    },
    {
        quote: "변명중에 가장 어리석고 못난 변명은 '시간이 없어서' 라는 변명이다.",
        auathor: "에디슨"
    },
    {
        quote: "자신감은 전염된다. 자신감 부족도 마찬가지이다.",
        auathor: "빈스 룸바르디"
    },
    {
        quote: "겸손은 사람을 머물게하고, 칭찬은 사람을 가깝게하고, 넓음은 사람을 따르게하고, 깊음은 사람을 감동케 한다",
        auathor: "다산 정약용"
    },
    {
        quote: "절대 후회하지 마라, 좋았다면 추억이고, 나빴다면 경험이다.",
        auathor: "캐를 터킹턴"
    },
]

const quote = document.querySelector("#quotes h3:first-child");
const auathor = document.querySelector("#quotes h5:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;
auathor.innerText = todayQuote.auathor;

