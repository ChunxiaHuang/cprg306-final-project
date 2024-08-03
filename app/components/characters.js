

import React from 'react';

export default function Characters({ data, onClick }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 my-10 mx-5">
            {data.map((character) => (
                <div
                    key={character.id}
                    className="block w-48 h-72 bg-cover bg-center text-white rounded-lg overflow-hidden relative cursor-pointer"
                    style={{
                        backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                    }}
                    onClick={() => onClick(character.id)}
                >
                    <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span className="font-bold text-lg text-center">{character.name}</span>
                </div>
            ))}
        </div>
    );
}