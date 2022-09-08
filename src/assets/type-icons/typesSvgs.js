import Normal from './Normal.svg';
import Fighting from './Fighting.svg';
import Flying from './Flying.svg';
import Poison from './Poison.svg';
import Ground from './Ground.svg';
import Rock from './Rock.svg';
import Bug from './Bug.svg';
import Ghost from './Ghost.svg';
import Steel from './Steel.svg';
import Fire from './Fire.svg';
import Water from './Water.svg';
import Grass from './Grass.svg';
import Electric from './Electric.svg';
import Psychic from './Psychic.svg';
import Ice from './Ice.svg';
import Dragon from './Dragon.svg';
import Dark from './Dark.svg';
import Fairy from './Fairy.svg';

export default typesSvgs = (id, style, width=15, height=15) => {
  switch (id) {
    case 1:
      return <Normal width={width} height={height} style={style}/>;
    case 2:
      return <Fighting width={width} height={height} style={style}/>
    case 3:
      return <Flying width={width} height={height} style={style}/>
    case 4:
      return <Poison width={width} height={height} style={style}/>
    case 5:
      return <Ground width={width} height={height} style={style}/>
    case 6:
      return <Rock width={width} height={height} style={style}/>
    case 7:
      return <Bug width={width} height={height} style={style}/>
    case 8:
      return <Ghost width={width} height={height} style={style}/>
    case 9:
      return <Steel width={width} height={height} style={style}/>
    case 10:
      return <Fire width={width} height={height} style={style}/>
    case 11:
      return <Water width={width} height={height} style={style}/>
    case 12:
      return <Grass width={width} height={height} style={style}/>
    case 13:
      return <Electric width={width} height={height} style={style}/>
    case 14:
      return <Psychic width={width} height={height} style={style}/>
    case 15:
      return <Ice width={width} height={height} style={style}/>
    case 16:
      return <Dragon width={width} height={height} style={style}/>
    case 17:
      return <Dark width={width} height={height} style={style}/>
    case 18:
      return <Fairy width={width} height={height} style={style}/>
    default:
      return <Normal width={width} height={height} style={style}/>
  }
};