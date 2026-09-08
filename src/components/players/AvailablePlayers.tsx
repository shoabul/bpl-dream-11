import type { Iplayer } from "../../types/playerType";

const AvailablePlayers = ({ players }) => {
    console.log(players, "Players from available players");
    return (
        <div className="p-4 container mx-auto mt-15">
            {/* Header with Title and Toggle Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Available Players</h2>
                <div className="join border border-gray-200 rounded-xl overflow-hidden bg-white p-1">
                    <button className="btn btn-sm join-item bg-lime-400 border-none text-black font-semibold hover:bg-lime-500 rounded-lg">
                        Available
                    </button>
                    <button className="btn btn-sm join-item bg-transparent border-none text-gray-500 hover:bg-gray-100 rounded-lg">
                        Selected (0)
                    </button>
                </div>
            </div>

            {/* Players Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player: Iplayer) => {
                    return (
                        <div 
                            key={player.playerName} 
                            className="card bg-base-100 border border-gray-200 shadow-sm p-4 rounded-2xl"
                        >
                            {/* Player Image */}
                            <figure className="w-full h-48 rounded-xl overflow-hidden mb-4">
                                <img 
                                    src={player.playerImg} 
                                    alt={player.playerName} 
                                    className="w-full h-full object-cover" 
                                />
                            </figure>

                            {/* Player Details */}
                            <div className="card-body p-0 space-y-3">
                                {/* Name & Icon */}
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <h2 className="card-title text-lg font-bold text-gray-800">{player.playerName}</h2>
                                </div>

                                {/* Country & Role */}
                                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span>🚩</span>
                                        <span>{player.playerOrigin}</span>
                                    </div>
                                    <span className="badge badge-ghost text-xs font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                                        {player.playerType}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
                                    <span>Rating</span>
                                    <span className="text-gray-500">5★</span>
                                </div>

                                {/* Batting & Bowling Style */}
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span className="font-semibold text-gray-800">{player.battingStyle}</span>
                                    <span className="text-gray-400">{player.bowlingStyle}</span>
                                </div>

                                {/* Price & Choose Button */}
                                <div className="card-actions items-center justify-between pt-2">
                                    <span className="text-sm font-bold text-gray-900">
                                        Price: ${player.price}
                                    </span>
                                    <button className="btn btn-outline border-gray-300 hover:bg-yellow-400 hover:border-yellow-400 btn-xs sm:btn-sm font-semibold text-gray-700 capitalize rounded-lg">
                                        Choose Player
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AvailablePlayers;