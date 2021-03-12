import React from 'react';
import ProductCard from "./ProductCard";
import { MDBRow,MDBCol, MDBCardGroup } from 'mdbreact';
import { Link } from 'react-router-dom';

export const sampleProducts = [
    {
        _id: 1,
        product_name: "Penggaris 50 cm",
        description: "penggaris dapat digunakan untuk mengukur dan membuat garis",
        price: 77000,
        promo: "flashSale",
        image:"https://ae01.alicdn.com/kf/HTB13aVlaffsK1RjSszbq6AqBXXaI/1-Pcs-Lytwtw-S-Kawaii-Transparan-Sederhana-Wortel-Kaktus-Penggaris-Plastik-Alat-Ukur-Penggaris-Lurus-Pelajar.jpg"
    },
    {
        _id: 2,
        product_name: "Kemeja hitam",
        description: "kemeja berbahan kain import terbaik. Tersedia ukuran S, M, L, XL",
        price: 300000,
        promo: "flashSale",
        image: "https://cardinal.co.id/wp-content/uploads/2020/03/FAKAI02364J.01A_1.jpg"
    },
    {
        _id: 3,
        product_name: "Jas putih pria",
        description: "jas putih pria dari bahan import terbaik. Tersedia ukuran S, M, L, XL",
        price: 450000,
        promo: "monthlySale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64u-fX5B5hacOKl_zsdVY051tA1xsaVRwKg&usqp=CAU"
    },
    {
        _id: 4,
        product_name: "Kalkulator Citizen SDC 868 L",
        description: "Kalkulator Citizen SDC 868 L Kalkulator 12 Digit Sudah Termasuk Batrai",
        price: 50000,
        promo: "gebyarMaret",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm1aWJrjQpLjCDbK5ARbmuKUEHnC-Zuy8ug&usqp=CAU"
    },
    {
        _id: 5,
        product_name: "Smart TV 32 inch",
        description: "smart LED TV Type LEDScreen Size 32 Inches Resolution 1366 x 768 Pixels",
        price: 2000000,
        promo: "gebyarMaret",
        image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/06/22/2421975989.jpg"
    },
    {
        _id: 6,
        product_name: "Tunik Muslimah Talita Tunik",
        description: "Baju tunik ini dibuat menggunakan bahan Mosscreap. Bahan Mosscreap ini sangat nyaman digunakan karena dingin, tidak mudah kusut, tidak transparan dan lembut pastinya",
        price: 77000,
        promo: "monthlySale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrM26Es2fmw3F7J0X8c5soGKXEL1ooowIhg&usqp=CAU"
    },
    {
        _id: 7,
        product_name: "Penggaris 50 cm",
        description: "penggaris dapat digunakan untuk mengukur dan membuat garis",
        price: 77000,
        promo: "flashSale",
        image:"https://ae01.alicdn.com/kf/HTB13aVlaffsK1RjSszbq6AqBXXaI/1-Pcs-Lytwtw-S-Kawaii-Transparan-Sederhana-Wortel-Kaktus-Penggaris-Plastik-Alat-Ukur-Penggaris-Lurus-Pelajar.jpg"
    },
    {
        _id: 8,
        product_name: "Mouse Rexus Xierra G10",
        description: "Mouse Rexus, gokil harganya. manteb kualitasnya",
        price: 150000,
        promo: "flashSale",
        image: "https://cf.shopee.co.id/file/11f3e836d2e0a1519898a00daad8eb6f"
    },
    {
        _id: 9,
        product_name: "Keyboard Digital Alliance",
        description: "Keyboard paling gokil, murmer, yok beli sis mumpung lagi murah meriah duarrr",
        price: 40000,
        promo: "monthlySale",
        image: "https://www.digitalalliance.co.id/wp-content/uploads/2018/02/MM_03.jpg"
    },
    {
        _id: 10,
        product_name: "Monitor portable",
        description: "Monitor bisa dibawa kemana mana, ekonomis, praktis, dan mobilitas tinggi",
        price: 80000,
        promo: "monthlySale",
        image:"https://images-na.ssl-images-amazon.com/images/I/8161FbWWa-L._AC_SL1500_.jpg"
    },
    {
        _id: 11,
        product_name: "Monitor portable",
        description: "Monitor bisa dibawa kemana mana, ekonomis, praktis, dan mobilitas tinggi",
        price: 80000,
        promo: "gebyarMaret",
        image:"https://images-na.ssl-images-amazon.com/images/I/8161FbWWa-L._AC_SL1500_.jpg"
    },
    {
        _id: 12,
        product_name: "Monitor portable",
        description: "Monitor bisa dibawa kemana mana, ekonomis, praktis, dan mobilitas tinggi",
        price: 80000,
        promo: "gebyarMaret",
        image:"https://images-na.ssl-images-amazon.com/images/I/8161FbWWa-L._AC_SL1500_.jpg"
    },
]

const ProductList = () => {

    //Later fetch data from https://product-service-indent.herokuapp.com/product
    return (
        <>
        <h1 className='text-center mb-4'>Flash Sale</h1>
            <MDBCardGroup>
                <MDBRow>
                {sampleProducts.map(item => 
                    <MDBCol md="4" style={{marginBottom : '2em'}}> 
                        <Link to={`/detail/${item.product_name.replace(/ /g, '_')}`} key={item._id} style={{ color: 'black' }}>
                            <ProductCard id={item._id} 
                                        name = {item.product_name}
                                        price = {item.price}
                                        promo = {item.promo}
                                        image = {item.image}
                                        description = {item.description} 
                            />
                        </Link>
                    </MDBCol>
                ) }
                </MDBRow>
            </MDBCardGroup>
        </>
    );
};


export default ProductList;