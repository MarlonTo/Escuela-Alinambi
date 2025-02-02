import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function EducacionBasicaPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h2 className="text-center title">Educación General Básica</h2>
              <h5 className="text-center description">
                Formación integral basada en valores, excelencia académica y desarrollo
                de habilidades para el siglo XXI.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto" md="10">
              <Nav className="justify-content-center" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Básica Elemental
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Básica Media
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Básica Superior
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Áreas Académicas</CardTitle>
                          <ul>
                            <li>Lengua y Literatura</li>
                            <li>Matemáticas</li>
                            <li>Ciencias Naturales</li>
                            <li>Estudios Sociales</li>
                            <li>Educación Cultural y Artística</li>
                            <li>Educación Física</li>
                            <li>Inglés</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Metodología</CardTitle>
                          <ul>
                            <li>Aprendizaje significativo</li>
                            <li>Desarrollo de competencias</li>
                            <li>Trabajo colaborativo</li>
                            <li>Proyectos interdisciplinarios</li>
                            <li>Uso de tecnología educativa</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Plan Curricular</CardTitle>
                          <ul>
                            <li>Lengua y Literatura avanzada</li>
                            <li>Matemáticas con razonamiento lógico</li>
                            <li>Ciencias Naturales experimentales</li>
                            <li>Estudios Sociales y ciudadanía</li>
                            <li>Arte y cultura</li>
                            <li>Educación Física y salud</li>
                            <li>Inglés intermedio</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Actividades Complementarias</CardTitle>
                          <ul>
                            <li>Clubes académicos</li>
                            <li>Proyectos de investigación</li>
                            <li>Salidas pedagógicas</li>
                            <li>Actividades deportivas</li>
                            <li>Talleres artísticos</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Perfil de Salida</CardTitle>
                          <ul>
                            <li>Pensamiento crítico y analítico</li>
                            <li>Competencias digitales</li>
                            <li>Habilidades de comunicación</li>
                            <li>Valores y ética</li>
                            <li>Preparación para bachillerato</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Proyectos Especiales</CardTitle>
                          <ul>
                            <li>Feria de ciencias</li>
                            <li>Modelo de Naciones Unidas</li>
                            <li>Olimpiadas académicas</li>
                            <li>Proyectos comunitarios</li>
                            <li>Intercambios culturales</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default EducacionBasicaPage; 