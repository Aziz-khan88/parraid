import Link from 'next/link'
import React from 'react'

const SingleButton = ({ link, txt }) => {
    return (
        <Link href={link} className="singleBtn">
            {txt ? txt : "Let’s Connect"}
        </Link>
    )
}

export default SingleButton