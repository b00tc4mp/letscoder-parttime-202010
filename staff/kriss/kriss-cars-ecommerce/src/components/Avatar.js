import { useEffect, useState } from "react";
import AppButton from "./AppButton";

function Avatar({ url, onUpdateAvatar }) {
    const [avatar, setAvatar] = useState(url)
    const [showAvatarInput, setShowAvatarInput] = useState(false)

    useEffect(() => {
        setAvatar(url)
    }, [url])

    const handleAvatarUpload = (e) => {
        e.preventDefault()

        const newUrl = e.target.newUrl.value

        onUpdateAvatar(newUrl)
    }

    return (
        <div className='avatar-container'>
            {avatar && <img className='avatar-img' src={avatar} alt='Could not load Avatar' />}
            {avatar && <div><AppButton text='Update Avatar' buttonClick={() => setShowAvatarInput(!showAvatarInput)} /></div>}
            {avatar === undefined && <AppButton text='Upload Avatar' buttonClick={() => setShowAvatarInput(!showAvatarInput)} />}

            {showAvatarInput && <div>
                <form className='form' onSubmit={handleAvatarUpload}>
                    <input placeholder='Insert your URL' type='text' className='form__item form__item--last' name='newUrl' />
                    <AppButton text='Upload' color='highlight' classes='button--small' />
                </form>
            </div>}

        </div>
    );
}

export default Avatar