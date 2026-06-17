import './Hero.css';
import { DevIcon } from './DevIcon';

export const Hero = () => {
    return (
        <section className="profile-header">
            <div className="profile-top">
                <img
                    src="/foto-cv.png"
                    alt="Agustin Gutierrez"
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <h1 className="profile-name">Agustin Gutierrez</h1>
                    <p className="profile-role">Fullstack Developer Web</p>
                    <p className="profile-location">
                        <span className="location-icon">📍</span>
                        Córdoba, Argentina
                    </p>
                </div>
                <DevIcon />
            </div>
        </section>
    );
};