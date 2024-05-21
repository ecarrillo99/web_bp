import React from 'react';

const FooterHome = () => {
    return (
        <div className='bg-[#92b509] w-full fixed bottom-0'>
            <div className='flex flex-col md:flex-row mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full'>
                <div className='w-1/2 flex flex-col'>
                    <label className='text-xl'>Sigueme en redes sociales como</label>
                    <label className='text-xl font-semibold'>@BernadoPoloPolito</label>
                </div>
                <div className='flex gap-2 justify-center items-center w-1/2'>
                    <a href='https://www.facebook.com/bernardopolopolito' target='_blank'><img className='cursor-pointer' src='./images/facebook_icon.png'/></a>
                    <a href='https://www.instagram.com/bernardopolopolito' target='_blank'><img className='cursor-pointer' src='./images/instagram_icon.png'/></a>
                    <a href='https://www.tiktok.com/@bernardopolopolito' target='_blank'><img className='cursor-pointer' src='./images/tiktok_icon.png'/></a>
                    <a href='https://youtube.com/@bernardopolopolito' target='_blank'><img className='cursor-pointer' src='./images/youtube_icon.png'/></a>
                    <a href='https://www.linkedin.com/in/bernardo-polo-polito-70560250' target='_blank'><img className='cursor-pointer' src='./images/linkedin_icon.png'/></a>
                    <a href='https://x.com/bernardopolo10' target='_blank'><img className='cursor-pointer' src='./images/x_icon.png'/></a>
                </div>
            </div>
        </div>
    );
};

export default FooterHome;