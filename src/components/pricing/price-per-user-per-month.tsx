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
      <div class='grid self-end'>
        <div>
          <span class='text-sm font-medium'>{toEuro(props.pricePerUser)}</span>
          <span class='text-xs'>&nbsp;/&nbsp;Anwender&nbsp;/&nbsp;Monat</span>
        </div>
        <div>
          <span class='text-xl font-bold'>
            {toEuro(props.pricePerUser * props.usersCount)}
          </span>
          <span class='font-medium'>&nbsp;/&nbsp;Monat</span>
        </div>
      </div>
    );
  }
);
