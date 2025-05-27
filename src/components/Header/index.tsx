import Image from 'next/image'
import Logo from '../../../public/logo.png'
import PokeBall from '../../../public/pokeball.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header__icon">
                <Image src={PokeBall} alt="Pokeball" />
            </div>
            <div className="header__logo">
                <Image src={Logo} alt="Gotta catch them all" />
            </div>
            <div className="header__avatar">
                <Image src={PokeBall} alt="Pokeball" />
            </div>
        </header>
    )
}

export default Header