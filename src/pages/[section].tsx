import {ReactElement} from "react";
import {useRouter} from "next/router";
import {News} from "../components/news/News";

export default function Section():ReactElement {
    const router = useRouter();
    const { section } = router.query;

    return (
        <News section={section}/>
    )
}
