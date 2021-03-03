import React from 'react';

// Component menggunakan Function
const Footer = ({ judul, nama, age, health }) => {
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function bukan Class</h3>
            <p>Nilai ini ditampilkan dari props: {judul} </p>
            <p>Nama Saya: {nama} </p>
            <p>Umur Saya: {age} </p>
            <p>Saya: {health} </p>
        </div>
    );
}

export default Footer;