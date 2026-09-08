
import { use } from 'react';
import type { Iplayer } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';

interface playersProps{
    playersPromise: Promise<Iplayer[]>
}

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    return (
        <>
        
        <div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
        </>
    );
};

export default Players;