export const categoryFetcher = async (category) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${category}.json?api-key=${process.env.NEXT_PUBLIC_KEY}`);
  try {
    return await response.json();
  } catch (e) {
    throw new Error(e.message)
  }
}