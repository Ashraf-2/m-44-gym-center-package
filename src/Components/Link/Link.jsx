
const Link = ({route}) => {
    return (
        
        <li className="md:mr-5  md:text-xl px-5 md:py-3 hover:bg-slate-400 rounded-md " >
            <a href={route.path}>{route.name}</a>
        </li>
            
        
    );
};

export default Link;