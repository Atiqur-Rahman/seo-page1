import { useEffect, useState } from 'react';
import './App.css';
import Completed from './components/Completed';
import Doing from './components/Doing';
import Incomplete from './components/Incomplete';
import Overdoing from './components/Overdoing';
import ToDo from './components/ToDo';
import UnderReview from './components/UnderReview';
import axios from 'axios';

function App() {
    const [len, setLen] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/upload').then((res) => setLen(res.data.length));
    }, [len]);

    return (
        <div>
            <div className="bg-slate-400 px-5 pt-10 pb-40">
                <div className="bg-white overflow-x-scroll rounded p-5 flex gap-6">
                    <Incomplete len={len}></Incomplete>
                    <ToDo len={len}></ToDo>
                    <Doing len={len}></Doing>
                    <UnderReview len={len}></UnderReview>
                    <Completed len={len}></Completed>
                    <Overdoing len={len}></Overdoing>
                </div>
            </div>
        </div>
    );
}

export default App;
