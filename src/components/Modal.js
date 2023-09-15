import React from 'react'
import closeIcon from '../assets/close.png'
import userIcon from '../assets/user.png'

export default function Modal(props) {
    return ( 
        <div className={ 'w-screen lg:w-1/3 fixed right-0 transition-all duration-500 h-full overflow-y-scroll ' + (props.status ? "top-0" : "top-full ")} >
            <div className={'flex flex-col bg-primary px-8 pt-8 h-1/3'} >
                <div className='self-end'>
                    <img src={ closeIcon } alt='Close Icon' className='h-8 w-auto hover:cursor-pointer' onClick={ event => props.setModalStatus(false) }/>
                </div>
                <div className='flex justify-center'>
                    <img src={ userIcon } alt='User Container' className='w-1/3 lg:w-1/2 h-auto translate-y-12/3 bg-primary p-4 rounded-full' />
                </div>
            </div>
            <div className='flex flex-col bg-secondary border-primary border-[1em] rounded-2xl lg:rounded-s-none shadow-lg px-12 sm:pt-14 md:pt-36 lg:pt-6 p-4 pb-28 leading-loose text-white'>
                <h5 className='text-2xl text-center'> 
                    { props.details?.name } 
                </h5>
                <span className='text-slate-200 text-center leading-tight'> 
                    ( { props.details?.username } ) 
                </span> 
                <p className='text-center text-slate-300'> { props.details?.phone } </p>
                <div className='w-full grid sm:grid-cols-2 lg:grid-cols-1 lg:gap-6 pt-4 sm:gap-16 gap-6 grid-cols-1 '>
                    <label className='col-span-1'>
                        <p className='text-center text-slate-200'>Email</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.email } />
                    </label>
                    <label className='col-span-1'>
                        <p className='text-center'>Website</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.website } />
                    </label>
                    <label className='w-full col-span-1'>
                        <p className='text-center'>Address</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.address?.city + " " + props.details?.address?.street + " " + props.details?.address?.suite } />
                    </label>
                    <label className='w-full col-span-1'>
                        <p className='text-center'>Website</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.website } />
                    </label>
                </div>
                <h1 className='text-center text-white pt-6 font-extrabold text-2xl'>Employement</h1>
                <div className='w-full grid sm:grid-cols-2 lg:grid-cols-1 lg:gap-6 pt-4 sm:gap-16 gap-6 grid-cols-1 '>
                    <label className='col-span-1'>
                        <p className='text-center text-slate-200'>Company</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.company?.name } />
                    </label>
                    <label className='col-span-1'>
                        <p className='text-center'>Catch Phrase</p>
                        <input readOnly className='outline-none rounded-lg bg-slate-800 w-full px-8 py-2 text-slate-400 text-center' value={ props.details?.company?.catchPhrase } />
                    </label>
                </div>
            </div>
        </div>
    )
}
