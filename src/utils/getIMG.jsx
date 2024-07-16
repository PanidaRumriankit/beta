const getImage = (imageName) => {
  try {
    return new URL(`../assets/cardIMG/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${imageName}:`, error);
  }
};

export default getImage;