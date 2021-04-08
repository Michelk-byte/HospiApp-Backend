const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d959c31b5493474b98aab6e4497d358e";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles
}
