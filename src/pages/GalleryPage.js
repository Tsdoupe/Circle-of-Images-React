import {Container, Row, Col} from 'reactstrap';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectDetail from '../features/projects/ProjectDetail';
import {selectProjectById} from '../features/projects/projectsSlice';
import {useState} from 'react';

const GalleryPage = () => {
    const [projectId, setProjectId] = useState(0);

    const selectedProject = selectProjectById(projectId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <ProjectsList setProjectId={setProjectId} />
                </Col>
                <Col sm='7' md='5'>
                    <ProjectDetail project={selectedProject} />
                </Col>
            </Row>
        </Container>
    );
};

export default GalleryPage;