

// export default function Characters({data, onClick}){

//     return(
//         <div>
//             <h1 className="text-3xl font-bold my-4 ml-5">Characters</h1>
//             <div className="grid grid-cols-4 bg-gray-600 p-5">
//                 {data && data.map((character) => (
//                     <div key={character.id}
//                     className="max-w-30 m-3 bg-gray-300"
//                     onClick={ () => onClick(character.id)}>
//                         <img 
//                             src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
//                             alt={character.name} 
//                         />
//                         <p className="p-2">{character.name}</p>
//                         <p className="p-2">View Comics</p>
//                     </div>
//                     ))}
//             </div>
//         </div>
//     );
// }

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
                        <span className="font-bold text-lg text-center">{character.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}