import useSWR from 'swr';
import {v4} from "uuid";
import {fetcher} from "../utils/fetcher";

function finance() {
    const {data, error} = useSWR('business', fetcher);

    if(error) return "Something went wrong";
    if(!data) return 'Loading...';

    return (
        <div>
            <h2>Top Finance Stories:</h2>
            <ul>
                {data?.results.map(
                    story =>
                        <li key={v4()}>{story.title}</li>
                )}
            </ul>
        </div>
    )
}

export default finance;