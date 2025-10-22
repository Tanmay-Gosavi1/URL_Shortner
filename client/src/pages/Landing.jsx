import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CTA from '../components/CTA.jsx'
import {Copy} from 'lucide-react'
import {toast} from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useState} from 'react'

const Landing = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success('Copied to clipboard!')
            })
            .catch(() => {
                toast.error('Failed to copy!')
            })
    }
    const [sUrl , setSUrl] = useState('');

    const {register , handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axios.post(`${import.meta.env.VITE_API_URL}/shorten` , data)
        .then((response)=>{
            setSUrl(response.data.shortUrl)
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
    }
  return (
    <div className='min-h-screen w-full px-6 md:px-10 lg:px-12 xl:px-14 flex flex-col items-center dark:bg-[#030712] dark:text-[#f7f7f7]'>
        <Navbar />

        <div className='px-5 py-2 bg-[#d1fb9d] w-fit rounded-full mb-7 mt-[100px] md:mt-[130px] border border-[#53781b] hover:scale-105 transition-all duration-200'>
            <h1 className='w-full text-[#30460f] text-sm font-base'>For modern remote teams</h1>
        </div>

        {/* Header text */}
        <div className='w-full sm:w-[80%] md:w-[70%] mb-3'>
            <h1 className='text-center text-4xl sm:text-5xl lg:text-7xl font-medium'>
                Create links that perform with our powerful URL Shortener
            </h1>
        </div>

        <div className='mb-10'>
            <p className='text-center text-gray-600 dark:text-white/50 font-medium text-base'>Slack is free to try for as long as you like</p>
        </div>

        {/* Input for  longUrl */}

        <div className='flex md:flex-row space-y-3 md:gap-0 justify-center items-center border-none md:border rounded-xl mb-9'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                <input {...register("longUrl")} type="text" required autoComplete='off' autoCorrect='off' className="h-full w-full outline-none px-10 py-3 rounded-xl md:rounded-l-xl border-2 transition-transform duration-200 text-gray-500 dark:text-white/80" placeholder='Paste your long URL here...'/>
                <button className='h-full w-full px-4 py-[11px] bg-black dark:bg-[#f7f7f7] text-white dark:text-black rounded-xl md:rounded-r-xl cursor-pointer transition-colors duration-200 hover:bg-[#031f39] dark:hover:bg-white/70' type='submit'>Shorten URL</button>
            </form>
        </div>

        {sUrl && 
            <>
                <div onClick={()=>copyToClipboard(sUrl)} className='px-8 py-3 border border-dashed rounded-lg cursor-pointer flex justify-center items-center gap-2'>
                        <h1>{sUrl}</h1>
                        <Copy size={16} />
                    </div>
                    <p className='text-xs font-medium text-gray-500 dark:text-white opacity-50'>Click to copy</p>
            </>
        }
        
    </div>
  )
}

export default Landing