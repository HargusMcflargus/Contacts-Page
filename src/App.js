import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';

function App() {

    const [ contacts, setContacts ] = useState([])
    const [ visibileContacts, setVisibleContacts ] = useState([])
    const [ isModalActive, setModalStatus ] = useState(false)
    const [ activeContact, setActiveContact ] = useState({})

    const filterNames = ( text ) => {
        setVisibleContacts(
            contacts.filter( ( value ) => {
                return value.name.toUpperCase().includes(text.toUpperCase())
            })

        )
    }

    

    useEffect( ( ) => {
        const fetchContacts = async ( ) => {
            await fetch("https://jsonplaceholder.typicode.com/users")
                .then( ( response ) => response.json() )
                .then( data => {
                    data.sort( ( a, b ) => {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                    })
                    setContacts(data)
                    setVisibleContacts(data)
                })
        }
        fetchContacts()
    }, [])

    return (
        <div className={'bg-primary flex flex-col px-8 relative pb-16 overflow-hidden'   + ( isModalActive ? 'overflow-hidden' : '' )}>
            <h1 className='my-4 text-3xl top-8 text-typography'>Contacts</h1>
            <label className='relative flex flex-row drop-shadow-2xl'>
                <span className='absolute ps-4 self-center'>
                    <FontAwesomeIcon className='text-slate-400' icon={ faMagnifyingGlass } ></FontAwesomeIcon>
                </span>
                <input onChange={ event => filterNames( event.currentTarget.value ) } id='searchField' type='text' className='w-full rounded-lg text-md py-2 px-6 ps-12 bg-secondary outline-none text-slate-400 focus:text-typography transition-all duration-150' />
            </label>
            <div className={'divide-y-solid border-secondary divide-typography divide-opacity-10 divide-y mt-4 bg-secondary rounded-xl drop-shadow-2xl transition-all duration-150 '}>
                {
                    visibileContacts.map( ( element, index ) => {
                        return <ContactCard value={ element } key={ index } index={ index } setModalStatus={ setModalStatus } setActiveContact={ setActiveContact } ></ContactCard>
                    })
                }
            </div>
            <Modal status={ isModalActive } setModalStatus={ setModalStatus } activeContact={ activeContact } details={ activeContact }></Modal>
            <div className='fixed bottom-0 w-screen left-0 h-[10%] bg-gradient-to-t from-primary to-transparent' ></div>
            <div className='fixed top-0 w-screen left-0 h-[5%] bg-gradient-to-t from-transparent to-primary' ></div>
        </div>
    );
}

export default App;
