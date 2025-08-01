const IMGLIP_API_URL = 'https://api.imgflip.com/get_memes';
const TENOR_API_KEY = 'TU_CLAVE_TENOR'; // ¡Importante! Reemplaza con tu clave API
const TENOR_API_URL = `https://tenor.googleapis.com/v2/search?key=${TENOR_API_KEY}&q=`;

/**
 * Obtiene una lista de memes populares de Imgflip.
 * @returns {Promise<Array>} Un array de objetos meme.
 */
async function getImgflipMemes() {
    try {
        const response = await fetch(IMGLIP_API_URL);
        const data = await response.json();
        // Devuelve solo los memes si la llamada fue exitosa
        if (data.success) {
            return data.data.memes;
        }
        return [];
    } catch (error) {
        console.error('Error al obtener memes de Imgflip:', error);
        return [];
    }
}

/**
 * Busca GIFs o stickers en Tenor con un término de búsqueda.
 * @param {string} searchTerm El término a buscar.
 * @returns {Promise<Array>} Un array de objetos GIF/sticker.
 */
async function searchTenor(searchTerm) {
    try {
        const response = await fetch(`${TENOR_API_URL}${encodeURIComponent(searchTerm)}&limit=20`);
        const data = await response.json();
        // Devuelve los resultados de la búsqueda
        return data.results;
    } catch (error) {
        console.error('Error al buscar en Tenor:', error);
        return [];
    }
}