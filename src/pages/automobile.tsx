import {ReactElement} from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';
import {fetcher} from "utils/fetcher";
import {News} from "components/news/News";

export default function Automobile():ReactElement {
    const router = useRouter();
    const {data, error} = useSWR('automobiles', fetcher);
    const section = router.pathname.slice(1);

    return (
        <News data={data} error={error} section={section}/>
    )
}