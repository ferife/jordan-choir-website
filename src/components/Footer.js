import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col>Footer col1</Col>
                    <Col>Footer col2</Col>
                    <Col>Footer col3</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;