import { useRouter } from "next/router";
import { ArticleComponent } from "components/article/ArticleComponent";

export default function Article() {
  const router = useRouter();
  const data = router.query;

  return (
    <ArticleComponent {...data} />
  )
}