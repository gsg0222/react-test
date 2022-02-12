import HeaderRow from 'components/atoms/HeaderRow';
import Row from 'components/atoms/Row';
import { User } from 'containers/templates/UserTable';
import { VFC } from 'react';

type Prop = {
  users: User[];
};
const UserTable: VFC<Prop> = ({ users }) => (
  <>
    <h1>ユーザー一覧</h1>
    <table style={{ border: '2px #808080 solid' }}>
      <HeaderRow />
      {users.map((user) => (
        <Row user={user} />
      ))}
    </table>
  </>
);

export default UserTable;
