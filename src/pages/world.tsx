import {ReactElement} from "react";
import useSWR from 'swr';
import {v4} from "uuid";
import {fetcher} from "../utils/fetcher";
import {Layout} from "../components/layout/Layout";

export default function World():ReactElement {
    const {data, error} = useSWR('world', fetcher);

    return (
        <div className='container'>
            {error && <h2>Something went wrong</h2>}
            {!data && <h2>Loading...</h2>}
            <ul>
                {data?.results.map(
                    story =>
                        <li key={v4()}>{story.title}</li>
                )}
            </ul>
        </div>
    )
}

World.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}