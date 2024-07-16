const getGACHA = (imageName) => {
    return new URL(`../assets/gacha!/${imageName}`, import.meta.url).href;
};

export default getGACHA;