import React from 'react'

import Contact from './Contact'

const ContactList = () => {
    const lesCons = [
        {
            name: "Audrey Pétepersonne",
            picture: "https://randomuser.me/api/portraits/women/95.jpg",
            online: false,
        },
        {
            name: "Alex Thomas",
            picture: "https://randomuser.me/api/portraits/men/92.jpg",
            online: false
        },
        {
            name: "Darryl Hommesable",
            picture: "https://randomuser.me/api/portraits/men/84.jpg",
            online: true
        },
        {
            name: "Liam Elliott",
            picture: "https://randomuser.me/api/portraits/men/39.jpg",
            online: false
        }, {
            name: "Morris Hicks",
            picture: "https://randomuser.me/api/portraits/men/36.jpg",
            online: true
        }
    ];

    return <div>
        {lesCons.map(item => <Contact name ={item.name} img={item.picture} online ={item.online} />)}
    </div>
}