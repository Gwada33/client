"use client"

import Image from "next/image"
import Tilt  from 'react-parallax-tilt';

export default function Screen() {
    return (

<Tilt className="absolute top-20 right-10 animate-wiggle">
<Image  alt="image"  width={300} height={300} src="https://cdn.discordapp.com/attachments/1158058004931952811/1175517963160399902/image.png?ex=656b856a&is=6559106a&hm=6e6457b076de096790c0d8f0215300675b085d602a6722975da2833da6ba0235&"  />
</Tilt>
    )
}