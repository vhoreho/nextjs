import {ReactElement} from "react";
import useSWR from 'swr';
import {fetcher} from "../utils/fetcher";
import {Layout} from "../components/layout/Layout";
import {News} from "../components/news/News";
import {useRouter} from "next/router";

export default function Finance():ReactElement {
    const router = useRouter();
    const {data, error} = useSWR('business', fetcher);
    const section = router.pathname.slice(1);

    return (
        <News data={data} error={error} section={section} />
    )
}

Finance.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}