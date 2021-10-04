import Customstyle from '../styles/Detailedprofile.module.scss'
import { useRouter } from "next/router"

function Detailedprofile({ post }) {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <div className={Customstyle.spinner}>
                <span className={Customstyle.spinnerinner1}></span>
                <span className={Customstyle.spinnerinner2}></span>
                <span className={Customstyle.spinnerinner3}></span>
            </div>
        )
    }
    return (
        <div className={Customstyle.frame}>
            {post.length > 0 ?
                <div className={Customstyle.center}>
                    <div className={Customstyle.card}>
                        <div className={Customstyle.left}>
                            <div className={Customstyle.info}>
                                <div><span className={Customstyle.big}>Name : </span><span className={Customstyle.small}>{post[0].name}</span></div>
                                <div><span className={Customstyle.big}>User Name : </span><span className={Customstyle.small}>{post[0].username}</span></div>
                                <div><span className={Customstyle.big}>Email : </span><span className={Customstyle.small}>{post[0].email}</span></div>
                                <div><span className={Customstyle.big}>Phone  : </span><span className={Customstyle.small}>{post[0].phone}</span></div>
                                <div><span className={Customstyle.big}>Website : </span><span className={Customstyle.small}>{post[0].website}</span></div>
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
                                    <span >{post[0].address.city + " " + post[0].address.street + " " + post[0].address.suite}</span>
                                </div>
                                <div>
                                    <span>ZipCode: </span>
                                    <span >{post[0].address.zipcode}</span>
                                </div>
                                <div>
                                    <span>Geo: </span>
                                    <span >{post[0].address.geo.lat + " , " + post[0].address.geo.lng}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <h1>No Data Found ....</h1>
            }
        </div>
    )
}


export async function getStaticProps(context) {
    try {
        const { params } = context;
        const { Detailedprofile } = params;
        console.log("Generate id => ", Detailedprofile)
        const res = await fetch(
            `${process.env.baseurl.detail}?id=${Detailedprofile}`
        )
        const data = await res.json();
        return {
            props: { post: data }
        }
    } catch (e) {
        console.log("Error=> ", e);
        return {
            props: { post: [] }
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { Detailedprofile: '1' } },
            { params: { Detailedprofile: '2' } },
            { params: { Detailedprofile: '3' } }
        ], fallback: true
    }
}

// export async function getServerSideProps(context) {
//     const { params } = context;
//     const { Detailedprofile } = params;
//     console.log("Generate id => ", Detailedprofile)
//     const res = await fetch(
//         `${process.env.baseurl.detail}?id=${Detailedprofile}`
//     )
//     const data = await res.json();
//     return {
//         props: { post: data }
//     }
// }

export default Detailedprofile;