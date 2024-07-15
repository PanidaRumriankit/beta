const getImage = (imageName) => {
    return `${process.env.PUBLIC_URL}/assets/gacha!/${imageName}`;
};

export default getImage;