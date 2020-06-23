import React from 'react';
import Title from '../Components/Title/Title';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import AuthOptions from '../Components/AuthOptions';

const ProfilePage = () => {
    return (
        <>
            <AuthOptions />
            <Title />
            <ProfileCard />
        </>

    )
}

export default ProfilePage;