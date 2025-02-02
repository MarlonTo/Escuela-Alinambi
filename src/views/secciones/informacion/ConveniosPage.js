import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ConveniosHeader from "components/Headers/ConveniosHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ConveniosPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <ConveniosHeader />
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h2 className="text-center title">Convenios Institucionales</h2>
              <h5 className="text-center description">
                Mantenemos alianzas estratégicas con instituciones nacionales e internacionales
                para enriquecer la experiencia educativa de nuestros estudiantes.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Académicos"
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Convenios Académicos</CardTitle>
                  <CardText>
                    <ul>
                      <li>Universidades nacionales</li>
                      <li>Instituciones internacionales</li>
                      <li>Programas de intercambio</li>
                      <li>Certificaciones internacionales</li>
                      <li>Programas de capacitación</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Deportivos"
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Convenios Deportivos</CardTitle>
                  <CardText>
                    <ul>
                      <li>Clubes deportivos</li>
                      <li>Federaciones deportivas</li>
                      <li>Competencias intercolegiales</li>
                      <li>Escuelas de formación</li>
                      <li>Eventos deportivos</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Culturales"
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Convenios Culturales</CardTitle>
                  <CardText>
                    <ul>
                      <li>Centros culturales</li>
                      <li>Museos y galerías</li>
                      <li>Escuelas de arte</li>
                      <li>Programas de teatro</li>
                      <li>Intercambios culturales</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain bg-info">
                <CardBody>
                  <h3 className="text-white">Beneficios para Estudiantes</h3>
                  <Row>
                    <Col md="4">
                      <h5 className="text-white">Académicos</h5>
                      <ul className="text-white">
                        <li>Acceso a recursos educativos</li>
                        <li>Programas de mentoría</li>
                        <li>Becas y descuentos</li>
                      </ul>
                    </Col>
                    <Col md="4">
                      <h5 className="text-white">Deportivos</h5>
                      <ul className="text-white">
                        <li>Uso de instalaciones</li>
                        <li>Entrenamiento especializado</li>
                        <li>Participación en torneos</li>
                      </ul>
                    </Col>
                    <Col md="4">
                      <h5 className="text-white">Culturales</h5>
                      <ul className="text-white">
                        <li>Talleres artísticos</li>
                        <li>Eventos culturales</li>
                        <li>Exposiciones y muestras</li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ConveniosPage;
