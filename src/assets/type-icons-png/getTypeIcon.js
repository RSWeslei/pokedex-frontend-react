
export default getTypeIcon = (id) => {
    const typesIds = {
        1: 'Normal.png',
        2: 'Fighting.png',
        3: 'Flying.png',
        4: 'Poison.png',
        5: 'Ground.png',
        6: 'Rock.png',
        7: 'Bug.png',
        8: 'Ghost.png',
        9: 'Steel.png',
        10: 'Fire.png',
        11: 'Water.png',
        12: 'Grass.png',
        13: 'Electric.png',
        14: 'Psychic.png',
        15: 'Ice.png',
        16: 'Dragon.png',
        17: 'Dark.png',
        18: 'Fairy.png'
    }
    console.log(typesIds[id]);
    return typesIds[id];
}