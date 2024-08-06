export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <ul>
                        <li><a href="/about">Hakkımızda</a></li>
                        <li><a href="/contact">İletişim</a></li>
                        <li><a href="/privacy">Gizlilik Politikası</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com"><img src="/icons/facebook.svg" alt="Facebook" /></a>
                    <a href="https://instagram.com"><img src="/icons/instagram.svg" alt="Instagram" /></a>
                    <a href="https://twitter.com"><img src="/icons/twitter.svg" alt="Twitter" /></a>
                </div>
                <p>&copy; 2024 Marka Adı. Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}
