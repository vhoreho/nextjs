import {FC} from "react";
import useSWR from "swr";
import {Card} from "./card/Card";
import {v4} from "uuid";
import {fetcher} from "utils/fetcher";
import styles from './styles.module.scss';

type Props = {
    section: string|string[];
}

export const News:FC<Props> = ({section}) => {
    const {data, error} = useSWR(section, fetcher);

    return (
        <div className={styles.news}>
            {error && <h2>Something went wrong</h2>}
            {!data && <h2>Loading...</h2>}
            <ul className={styles.list}>
                {data?.results.map(
                    story => <Card key={v4()} story={story} section={section} />
                )}
            </ul>
        </div>
    )
}