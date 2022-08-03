import {ReactElement} from "react";
import useSWR from 'swr';
import {fetcher} from "../utils/fetcher";
import {News} from "../components/news/News";
import {useRouter} from "next/router";

export default function Realestate():ReactElement {
    const router = useRouter();
    const {data, error} = useSWR('realestate', fetcher);
    const section = router.pathname.slice(1);

    return (
        <News data={data} error={error} section={section} />
    )
}