import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{size: 4, offset: 1}} sm='2'>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li> <Link to="">Home</Link> </li>
                            <li> <Link to="/shop">Shop</Link> </li>
                            <li> <Link to="/calendar">Calendar</Link> </li>
                        </ul>
                    </Col>
                    <Col>Footer col2</Col>
                    <Col>Footer col3</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;