import Image from 'next/image'
import Customstyle from '../styles/profile.module.scss'
import Profileimage from '../public/image1.bmp'
import Link from 'next/link'
//import Redirect from './commonRoute'
import { useRouter } from 'next/router'
export default function Profile({ data }) {
    const router =useRouter();
    // console.log("Source Image Path => ", process?.images)
    return (
        <div className={Customstyle.wrapper} onClick={()=>router.push(`/mainpage/${data.id}`)}>
            <div className={Customstyle.profile}>
                <div className={Customstyle.thumbnail}>
                    {/* <Image src={Profileimage} width="124px" height="124px" /> */}
                     <Image src={data.avatar} width="124px" height="124px" />
                </div>
                <h3 className={Customstyle.name}>{data.first_name + data.last_name}</h3>
                <p className={Customstyle.title}>{data.email}</p>
                <Link href={`/mainpage/${data.id}`}><a>
                    <button className={Customstyle.btn}>READ MORE..</button>
                </a></Link>
            </div>
        </div>
    )
}// Use Router 



// <Redirect to="xyz"> 




