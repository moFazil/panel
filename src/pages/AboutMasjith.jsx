import React from 'react'

const AboutMasjith = () => {
  return (
    <>
     <div className="p-4">
      <form className="">
        <label className="block text-lg font-medium" htmlFor="aboutMasjith">
          About Masjith
        </label>
        <textarea
        id="aboutMasjith"
        name="aboutMasjith"
        className=" mt-5 w-full lg:w-3xl outline-none  h-64 bg-white p-2 border border-gray-300 rounded-md resize"
        rows="4"
      />
      </form>
      <div className='flex'>
      <button type='submit' className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95">
          Submit
      </button>
      </div>
    </div>
    </>
  )
}

export default AboutMasjith