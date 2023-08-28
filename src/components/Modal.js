import axios from 'axios';
import React, { useState } from 'react';

const Modal = ({ setModal }) => {
    const [files, setFiles] = useState([]);
    // const [uploaded, setUploaded] = useState('');

    const handleSubmit = async (event) => {
        // event.preventDefault();
        console.log(files);

        const formData = new FormData();

        for (let i = 0; i <= files.length; i++) {
            formData.append(`file`, files[i]);
        }

        await axios.post('http://localhost:5000/upload', formData).then((res) => {
            console.log(res);
            // setUploaded(res.data);
        });

        setModal(false);
    };

    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-white">
                <div className="modal-box">
                    <label htmlFor="booking_modal" onClick={() => setFiles([])} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="font-bold text-lg">Upload Files</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4 justify-items-center mt-8">
                        <input type="file" name="file" multiple onChange={(e) => setFiles(e.target.files)} />
                        {[...files].length > 1 && [...files].map((file, i) => <p key={i}>{file.name}</p>)}
                        <input type="submit" disabled={files.length === 0} value="Submit" className="btn bg-blue-500 text-white" />
                    </form>
                </div>
                <label htmlFor="booking_modal" className="modal-backdrop" onClick={() => setFiles([])}>
                    close
                </label>
            </div>
        </div>
    );
};

export default Modal;
