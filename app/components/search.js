"use client"
import md5 from 'crypto-js/md5';
import { useEffect, useState } from 'react';
import Characters from './characters';
import Comics from './comics';



export default function Search(){

    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetchCharacterData(characterName);
    }

    async function fetchCharacterData(characterName) {
        setCharacterData(null);
        setComicData(null);
        setLoading(true);

        const ts = new Date().getTime();
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
        const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
        const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
        const url = `${BASE_URL}/characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}&nameStartsWith=${characterName}`;
        //console.log(PUBLIC_KEY);
        console.log("start fetching character data")

        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            //console.log(data);
            //setCharacterData(data.data.results);
            setCharacterData(data.data);
          } catch (error) {
            console.error('Failed to fetch:', error);
            //return [];
          } finally {
            setLoading(false);
        }
    }

    async function fetchComicData(characterId) {
        window.scrollTo({top:0, left:0})
        setComicData(null);
        setLoading(true);

        const ts = new Date().getTime();
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
        const BASE_URL = 'https://gateway.marvel.com:443/v1/public';
        const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
        const url = `${BASE_URL}/characters/${characterId}/comics?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`;
        //console.log(PUBLIC_KEY);
        console.log("start fetching comic data")

        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            //console.log(data);
            setComicData(data.data);
          } catch (error) {
            console.error('Failed to fetch:', error);
            //return [];
          } finally {
            setLoading(false);
        }
    }

    useEffect( ()=> {
        fetchCharacterData(characterName) ;
    }, [characterName])


    const handleChange = (event) => {
        setCharacterName(event.target.value);
    }

return (
    <main>
        <form onSubmit={handleSubmit} className="text-center">
            <input
            className="p-2 w-1/3 rounded"
            placeholder='enter character name'
            type='text'
            onChange={handleChange}
            />
            <button 
            className="ml-2 p-2 w-28 bg-blue-500 text-white rounded hover:bg-blue-700" 
            type='submit'
            disabled={characterName.trim() === ""}>
                Search
            </button>
        </form>

        {loading && <div className="text-center mt-20">Loading...</div>}

        {!loading && !comicData && characterData && characterData.results.length > 0 && (
            <>
                <h2 className="text-center mt-5 text-2xl font-bold text-blue-500">Characters</h2>
                <Characters data={characterData.results} onClick={fetchComicData} />
            </>
        )}

        {!loading && characterData && characterData.results.length === 0 && (
            <div className="text-center mt-20 text-red-500">
                No characters found.
            </div>
        )}

        {!loading && comicData && comicData.results.length > 0 && (
            <>
                <h2 className="text-center mt-5 text-2xl font-bold text-blue-500">Comics</h2>
                <Comics data={comicData.results} />
            </>
        )}

        {!loading && comicData && comicData.results.length === 0 && (
            <div className="text-center mt-20 text-red-500">
                No comics found for this character.
            </div>
        )}
    </main>
);
}