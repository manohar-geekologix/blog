import { useRouter } from 'next/router'
import React from 'react'

const Content = () => {
    const router = useRouter()
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos eveniet voluptate sint reprehenderit sequi harum dolores, dolorem aperiam labore distinctio recusandae pariatur unde quis delectus, quos commodi consequatur adipisci.</p>
            <div>Content</div>
        </>
    )
}

export default Content