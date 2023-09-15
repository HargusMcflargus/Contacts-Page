import React from 'react'
import userIcon from '../assets/user.png'
import callIcon from '../assets/phone-call.png'
import chatIcon from '../assets/chat.png'

export default function ContactCard(props) {
    return (
        <div className='py-4 px-4 flex justify-between flex-row group hover:cursor-pointer hover:bg-slate-800 hover:shadow-2xl hover:px-6 hover:py-6 text-typography transition-all duration-150 ' onClick={(event) => { props.setModalStatus(true); props.setActiveContact(props.value) }}>
            <div className='flex flex-row'>
                <p className='self-center absolute text-slate-400'> {props.index + 1} </p>
                <img src={userIcon} alt='User Icon' className='w-16 h-auto ms-8 p-1 self-center drop-shadow-xl'></img>
                <div className='flex flex-col ms-4 leading-snug self-center'>
                    <h4>
                        {props.value.name}
                    </h4>
                    <h6 className='text-slate-400'> {props.value.phone} </h6>
                </div>
            </div>
            <div className='self-center me-4 flex flex-row gap-6 opacity-0 group-hover:opacity-100 transition-all duration-150' >
                <img alt='Chat Icon' className='h-12 drop-shadow-2xl w-auto p-0 transition-all duration-300 hover:p-1.5 ' src={chatIcon} ></img>
                <img alt='Call Icon' className='h-12 drop-shadow-2xl w-auto p-0 transition-all duration-300 hover:p-1.5 ' src={callIcon} ></img>
            </div>
        </div>
    )
}
