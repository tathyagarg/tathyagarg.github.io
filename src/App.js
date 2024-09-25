import './App.css';
import close from './assets/close.svg'
import minus from './assets/minus.svg'
import folder_red from './assets/folder-red.svg'
import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';

function App() {
    const [color, setColor] = useState(0);
    const colors = ["#ff0000", "#00ff00", "#0000ff"]

    useEffect(() => {
        let file_explorer = document.getElementById('file-explorer')
        file_explorer.classList.add('hidden')

        let windows = document.getElementsByClassName('window')
        for (let i = 0; i < windows.length; i++) {
            windows[i].addEventListener('animationend', (e) => {
                e.target.classList.add('hidden')
                e.target.classList.remove('minimize')
            })
        }
    })

    return (<div>
        <div className="sidebar">
            <div className="icon" style={{backgroundImage: `url(${folder_red})`, backgroundSize: 'contain', cursor: 'pointer'}} onClick={() => {
                document.getElementById('file-explorer').classList.remove('hidden')
            }}></div>
            {/* <div className="icon"></div> */}
        </div>
        <Draggable
            defaultPosition={{x: 100, y: 100}}
            handle='.handle'
        >
            <div className='window' id='file-explorer'>
                <div className='handle'>
                    <div className='title'>File Explorer</div>
                    <button className='handlebar-button minimize-button' onClick={() => {
                        let file_explorer = document.getElementById('file-explorer')
                        file_explorer.classList.add('minimize')
                    }}>
                        <img src={minus} height={'15px'} width={'15px'}></img>
                    </button>
                    <button className='handlebar-button close-button' onClick={() => {
                        let file_explorer = document.getElementById('file-explorer')
                        file_explorer.classList.add('minimize')
                        setTimeout(() => {file_explorer.style.transform = 'translate(100px, 100px)'}, 200)
                    }}>
                        <img src={close} height={'15px'} width={'15px'}></img>
                    </button>
                </div>
                <div className='window-content'>
                    Hi!
                </div>
            </div>
        </Draggable>
    </div>);
}

export default App;
