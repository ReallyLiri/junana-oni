import React, {useState} from 'react';
import styled from "styled-components";

const Image = styled.img`
    display: table;
    margin: 0 auto;
    width: 720px;
    max-width: 100%;
`;

const Images = [
    "https://i.imgur.com/yKhDuFB.png",
    "https://i.imgur.com/HK5ho20.png",
    "https://i.imgur.com/JPYVyO3.png",
    "https://i.imgur.com/jGDC5J7.png",
    "https://i.imgur.com/Nyh9JlK.png",
    "https://i.imgur.com/Qr95Xwp.png"
];

const App = () => {
    const [imageIndex, setImageIndex] = useState(0);

    return <div onClick={() => setImageIndex(imageIndex + 1)}>
        <Image
            alt="image"
            src={Images[imageIndex % Images.length]}
        />
    </div>
};

export default App;
