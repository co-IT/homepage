import { component$ } from '@builder.io/qwik';
import { ArticleCard } from '../cards';

export const ArticleSection = component$(() => {
  const articles = [
    {
      direction: 'right',
      heading: 'Für Veränderungen begeistern',
      text: 'Das Meistern neuer Herausforderungen sehen wir als größte Hürde für kleine und mittelständische Unternehmen. Deshalb wollen wir helfen Veränderung als Chance wahrzunehmen und Erneuerungen zu etwas Positivem machen. Uns prägen Werte wie Pflichtgefühl und Kollegialität. Daher gehört der ehrliche und verbindliche Handschlag für unsere Mitarbeiter auch in der digitalen Welt dazu.',
      imageSource: '/img/about/flip-chart-session.avif',
      imageAlternateText: 'article'
    },
    {
      direction: 'left',
      heading: 'Zusammen mehr erreichen',
      text: 'Wir haben den Anspruch Ihnen Spitzenleistungen zu bieten. Uns ist bewusst, dass es dafür eine partnerschaftliche Zusammenarbeit auf Augenhöhe braucht. Die Technologie kommt dabei zum Schluss. Zuerst analysieren wir daher gemeinsam Ihre fachlichen Bedürfnisse und unternehmensspezifischen Hintergrund. Erst im Anschluss bringen wir unser technisches Tiefen- und prozessuales Breitenwissen ein, um Ihre Geschäftsprozesse bestmöglich umzusetzen. Unsere Philosophie ist darauf ausgerichtet Qualitätskriterien für modernes, effektives und angenehmes Arbeiten umzusetzen, damit wir in einem kontinuierlichen Verbesserungsprozess die Weichen sukzessive auf nachhaltige, erfolgreiche Veränderung stellen. Regelmäßig bedarf es dafür nicht nur das Wissen darüber, was funktioniert, sondern eben auch was nicht funktioniert.',
      imageSource: '/img/about/team-up.avif',
      imageAlternateText: 'article'
    },
    {
      direction: 'right',
      heading: 'Uns prägt Faszination',
      text: 'Speziellen Wert legen wir deshalb auf die Auswahl unserer Mitarbeiter. Wir wissen, dass Faszination und Leidenschaft zu Höchstleistungen motivieren und wo diese sind, ist Kollegialität auch nicht weit. Die gute Zusammenarbeit hat besondere Vorteile für Sie: Lösungen können entlang der gesamten Wertschöpfungskette entwickelt werden. Der Übergang von der Prozessanalyse über das Bereitstellen der zuverlässigen Infrastruktur bis hin zur individuellen Softwareentwicklung geschieht nahtlos und liefert Ihnen einen echten Mehrwert.',
      imageSource: '/img/about/it-fascination.avif',
      imageAlternateText: 'article'
    }
  ];
  return (
    <div class='w-full container mx-auto flex flex-col gap-y-10 lg:gap-y-20'>
      {articles.map((article, key) => (
        <>
          <ArticleCard
            direction={article.direction}
            heading={article.heading}
            text={article.text}
            imageSource={article.imageSource}
            imageAlternateText={article.imageAlternateText}
            key={key}
          />
          <hr class='mt-10 lg:mt-20' />
        </>
      ))}
    </div>
  );
});
