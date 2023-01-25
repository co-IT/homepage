import { component$ } from '@builder.io/qwik';
import { CalendarIcon, MailIcon, PhoneIcon } from '../icons';

export const InfoSection = component$(() => {
  // const handleSchedule = $(() => {});
  // const handleService = $(() => {});
  // const handleMail = $(() => {});

  return (
    <>
      <div class="container w-full mx-auto flex flex-col gap-y-28">
        <div class="flex justify-center text-center text-4xl font-bold leading-[48px] text-secondary">
          Wir haben Ihr Interesse geweckt?
        </div>

        <div class="flex flex-col gap-y-16 px-6 sm:flex-row sm:gap-x-16">
          <div class="w-full flex flex-col gap-y-7 items-center">
            <div class="flex flex-col gap-y-10 items-center">
              <CalendarIcon />

              <div class="text-xl text-black font-semibold leading-8 min-h-[150px] text-center tracking-wider">
                Reservieren Sie direkt den für Sie passenden Termin bei uns vor
                Ort oder ganz bequem online.
              </div>
            </div>

            {/* <NormalButton title="Termin vereinabren" click={() => handleSchedule()} /> */}
          </div>

          <div class="w-full flex flex-col gap-y-7 items-center">
            <div class="flex flex-col gap-y-10 items-center">
              <PhoneIcon />

              <div class="text-xl text-black font-semibold leading-8 min-h-[150px] text-center tracking-wider">
                Gerne können Sie auf unserer zentralen Durchwahl anrufen und
                optional eine Nachricht hinterlassen.
              </div>
            </div>

            {/* <NormalButton title="Anrufen" click={() => handleService()} /> */}
          </div>

          <div class="w-full flex flex-col gap-y-7 items-center">
            <div class="flex flex-col gap-y-10 items-center">
              <MailIcon />

              <div class="text-xl text-black font-semibold leading-8 min-h-[150px] text-center tracking-wider">
                Natürlich sind wir auch gerne klassisch via E-Mail für Sie da.
              </div>
            </div>

            {/* <NormalButton title="Schreiben" click={() => handleMail()} /> */}
          </div>
        </div>
      </div>
    </>
  );
});
