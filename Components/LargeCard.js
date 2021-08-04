import Image from "next/dist/client/image"

function LargeCard({img, title, description, button}) {
    return (
        <section className="relative py-16 cursor-pointer">
            
            <div className="relative h-96 min-w-[360px] rounded-full">
                <Image
                src={img}
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
                />
                </div>


                <div className="absolute top-32 left-12 px-20">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>

                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{button}</button>
            </div>
            
                    
        </section>
    )
}

export default LargeCard
