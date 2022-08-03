import {API_URL} from "constants/api";

export const fetcher = async (category) => {
    const response = await fetch(`${API_URL}/${category}.json?api-key=${process.env.NEXT_PUBLIC_KEY}`);
    try {
        return await response.json();
    } catch (e) {
        throw new Error(e.message)
    }
}