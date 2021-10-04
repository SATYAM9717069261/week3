import Profile from './profile';
import Customstyle from '../styles/Home.module.scss'
import { useRef } from 'react'
export default function Profileconatiner({ term,searchkeyword } ) {
    const search = useRef("")
    const getsearchTerm = () => {
       searchkeyword(search.current.value)
    }
    return (
        <div>
            <div className={Customstyle.header}>
                <div className={Customstyle.search}>
                    <input type="text" ref={search} className={Customstyle.search__input} placeholder="Search" val={term} onChange={getsearchTerm} />
                    <span className={Customstyle.search__icon} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>

                    </span>
                </div>
            </div>
            <div className="container">
                {console.log("Data Found in container=> ", term.data)}
                {
                    term.map((data) => {
                        return <Profile key={data.id} data={data} />
                    })
                }
            </div>
        </div>
    )
}