/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-3'><AiFillCheckCircle className='text-gray-800'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;