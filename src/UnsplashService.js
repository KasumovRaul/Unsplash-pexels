export const fetchImages = async (searchTerm = '', page = 1) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm || 'nature'}&page=${page}&per_page=30&client_id=qHQ_ppDsb6GiqOMrPudSp63ghS6Yr4kUXAL12Q6DQp4`
  );

  const data = await response.json();
  return data.results;

};
