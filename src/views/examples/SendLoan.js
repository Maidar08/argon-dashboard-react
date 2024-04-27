/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Loan = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" >
        <Row>
          <Col className="order-xl-1" xl="12" >
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Хэрэглээний зээл</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Харилцагчийн мэдээлэл
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-username"
                          >
                            Овог
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue="Овог"
                              id="input-username"
                              placeholder="Овог"
                              type="text"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-username"
                          >
                            Нэр
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Нэр"
                              type="text"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-username"
                          >
                            Хүсэлтийн дугаар
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-"
                              placeholder="Хүсэлтийн дугаар"
                              type="number"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4 ">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-email"
                          >
                            И-мейл
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue="abcd123@gmail.com"
                              id="input-email"
                              placeholder="abcd123@gmail.com"
                              type="email"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4 ">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-number"
                          >
                            Утасны дугаар
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-number"
                              placeholder="1234 5678"
                              type="number"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                          >
                            Төрсөн он сар
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-date"
                              placeholder="mm/dd/yyyy"
                              type="date"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4"/>
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Орлогын мэдээлэл
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-type">
                            Орлогын төрөл
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-type"
                              placeholder="Орлогын төрөл"
                              type="select"
                              readOnly="true"
                          >
                            <option value="Цалингийн орлого">Цалингийн орлого</option>
                            <option value="Бизнесийн орлого">Бизнесийн орлого</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-income"
                          >
                            Жилийн орлого
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-income"
                              placeholder="Жилийн орлого"
                              type="number"
                              required="true"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-score"
                          >
                            Кредит оноо
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue="Кредит оноо"
                              id="input-score"
                              placeholder="0"
                              type="number"
                              readOnly="true"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-loan-amount"
                          >
                            Хүсч буй зээлийн хэмжээ
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-loan-amount"
                              placeholder="0"
                              type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-loan-amount"
                          >
                            Боломжит зээлийн хэмжээ
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-loan-amount"
                              placeholder="0"
                              type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                              className="form-control-label"
                              htmlFor="input-loan-amount"
                          >
                            Олгох дүн
                          </label>
                          <Input
                              className="form-control-alternative"
                              id="input-loan-amount"
                              placeholder="0"
                              type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4"/>
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Зээл шийдвэрлүүлэхээр илгээх
                  </h6>
                  <div className="pl-lg-4">
                    <Row lg = "4">
                      <label className="form-control-label" htmlFor="input-type">
                     Хэрэглэгчийн бүлэг рүү илгээх
                    </label>
                      <Input
                          type="checkbox"
                          ></Input>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-group">
                            Илгээх бүлэг
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-group"
                              placeholder="Илгээх бүлэг"
                              type="select"
                              readOnly="true"
                          >
                            <option value="Салбарын захирал">Салбарын захирал</option>
                            <option value="Зээлийн мэргэжилтэн">Зээлийн мэргэжилтэн</option>
                            <option value="Банкир">Банкир</option>
                            <option value="Теллер">Теллер</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-user">
                            Илгээх хүн
                          </label>
                          <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-user"
                              placeholder="Илгээх хүн"
                              type="select"
                              readOnly="true"
                          >
                            <option value="Maidar">Maidar</option>
                            <option value="Batbold">Batbold</option>
                            <option value="Boldbaatar">Boldbaatar</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
                <Col className="text-right" xs="12">
                  <button
                      type="reset"
                      className="btn btn-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        // Additional reset logic if needed
                      }}
                      size="m"
                  >
                    Болих
                  </button>
                  <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="m"
                  >
                    Илгээх
                  </Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loan;
