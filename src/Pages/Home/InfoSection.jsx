import calenderIcon from '../../assets/icons/Group 32.png'
import phoneIcon from '../../assets/icons/Group 34.png'
import locationIcon from '../../assets/icons/Group 35.png'

const InfoSection = () => {
    return (
        <div className='bg-black p-10 text-white rounded-lg my-10 lg:my-20'>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 lg:gap-16 h-56">

                <div className='flex gap-6 items-center'>
                    <div><img src={calenderIcon} alt="" /></div>
                   <div>
                   <p className='text-lg font-medium'>We are open monday-friday</p>
                   <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                   </div>
                </div>
                
                <div className='flex gap-6 items-center'>
                    <div><img src={phoneIcon} alt="" /></div>
                   <div>
                   <p className='text-lg font-medium'>Have a question?</p>
                   <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                   </div>
                </div>
                
                <div className='flex gap-6 items-center'>
                    <div><img src={locationIcon} alt="" /></div>
                   <div>
                   <p className='text-lg font-medium'>Need a repair? our address</p>
                   <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                   </div>
                </div>
                
            </div>
        </div>
    );
};

export default InfoSection;