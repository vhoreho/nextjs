export const fetcher = async (category) => {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=ZGnYeMXFe2qj5uVKnmdIF36750qfoiG0`);
    const data = await response.json();
    return data;
}