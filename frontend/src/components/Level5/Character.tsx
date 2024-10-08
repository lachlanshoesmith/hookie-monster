import { useContext } from 'react';
import { ModeContext } from './ModeContext';

export default function Character() {
  const mode = useContext(ModeContext);
  return <div className={'cookie-monster level4 ' + mode}></div>;
}
