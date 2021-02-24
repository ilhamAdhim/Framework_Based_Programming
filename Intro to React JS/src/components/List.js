import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://picsum.photos/100?random=1' />
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://picsum.photos/100?random=2' />
                    </li>
                    <li>
                        Tiga
                        <Image linkGambar='https://picsum.photos/100?random=3' />
                    </li>
                    <li>
                        Empat
                        <Image linkGambar='https://picsum.photos/100?random=4' />
                    </li>
                </ol>
            </div>
        );
    }
}

export default List;