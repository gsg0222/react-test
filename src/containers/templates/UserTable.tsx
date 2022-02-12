import { useEffect, useState, VFC } from 'react';
import PUserTable from 'components/templates/UserTable';
import ky from 'ky';

const client = ky.create({
  prefixUrl: 'https://api.github.com/',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
});

export type User = {
  id: string;
  home: string;
};
type Member = {
  login: string;
  html_url: string;
};
const isMembers = (arg: unknown): arg is Member[] => {
  const menbers = arg as Member[];
  const result = menbers.every(
    (m) => typeof m.login === 'string' && typeof m.html_url === 'string',
  );

  return result;
};

const UserTable: VFC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = async (uri: string): Promise<User[]> => {
    try {
      const response = await client.get(uri);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const json = await response.json();
      if (isMembers(json)) {
        const result: User[] = json.map(
          (user) => ({ id: user.login, home: user.html_url } as User),
        );

        return result;
      }

      return [];
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const userList: User[] = await getUsers('orgs/facebook/members?page=1');
      setUsers(userList);
      setIsLoading(false);
    };
    void load();
  }, []);

  if (isLoading) return <p>Loading</p>;

  return <PUserTable users={users} />;
};

export default UserTable;
