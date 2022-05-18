import NewsInfoDb from './NewsInfoDb'

const NewsCards = () => {
    
    return (
        <div className='grid grid-cols-4'>
            {NewsInfoDb.map((infoCard) => (
                <div className='bg-slate-300 bg-cover w-full min-h-screen flex justify-center items-center'>
                    <div className='rounded w-60 p-2 bg-white round-xl hover:-translate-y-3 duration-500 drop-shadow-lx hover:shadow-2x1 '>
                        <img className='round-lg h-40 object-cover ' src={infoCard.img} alt={infoCard.alt} />
                        <div className='font-bold text-lg'>
                            {infoCard.title}
                        </div>
                        <div className='text-sm'>
                            {infoCard.date}
                        </div>
                        <div className='text-sm text-gray-600'>
                            {infoCard.text}
                        </div>
                        <div className='m-2'>
                            <a role='button' href={infoCard.link} className='accent-red-500'>Read More</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsCards
