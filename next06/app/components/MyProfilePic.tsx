import Image from 'next/image'

export default function MyProfilePic() {
  return (
  
    <section className='w-full mx-auto '>
        <Image className='border-4 border-black dark:border-slate-500 drop-shadow-md shadow-black rounded-full mx-auto mt-8' src='/images/woman-9009013_1280.png' width={200} height={200} alt='Img' priority={true}/>
    </section>
  )
}
