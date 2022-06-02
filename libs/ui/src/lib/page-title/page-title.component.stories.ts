import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UiModule } from '../ui.module';
import { PageTitleComponent } from './page-title.component';

export default {
  title: 'PageTitleComponent',
  component: PageTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        UiModule.forRoot({
          browserTab: { titlePrefix: '', titleSeparator: '' },
        }),
      ],
    }),
  ],
} as Meta<PageTitleComponent>;

const Template: Story<PageTitleComponent> = (args: PageTitleComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  title: 'Hey there',
  subtitle: 'Nice to see you here.',
};
