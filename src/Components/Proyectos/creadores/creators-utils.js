
export const getVisibleInfluencers = (influencers, currentIndex, displayCount = 4) => {
    const totalInfluencers = influencers.length;
    let start = currentIndex;
    let carouselGroup = [];

    for (let i = 0; i < displayCount; i++) {
        carouselGroup.push(influencers[(start + i) % totalInfluencers]);
    }

    return carouselGroup;
};

export const getResponsiveDisplayCount = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1280) return 4;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    return 4;
};
