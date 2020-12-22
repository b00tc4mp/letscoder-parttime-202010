import { useEffect, useState } from 'react'
import Avatar from './Avatar'
import Feedback from './Feedback'
import AppButton from './AppButton'
import { retrieveUser, updateAvatar } from '../logic'

function Profile({ onLogout }) {
    const [user, setUser] = useState({ avatar: '' })
    const [refresh, setRefresh] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, _user) => {
                if (error) return setError(error)
                setUser(_user)
            })
        } catch (error) {
            setError(error.message)
        }
    }, [refresh])

    const handleOnUpdateAvatar = (newUrl) => {
        if (!newUrl.length) return

        try {
            updateAvatar(sessionStorage.token, newUrl, (error) => {
                if (error) return setError(error)

                setRefresh(!refresh)
            })
        } catch (error) {
            setError(error.message)
        }
    }

    return (<section className='container container--nopaddings'>
        {error && <Feedback message={error} type='error' />}
        <div className='logout-container'><AppButton text='Logout' color='highlight' buttonClick={onLogout} /></div>
        <section className='user-display'>
            <div className='user-display__info'>
                <h1 className='title'>{user.username}</h1>
                <h2>{user.name} {user.surname}</h2>
            </div>
            <Avatar url={user.avatar} onUpdateAvatar={handleOnUpdateAvatar} />
        </section>
    </section>);
}

export default Profile