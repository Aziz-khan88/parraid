import Link from 'next/link'
import React from 'react'

const TwoButton = ({ link1, link2, black }) => {
    return (
        <div className={`twoBtn ${black ? 'blackBtn' : ''}`}>
            <Link href={link1} >
                Read More
            </Link>
            <Link href={link2} >
                Let’s Connect
            </Link>
        </div>

    )
}

export default TwoButton