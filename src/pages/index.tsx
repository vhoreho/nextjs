import {ReactElement} from "react";
import {Layout} from "components/layout/Layout";

export default function Home():ReactElement {
    return (
            <div style={{
                padding: '40px 0'
            }} className='container'>
                <h1>Hello Next JS</h1>
            </div>
        )     
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}