type Headline = {
    main: string;
}
type Multimedia = {
    url: string
}

export type Props = {
    abstract: string;
    headline: Headline;
    section_name: string;
    lead_paragraph: string;
    pub_date: string;
    multimedia: Multimedia[];
}