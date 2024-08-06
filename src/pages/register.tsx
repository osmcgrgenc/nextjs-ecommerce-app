import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../queries/userQueries';
import { useRouter } from 'next/router';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser({ variables: { username, email, password } });
            router.push('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Kayıt Ol</h1>
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
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit" disabled={loading}>Kayıt Ol</button>
            </form>
            {error && <p>Hata: {error.message}</p>}
        </div>
    );
}
