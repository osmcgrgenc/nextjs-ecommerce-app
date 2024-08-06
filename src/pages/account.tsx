// pages/account.tsx
import { useQuery, gql } from '@apollo/client';

const GET_USER_DETAILS = gql`
  query GetUserDetails {
    viewer {
      id
      username
      email
    }
  }
`;

export default function Account() {
    const { loading, error, data } = useQuery(GET_USER_DETAILS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const user = data.viewer;

    return (
        <div>
            <h1>Hesabım</h1>
            <p>Kullanıcı Adı: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}
