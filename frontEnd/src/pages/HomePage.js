import { Container } from 'reactstrap';
import PicCarousel from '../features/carousel/PicCarousel';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <PicCarousel/>
        </Container>
    );
};

export default HomePage;