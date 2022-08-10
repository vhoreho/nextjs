import { useRouter } from "next/router";
import { Article } from "components/article/Article";

export default function ArticlePage() {
  const router = useRouter();
  const data = router.query;

  return (
    <Article {...data} />
  )
}