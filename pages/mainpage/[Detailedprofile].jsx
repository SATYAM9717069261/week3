import Customstyle from '../../styles/Detailedprofile.module.scss'
import Profileimage from '../../public/image1.bmp'
import Image from 'next/image'
import {useRouter} from "next/router"

function Detailedprofile({post}) {
    const router =useRouter()
    if(router.isFallback){
        return <h1>Loading ...</h1>
    }
    return (
        <div className={Customstyle.frame}>
            <div className={Customstyle.center}>
                <div className={Customstyle.card}>
                    <div className={Customstyle.left}>
                        <div className={Customstyle.avatar}>
                            <Image src={Profileimage} />
                        </div>
                        <div className={Customstyle.info}>
                            <span className={Customstyle.big}>Name : </span><span className={Customstyle.small}>{post[0].name}</span>
                            <span className={Customstyle.big}>User Name : </span><span className={Customstyle.small}>{post[0].username}</span>
                            <span className={Customstyle.big}>Email : </span><span className={Customstyle.small}>{post[0].email}</span>
                            <span className={Customstyle.big}>Phone  : </span><span className={Customstyle.small}>{post[0].phone}</span>
                            <span className={Customstyle.big}>Website : </span><span className={Customstyle.small}>{post[0].website}</span>
                        </div>
                    </div>
                    <div className={Customstyle.right}>
                        <div className={Customstyle.stats}>
                            <small>Company Information</small>
                            <div>
                                <span>Company Name</span>
                                <span>{post[0].company.name}</span>
                            </div>
                            <div>
                                <span>Catch Phrase</span>
                                <span>{post[0].company.catchPhrase}</span>
                            </div>
                            <div>
                                <span>B.S</span>
                                <span>{post[0].company.bs}</span>
                            </div>
                        </div>
                        <div className={Customstyle.stats}>
                            <small>Address Information</small>
                            <div>
                                <span>Address: </span>
                                <span >{post[0].address.city+" "+post[0].address.street+" "+post[0].address.suite}</span>
                            </div>
                            <div>
                                <span>ZipCode: </span>
                                <span >{post[0].address.zipcode}</span>
                            </div>
                            <div>
                                <span>Geo: </span>
                                <span >{post[0].address.geo.lat +" , " +post[0].address.geo.lng}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detailedprofile;

export async function getStaticProps(context){
    const {params}=context;
    const {Detailedprofile}=params;
    console.log("Generate id => ",Detailedprofile)
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${Detailedprofile}`
    )
    const data = await res.json();
    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
        return {
            paths: [
                { params: { Detailedprofile: '1' } },
                { params: { Detailedprofile: '2' } },
                { params: { Detailedprofile: '3' } }
            ],fallback:true
        }
    }
