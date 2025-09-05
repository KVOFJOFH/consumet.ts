// testAnimeKai.js
import AnimeKai from './dist/providers/anime/animekai.js'; // path to your updated file

(async () => {
  const animeClient = new AnimeKai();

  try {
    const animeId = 'dan-da-dan-season-2-8lk0'; // replace with any valid anime ID
    const info = await animeClient.fetchAnimeInfo(animeId);

    console.log('✅ Anime Info Fetched:');
    console.log(JSON.stringify(info, null, 2));
  } catch (err) {
    console.error('❌ Error fetching anime info:', err.message);
  }
})();
