import React from 'react';
import Card from './Card';

const Overdoing = ({ len }) => {
    return (
        <div>
            <section className="bg-slate-100 rounded w-[375px] add-scroll">
                <div className="p-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-black text-md font-bold pl-2">Overdoing</h2>
                        <div className="flex justify-center items-center w-9 h-8 bg-slate-200 rounded">
                            <span className="text-black">0</span>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-scroll h-[700px]">
                    <div className="grid justify-items-center">
                        {Array(28)
                            .fill(1)
                            .map((e, i) => (
                                <div className=" my-3">
                                    <Card key={i} len={len}></Card>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overdoing;
