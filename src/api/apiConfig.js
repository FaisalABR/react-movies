const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "38db8622afec62d924162e2232305530",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
