import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomeScreen({history}) {
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])
    

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default HomeScreen
