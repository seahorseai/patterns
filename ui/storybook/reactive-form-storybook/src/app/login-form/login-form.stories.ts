import { moduleMetadata } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';

export default {
  title: 'Components/Login Form',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginFormComponent], // Import the standalone component here
    }),
  ],
};

export const Default = () => ({
  component: LoginFormComponent,
});

export const Prefilled = () => ({
  component: LoginFormComponent,
  props: {
    // Provide props if necessary
  },
});
