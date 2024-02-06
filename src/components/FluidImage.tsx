import { Image } from 'react-bootstrap';

type tFluidImageProps = {
    src: string;
}

const FluidImage: React.FC<tFluidImageProps> = ({src}) => {
    return(
        <Image src={src} fluid/>
    );
};
export default FluidImage;