import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
        <p className='text-gra mt-3 '>
        Love fashion? So do we! Subscribe for fresh styles, hot deals, and a sweet 20% off!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
<input className='w-full sm-flex-1 outline-none' type="email" placeholder='Enter ur email' required />
<button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox