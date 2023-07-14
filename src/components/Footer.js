import {Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return(
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size:4, offset:1 }} sm='2'> 
                        <h5> this will be site navigation </h5> 
                    </Col>
                    <Col xs='6' className='text-center mt-2'> 
                        {/* <h5>Social</h5> */}
                            <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'>
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            {/* <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/' >
                                <i className='fa fa-twitter' />
                            </a>{' '}
                            <a className='btn btn-social-icon btn-google' href='http://youtube.com/' >
                                <i className='fa fa-youtube' />
                            </a> */}
                    </Col>
                    {/* <Col>
                        <a role='button' className='btn btn-link' href='tel:+13156952462'>
                            <i className='fa fa-phone' /> 1-315-695-2462
                        </a>
                        <br />
                        <a role='button' className='btn btn-link' href='mailto:bdoupe@ymail.com'>
                            <i className='fa fa-envelope-o' /> bdoupe@ymail.com
                        </a>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;