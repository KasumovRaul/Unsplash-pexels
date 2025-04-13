export const fetchVideos = async (searchTerm = "", page = 1) => {
    const endpoint = searchTerm.trim()
      ? `https://api.pexels.com/videos/search?query=${searchTerm}&per_page=30&page=${page}`
      : `https://api.pexels.com/videos/popular?per_page=15&page=${page}`;
  
    const response = await fetch(endpoint, {
      headers: {
        Authorization: "t8XHDLEirXhklpLXOBMcd9pnkZ8Wph3AWtYFTvC7WmnXBKcSKwcuZMX6"
      },
    });
  
    const data = await response.json();
    return data.videos || data.results || [];
  };
  