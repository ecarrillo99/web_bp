import React from 'react';

const FooterHome = () => {
    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/bernardopolopolito', icon: './images/facebook_icon.png' },
        { name: 'Instagram', url: 'https://www.instagram.com/bernardopolopolito', icon: './images/instagram_icon.png' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@bernardopolopolito', icon: './images/tiktok_icon.png' },
        { name: 'YouTube', url: 'https://youtube.com/@bernardopolopolito', icon: './images/youtube_icon.png' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bernardo-polo-polito-70560250', icon: './images/linkedin_icon.png' },
        { name: 'Twitter/X', url: 'https://x.com/bernardopolo10', icon: './images/x_icon.png' },
    ];

    return (
        <footer className="bg-[#92b509] w-full shadow-md">
            <div className="container mx-auto max-w-6xl px-1 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between items-center">
                    <div className="text-center md:text-left">
                        <p className="text-white text-lg mb-1">Sígueme en redes sociales como</p>
                        <h2 className="text-white text-2xl font-bold">@BernadoPoloPolito</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visita mi perfil de ${social.name}`}
                                className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                            >
                                <img
                                    src={social.icon}
                                    alt={social.name}
                                    className="w-10 h-10 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default FooterHome;
