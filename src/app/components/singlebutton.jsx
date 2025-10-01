import Link from 'next/link'
import React from 'react'

const SingleButton = ({ link, txt, whitebg }) => {
    return (
        <Link href={link} className={whitebg ? "singleBtn whitebg" : "singleBtn"}>
            {txt ? txt : "Let’s Connect"}
        </Link >
    )
}

export default SingleButton