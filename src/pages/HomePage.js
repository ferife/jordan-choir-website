import { Container } from 'reactstrap';
import PicCarousel from '../features/carousel/PicCarousel';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    // TODO: Add News section
    // FIXME: PicCarousel
    return (
        <Container>
            <SubHeader current='Home' />
            <PicCarousel/>
        </Container>
    );
};

export default HomePage;