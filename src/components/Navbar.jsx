import logo from '/images/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="flex justify-start w-full h-24 align-middle bg-baltic-900 text-baltic-50">
                <div className="relative w-full mx-4 my-2">
                    <Link to={'/'}>
                    <img className="absolute w-20" src={logo} alt="Sabido logo" />
                    </Link>
                </div>
            </div>
        </>
        )
}

export default Navbar;