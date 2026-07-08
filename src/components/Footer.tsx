import './Footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-year">{currentYear}</p>
                <p className="footer-name">Agustin Gutierrez</p>
            </div>
        </footer>
    );
};
