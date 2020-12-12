import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieve-user'
import updateAvatar from '../logic/update-avatar'
import Avatar from './Avatar'

function Profile(props) {
    const [user, setUser] = useState({ avatar: '' })
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        retrieveUser(sessionStorage.token, (error, _user) => {
            if (error) alert(error)
            setUser(_user)
        })
    }, [refresh])

    const handleOnUpdateAvatar = (newUrl) => {
        if (!newUrl.length) return

        updateAvatar(sessionStorage.token, newUrl, (error) => {
            if (error) return alert(error)

            setRefresh(!refresh)
        })
    }

    return (<section className='container container--donotcenter'>
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