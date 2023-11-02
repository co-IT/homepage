import { component$ } from '@builder.io/qwik';

type PricePerUsePerMonthProps = {
  pricePerUser: number;
  usersCount: number;
};

export const PricePerUsePerMonth = component$(
  (props: PricePerUsePerMonthProps) => {
    const toEuro = (amount: number) =>
      amount.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
      });

    return (
      <div class='grid grid-cols-2 justify-end gap-4 self-end'>
        <span>Anwender / Monat</span>
        <span class='min-w-[6rem] text-lg font-bold'>
          {toEuro(props.pricePerUser)}
        </span>
        <span>Gesamt / Monat</span>
        <span class='min-w-[6rem] text-lg font-bold'>
          {toEuro(props.pricePerUser * props.usersCount)}
        </span>
      </div>
    );
  }
);
