import React, { useState } from 'react';
import Papa from 'papaparse';

// Code that I based in https://www.geeksforgeeks.org/how-to-read-csv-files-in-react-js/

// File extensions accepted
const allowedExtensions = ['csv'];

const CsvBtn = () => {

    // Data parsed
    const [data, setData] = useState([]);
    // Store the errors
    const [error, setError] = useState("");
    // Store the file
    const [file, setFile] = useState("");

    const handleFileChange = (e) => {
        setError("");

        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }

            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {

        // If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");

        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            console.log(parsedData);
            await fetch('http://localhost:3000/api/deck/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parsedData)
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        };
    };


    return (
        <>
            <div>
                <label htmlFor="csvInput" style={{ display: "block" }}>
                    Enter CSV File
                </label>
                <input
                    onChange={handleFileChange}
                    id="csvInput"
                    name="file"
                    type="File"
                />
                <div>
                    <button className='p-6 text-lg font-bold text-black rounded-md bg-fuchsia-350 hover:bg-fuchsia-300' onClick={handleParse}>Parse</button>
                </div>
            </div>
        </>
    )
}

export default CsvBtn;