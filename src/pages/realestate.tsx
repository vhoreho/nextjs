import useSWR from 'swr';
import {v4} from "uuid";
import {useRouter} from "next/router";
import {fetcher} from "../utils/fetcher";

function realestate() {
    const router = useRouter();
    const {data, error} = useSWR('realestate', fetcher);

    if(error) return "Something went wrong";
    if(!data) return 'Loading...';

    return (
        <div>
            <h2>Top Real Estate Stories:</h2>
            <ul>
                {data?.results.map(
                    story =>
                        <li key={v4()}>{story.title}</li>
                )}
            </ul>
        </div>
    )
}

export default realestate;