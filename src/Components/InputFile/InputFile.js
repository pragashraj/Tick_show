import React, {useState, useRef} from 'react'

import './InputFile.css'

const InputFile = ({fileImage, handleFileOnChange, fileRemoveOnClick}) => {
    const inputFile = useRef(null)
    const [fileName, setFileName] = useState(null)

    const removeFile = () => {
        setFileName(null)
        fileRemoveOnClick()
    }

    const fileOnChange = (e) => {
        const { files } = e.target

        setFileName(files[0].name)

        if (files && files.length) {
            handleFileOnChange(files[0])
        } 
    }

    const onFilecOnClick = () => inputFile.current.click()

    return (
        <div className = "input_file-root">
            <input type = 'file' id = 'file' ref = {inputFile} style = {{display: 'none'}} onChange = {fileOnChange}/>
            <div className = "input_file-coverImg-con" onClick = {onFilecOnClick}>
                <img alt = "Select file" src = {fileImage}/>
            </div>
            <div className = "input_file_text-con">
                <h6>Select or Drop files</h6>
                <span>selected file -: {fileName ? fileName : "none"}</span>
                { fileName && <button onClick = {removeFile}>Remove</button> }
            </div>
        </div>
    )
}

export default InputFile