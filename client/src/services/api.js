
//const apiUrl = process.env.API_URL || 'https://rickandmortyapi.com/api'; // /character
//const apiUrl = process.env.API_URL || 'https://pokeapi.co/api/v2'; // /pokemon

export async function getAllPokemons() {
    try {
        const apiUrl = process.env.REACT_APP_POKEMON_API_URL || 'https://pokeapi.co/api/v2';
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

export async function getAllRicks() {
    
    try {
        const apiUrl = process.env.REACT_APP_RICK_API_URL || 'https://rickandmortyapi.com/api';
        const response = await fetch(`${apiUrl}/character`);
        const data = await response.json();
        const results = data.results;

        return results.map(result => {
            return {
                name: result.name,
                image: result.image
            }
        });

    } catch (error) {
        console.log(error);
        return [];
    }

}


export async function getAllAvatars() {

    const apiConnection = (process.env.REACT_APP_API_CONNECTION || 'pokemon');
    if (apiConnection === 'pokemon')
        return await getAllPokemons();
    else
        return await getAllRicks();
}