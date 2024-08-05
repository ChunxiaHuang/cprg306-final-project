

import React from 'react';

export default function Characters({ data, onClick }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 m-5">
            {data.map((character) => (
                <div
                    key={character.id}
                    className="block w-48 h-72 bg-cover bg-center text-white rounded-lg overflow-hidden relative border-2 border-gray"
                    style={{
                        backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                    }}
                    onClick={() => onClick(character.id)}
                >
                    {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="font-bold text-lg text-center">{character.name}</span>
                        <span className="font-bold text-lg text-center mt-2">View Comic</span>
                    </div> */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center">
                        <div className="bg-black bg-opacity-50 w-full text-center py-2">
                            <span className="font-bold text-lg">{character.name}</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="font-bold text-lg text-center mt-2">View Comic</span>
                    </div>
                </div>
            ))}
        </div>
    );
}