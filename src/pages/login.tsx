import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../queries/userQueries';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ variables: { username, password } });
            localStorage.setItem('authToken', data.login.authToken);
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Giriş Yap</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kullanıcı Adı</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Şifre</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading}>Giriş Yap</button>
            </form>
            {error && <p>Hata: {error.message}</p>}
        </div>
    );
}
