import { User } from 'containers/templates/UserTable';
import { VFC } from 'react';

type Prop = {
  user: User;
};
const Row: VFC<Prop> = ({ user }) => (
  <tr>
    <td style={{ border: '2px #808080 solid' }}>{user.id}</td>
    <td style={{ border: '2px #808080 solid' }}>
      <a href={user.home}>{user.home}</a>
    </td>
  </tr>
);

export default Row;
