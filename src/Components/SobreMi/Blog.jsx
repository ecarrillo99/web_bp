import React, { useEffect } from 'react';
import Entradas from './Entradas';

const Blog = () => {
    // Intersection Observer for animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        const blogSection = document.getElementById('blog');
        if (blogSection) {
            observer.observe(blogSection);
        }

        return () => {
            if (blogSection) {
                observer.unobserve(blogSection);
            }
        };
    }, []);

    return (
        <section id='blog' className='opacity-0 transition-opacity duration-1000 py-16 bg-gradient-to-b from-white to-gray-50 -mt-16'>
            <div className='relative flex flex-col gap-8 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full'>
                <div className="absolute top-0 right-0 h-16 w-16 bg-teal-100 rounded-full opacity-30 -mt-8 -mr-8"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-teal-100 rounded-full opacity-30 -mb-12 -ml-12"></div>

                <div className='text-start mb-2'>
                    <h2 className='text-2xl font-semibold -mb-3 inline-block'>
                       Mi Blog
                        <div className="h-1 w-24 bg-[#96c121] mx-auto mt-2"></div>
                    </h2>
                    <p className="text-start text-gray-600 mt-4 max-w-2xl mx-auto">
                        Descubre las experiencias, historias y aventuras más fascinantes de nuestros viajes por Ecuador
                    </p>
                </div>

                <Entradas />
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                :global(.custom-dots) {
                    bottom: -35px;
                }
                :global(.custom-dots li button:before) {
                    color: #005F6B;
                    opacity: 0.25;
                    font-size: 12px;
                }
                :global(.custom-dots li.slick-active button:before) {
                    color: #005F6B;
                    opacity: 0.75;
                }
            `}</style>
        </section>
    );
};

export default Blog;
