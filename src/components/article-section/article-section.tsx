import { component$ } from "@builder.io/qwik";

export const ArticleSection = component$(() => {
  return (
    <>
      <div class="w-full container mx-auto flex flex-col gap-y-20">
        <div class="px-10 flex flex-row gap-x-12">
          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent" />
              <div class="text-[40px] text-secondary font-bold leading-[50px]">
                Wir meistern Komplexität im Team
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal">
              Unsere T-Shaped Professionals flankieren ihr Tiefenwissen mit ausgewähltem Breitenwissen. Diesen Gedanken haben wir auf Unternehmensebene konsquent weitergedacht, indem wir gezielt Kompetenzen einzelner Mitarbeiter aufeinander abstimmen.
              Beispielsweise bleibt ein Haus, bei dem lediglich die Eingangstür, nicht aber die Fenster verschlossen sind, unsicher. Darum haben wir sowohl im IT-Serivce-Management als auch in der Softwareentwicklung zertifizierte Sicherheitsexperten.
            </div>
          </div>

          <div class="w-full">
            <img src="/img/quality/header.avif" alt="article" />
          </div>
        </div>

        <hr />

        <div class="px-10 flex flex-row gap-x-12">
          <div class="w-full">
            <img src="/img/quality/header.avif" alt="article" />
          </div>

          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent" />
              <div class="text-[40px] text-secondary font-bold leading-[50px]">
                Wir legen den Finger in die Wunde
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal">
              Um das Business zu verstehen, müssen wir Menschen verstehen! Wenn beispielsweise eine Software für das Wissensmanagement - wie ein Unternehmenswiki - eingeführt werden soll, stellen wir die Frage nach der Bereitschaft der Angestellten ihr wertvolles Wissen zu teilen. Hierfür sind sichere Arbeitsplätze und eine echte Vertrauenskultur Voraussetzung.
            </div>
          </div>
        </div>

        <hr />

        <div class="px-10 flex flex-row gap-x-12">
          <div class="w-full flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
              <div class="w-10 h-1 bg-accent" />
              <div class="text-[40px] text-secondary font-bold leading-[50px]">
                Wir wollen Probleme durchdringen
              </div>
            </div>

            <div class="text-base text-black font-normal leading-7 opacity-80 tracking-normal">
              Veränderung braucht Orientierung, Orientierung braucht Richtung und Richtung braucht ein Ziel. Darum treten wir gerne einen Schritt zurück und hinterfragen technische Wünsche. Ist es tatsächlich der Hammer, den ein Kunde braucht, oder ist es der Nagel in der Wand, um das Bild aufzuhängen?
            </div>
          </div>

          <div class="w-full">
            <img src="/img/quality/header.avif" alt="article" />
          </div>
        </div>

        <hr />
      </div>
    </>
  )
});