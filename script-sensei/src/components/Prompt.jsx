import React from 'react'

const Prompt = () => {
  return (
    <div>
        <div>
            <input className='' type="text" />
        </div>
        <div>
            <button></button>
        </div>
        <div>
            <div>
                <select name="genre" id="genre">
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="suspence">Suspense</option>
                    <option value="thriller">Thriller</option>
                    <option value="romance">Romance</option>
                    <option value="drama">Drama</option>
                    <option value="scifi">Science Fiction</option>
                    <option value="horror">Horror</option>
                    <option value="mystery">Mystery</option>
                    <option value="fantasy">Fantasy</option>
                </select>
                <input type="" />
            </div>
        </div>
    </div>
  )
}

export default Prompt