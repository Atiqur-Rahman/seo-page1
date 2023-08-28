import React, { useEffect, useState } from 'react';
import boy from '../images/boy.png';
import stack from '../images/stack-svgrepo-com.svg';
import note from '../images/notes-note-svgrepo-com.svg';
import people1 from '../images/people1.png';
import people2 from '../images/people2.png';
import people3 from '../images/people3.png';
import chat from '../images/chat-bubble-svgrepo-com.svg';
import attachment from '../images/attachment-svgrepo-com.svg';
import calender from '../images/calendar-big-svgrepo-com.svg';
import Modal from './Modal';

const Card = ({ len }) => {
    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className="rounded w-[350px] h-32 bg-white text-primary-content">
                <div className="p-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-7 bg-yellow-400 rounded-full">
                                    <img src={boy} alt="boy" />
                                </div>
                            </div>
                            <h4 className="text-black text-sm pl-2 font-bold">Client Name</h4>
                        </div>
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-7 rounded-full">
                                    <img src={people1} alt="boy" />
                                </div>
                            </div>
                            <h4 className="text-black text-sm pl-2 font-bold">Sadik Istiak</h4>
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <div className="flex items-center">
                            <img src={stack} alt="" className="w-4" />
                            <p className="text-black text-sm w-52 text-ellipsis whitespace-nowrap overflow-hidden pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptatibus!</p>
                        </div>
                        <div className="flex items-center bg-slate-200 px-1 py-1 rounded">
                            <img src={note} alt="" className="w-4" />
                            <p className="text-black text-sm pl-2">1/2</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-7 rounded-full">
                                <img src={people2} alt="people2" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-7 rounded-full">
                                <img src={people3} alt="people3" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-200">
                            <div className="text-black text-sm">12+</div>
                        </div>
                        <div className="flex items-center">
                            <img src={chat} alt="" className="w-4" />
                            <p className="text-sm text-black pl-2">15</p>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="booking_modal" onClick={() => setModal(true)} className="btn bg-white border-none px-0 min-h-0 h-0 hover:bg-white flex-nowrap">
                                <img src={attachment} alt="" className="w-4" />
                            </label>
                            <p className="text-black text-sm pl-2">{len}</p>
                        </div>
                        <div className="flex items-center">
                            <img src={calender} alt="" className="w-4" />
                            <p className="text-black text-sm pl-2">25-12-2022</p>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <Modal setModal={setModal}></Modal>}
        </div>
    );
};

export default Card;
