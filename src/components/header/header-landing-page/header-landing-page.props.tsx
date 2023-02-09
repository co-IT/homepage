export interface HeaderLandingPageProps {
  headingSegments: { type: 'white' | 'accent'; text: string }[];
  backgroundImage: {
    source: string;
    alt: string;
  };
  teaser: string;
}
