export default getTypeIcon = (id) => {
  switch (id) {
    case 1:
      return require('./Normal.png');
    case 2:
      return require('./Fighting.png');
    case 3:
      return require('./Flying.png');
    case 4:
      return require('./Poison.png');
    case 5:
      return require('./Ground.png');
    case 6:
      return require('./Rock.png');
    case 7:
      return require('./Bug.png');
    case 8:
      return require('./Ghost.png');
    case 9:
      return require('./Steel.png');
    case 10:
      return require('./Fire.png');
    case 11:
      return require('./Water.png');
    case 12:
      return require('./Grass.png');
    case 13:
      return require('./Electric.png');
    case 14:
      return require('./Psychic.png');
    case 15:
      return require('./Ice.png');
    case 16:
      return require('./Dragon.png');
    case 17:
      return require('./Dark.png');
    case 18:
      return require('./Fairy.png');
    default:
      break;
  }
}