import useSWR from 'swr';
import {v4} from "uuid";
import {useRouter} from "next/router";
import {fetcher} from "../utils/fetcher";

function automobile() {
    const router = useRouter();
    const {data, error} = useSWR('automobiles', fetcher);

    if(error) return "Something went wrong";
    if(!data) return 'Loading...';

    return (
        <div>
            <h2>Top Automobiles Stories:</h2>
            <ul>
                {data?.results.map(
                    story =>
                        <li key={v4()}>{story.title}</li>
                )}
            </ul>
        </div>
    )
}

export default automobile;