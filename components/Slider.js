import Image from "next/image"
import Link from "next/link"

export const Slider = ({ img }) => {
    return (
        <div className="min-w-full overflow-hidden duration-100 ease-in-out max-h-500 img-wrapper ">
            <Image 
                src={ img }
                alt="img1"
                width={600}
                height={500}
                objectFit="cover"
            />
        </div>
    )
}