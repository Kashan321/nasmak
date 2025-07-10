import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/dark.png"
                alt="logo"
                  width={150}
                height={150}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/light.png"
                alt="logo"
                width={150}
                height={150}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
