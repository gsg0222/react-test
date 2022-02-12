// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Row from './Row';

export default {
  title: 'table/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = ({ user }) => <Row user={user} />;

export const user1 = Template.bind({});
user1.args = { user: { id: 'test', home: 'https://www.example.com' } };
