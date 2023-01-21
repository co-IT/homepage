export interface HeaderProps {
  type: 'landing-page' | 'content-page';
  backgroundImage: {
    source: string;
    alt: string;
  };
  headingSegments: { type: 'white' | 'accent'; text: string }[];
  teaser: string;
}
