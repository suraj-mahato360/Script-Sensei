import React from 'react'

const Prompt = () => {
    return (
        <form class="flex items-center  justify-center">
        <div>
            <div>
            <div class="py-6">
            <input className='w-full p-[14px] bg-slate-800 outline-0 border-[none] text-[15px] rounded-[8px] mb-[10px]' type="text" placeholder="Idea" />
            </div>
            <div>
                <button>
                <i class="ri-arrow-right-double-line"></i>
                </button>
            </div>
            </div>
            <div className="flex text-white py-2 gap-8 ">
                <div>
                    <label>Genre:
                    <select className=" w-full p-[14px] bg-slate-800 outline-0 border-[none] text-[15px] rounded-[8px] mb-[10px]" name="genre" id="genre">
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
                <div className='text-white'>
                    <label>Type:
                    <select className=" w-full p-[14px] bg-slate-800 outline-0 border-[none] text-[15px] rounded-[8px] mb-[10px]" name="genre" id="genre" name="Type" id="type">
                        <option value="ads">Advertisment</option>
                        <option value="contentcreation">Content Creation</option>
                    </select>
                    </label>
                </div>
            </div>
            <div class="py-2  text-white">
                <label >Audience:
                <select className=" w-full p-[14px] bg-slate-800 outline-0 border-[none] text-[15px] rounded-[8px] mb-[10px]" name="genre" id="genre"  name="Audience" id="audience">
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