import { component$ } from '@builder.io/qwik';
import { ArticleCard } from '../cards';

export const ArticleSection = component$(() => {
  const articles = [
    {
      direction: 'right',
      heading: 'Wir meistern Komplexität im Team',
      text: 'Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsquent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen. Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Serivce-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.',
      imageSource: '/img/quality/header.avif',
      imageAlternateText: 'article'
    },
    {
      direction: 'left',
      heading: 'Wir meistern Komplexität im Team',
      text: 'Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsquent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen. Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Serivce-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.',
      imageSource: '/img/quality/header.avif',
      imageAlternateText: 'article'
    },
    {
      direction: 'right',
      heading: 'Wir meistern Komplexität im Team',
      text: 'Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsquent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen. Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Serivce-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.',
      imageSource: '/img/quality/header.avif',
      imageAlternateText: 'article'
    }
  ];
  return (
    <div class='w-full container mx-auto flex flex-col gap-y-10 lg:gap-y-20'>
      {articles.map((article, key) => (
        <div>
          <ArticleCard
            direction={article.direction}
            heading={article.heading}
            text={article.text}
            imageSource={article.imageSource}
            imageAlternateText={article.imageAlternateText}
            key={key}
          />
          <hr class='mt-10 lg:mt-20' />
        </div>
      ))}
    </div>
  );
});
