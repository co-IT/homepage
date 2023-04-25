import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './layout.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class='container mx-auto mt-8'>
      <Slot></Slot>
    </div>
  );
});
