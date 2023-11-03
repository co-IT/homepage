import { component$ } from '@builder.io/qwik';
import { InfoPopover } from '../info-popover/info-popover';
import type { ProductFeature } from './product-feature';

type ProductFeatureListProps = {
  features: ProductFeature[];
};

export const ProductFeatureList = component$(
  (props: ProductFeatureListProps) => {
    return (
      <ul class='grid gap-y-2'>
        {props.features.map((feature, key) => {
          return (
            <li key={key} class='align-center flex gap-2'>
              {feature.detail && <InfoPopover text={feature.detail} />}
              {/* margin-top is a hack since the InfoPopover is 24px height
                  The InfoPopover should have a height of 18px.
                  Currently, we do not know where the extra 8px come from. 
                */}
              <span class='mt-[-.25em] text-black'>{feature.text}</span>
            </li>
          );
        })}
      </ul>
    );
  }
);
