


export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=4&api_key=FB4vQAnljYQKXFTPFMAcfwa4htemG6B2`
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    } )

    return gifs;
}