import React from 'react'

const Prompt = () => {
    return (
        <form class="flex items-center  justify-center">
        <div>
            <div>
                <input type="text" placeholder="Idea" />
            </div>
            <div class="flex items-center">
                <div>
                    <label>Genre:
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
                    </label>
                </div>
                <div>
                    <label>Type:
                    <select name="Type" id="type">
                        <option value="casual">Casual</option>
                        <option value="professional">Professional</option>
                        <option value="funny">Funny</option>
                        <option value="informative">Informative</option>
                        <option value="creative">Creative</option>
                    </select>
                    </label>
                </div>
            </div>
            <div>
                <label>Audience:
                <select name="Audience" id="audience">
                    <option value="child">Children</option>
                    <option value="public">General public</option>
                </select>
                </label>
            </div>
        </div>
    </form>
    )
}

export default Prompt