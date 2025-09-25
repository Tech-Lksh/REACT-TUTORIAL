import React from 'react'

const About = () => {
  return (
    <div className='flex gap-10 m-5 justify-between'>
        <div className='bg-red-600'>
            <h1 className='font-bold ml-16 mb-10 text-white text-3xl'>Hi, I am <span className='flex flex-wrap mt-5'>Lokesh Pardhi</span></h1>
            <p className=''>Hey! I am a Passionate Software developer with expertise in React.Js, Tailwind CSS, JavaScript, C++. We are committed to crafting responsive and dynamic web applications, creating intuitive user interfaces while maintaining clean and efficient code.</p>
            
        </div>
        <div className='bg-green-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum distinctio assumenda alias tenetur inventore?</p>
            <img src="../assets/profile.jpg" alt="" />
        </div>
    </div>
  )
}

export default About