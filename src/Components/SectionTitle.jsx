
const SectionTitle = ({categoryName, categoryTitle, paragraph}) => {
    return (
        <div className="text-center my-5 space-y-4">
            <h6 className='font-bold text-lg text-[#FF3811]'>{categoryName}</h6>
            <h2 className='font-bold text-5xl'>{categoryTitle}</h2>
            <p className='font-normal text-lg text-gray-600 w-1/2 mx-auto'>{paragraph}</p>
            
        </div>
    );
};

export default SectionTitle;