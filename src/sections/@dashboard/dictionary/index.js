import { React, useState } from "react";
import Axios from "axios";
import Iconify from '../../../components/Iconify';

function DictionaryApp() {
    // Setting up the initial states using react hook 'useState'

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    // Function to fetch information on button
    // click, and set the data accordingly
    function getMeaning() {
        Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
        ).then((response) => {
            setData(response.data[0]);
        });
    }

    // Function to play and listen the
    // phonetics of the searched word
    function playAudio() {
        const audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <div className="App"  style={{height:"45em",textAlign:"center",backgroundImage:"url(../static/mock-images/covers/two-circles.png)", backgroundPosition:"center", backgroundRepeat:"repeat"}}>
            <h1>Dictionary</h1>
            <div className="searchBox">

		
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        getMeaning();
                    }} style={{borderRadius:"14px",backgroundColor:"orange",border:"none",color:"white",padding:"6px",marginLeft:"5px",fontSize:"1rem"}}
                >

<Iconify icon="bi:search" />
                    </button>
            </div>
            {data && (
                <div className="showResults">
                    <h2>
                        {data.word}{" "}
                        <button 
                            onClick={() => {
                                playAudio();
                            }}
                            style={{borderRadius:"14px",background:"none",border:"none",color:"#111",padding:"1px",fontSize:"1rem"}}
                        >
                       <Iconify icon="icon-park-twotone:voice-message" />
                       </button>
                    </h2>
                    <h4>Parts of speech:</h4>


                    <p>{data.meanings[0].partOfSpeech}</p>


                    <h4>Definition:</h4>


                    <p>{data.meanings[0].definitions[0].definition}</p>


                    <h4>Example:</h4>


                    <p>{data.meanings[0].definitions[0].example}</p>

                </div>
            )}
        </div>
    );
}

export default DictionaryApp;
