import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from 'reactstrap';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:18080/auth/admin', // Make sure to include the protocol (http/https)
  realm: 'camunda-platform',
  clientId: 'camunda-identity',
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await keycloak.init({ onLoad: 'login-required' });
      console.log('Authenticated:', keycloak.authenticated);
      // You can perform actions after successful authentication
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Нэвтрэх боломж</small>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Нэвтрэх нэр"
                        type="email"
                        autoComplete="new-email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Нууц үг"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={handleLogin}
                  >
                    Нэвтрэх
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
  );
};

export default Login;
