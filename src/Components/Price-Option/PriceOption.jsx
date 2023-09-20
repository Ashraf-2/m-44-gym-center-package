import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
// import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';





const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-zinc-300 rounded-lg p-5 text-center flex flex-col'>
            <h2>
                <span className='text-5xl font-bold text-fuchsia-700' >{price}</span>
            </h2>
            <h4 className='text-3xl my-5'>{name}</h4>
            <div className='my-2 text-lg flex-grow'>
                {
                    features.map((feature, ind) => <Feature key={ind} feature={feature}></Feature>)
                }

            </div>
            <div>
                {/* <button className='btn mt-5 w-full text-white font-semibold bg-slate-700 border-2 hover:bg-slate-900 px-5 py-2 rounded-xl text-xl'>Buy Now</button> */}
                <button className="btn btn-outline w-full bg-green-400">Pick Plan</button>
                {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}

            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;