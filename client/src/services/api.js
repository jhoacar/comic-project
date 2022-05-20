
//const apiUrl = process.env.API_URL || 'https://rickandmortyapi.com/api'; // /character
const apiUrl = process.env.API_URL || 'https://pokeapi.co/api/v2'; // /pokemon

export async function getAllAvatars() {
    try {
        const response = await fetch(`${apiUrl}/pokemon`);
        const data = await response.json();
        const result = [];

        for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index];
            const responseImage = await fetch(element.url);
            const dataImage = await responseImage.json();
            const name = element.name;
            const image = dataImage.sprites.front_default;
            result.push({
                name,
                image
            })
        }

        return result;

    } catch (error) {
        console.log(error);
        return [];
    }

}