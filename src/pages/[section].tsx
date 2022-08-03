import {useRouter} from "next/router";
import {News} from "../components/news/News";
import {ReactElement} from "react";

export default function Section():ReactElement {
    const router = useRouter();
    const { section } = router.query;

    return (
        <News section={section}/>
    )
}
