import { Button, Card, Checkbox, Form, Input, Link } from "@/components";
import Section from "@/components/base/section";

import { LockKey, User } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface Params {}

const LoginPage = ({}: Params) => {
  return (
    <div className="h-full w-full bg-red-100 flex ">
      <div className="flex-1 bg-blue-100">teste</div>
      <div className="flex-1 flex justify-center items-center bg-green-100">
        <Card title="Login">
          <Form action="">
            <h1>Bem vindo novamente!</h1>
            <h4>Estavamos com saudades </h4>
            <Input
              id="user"
              icon={<User size={24} color="gray" />}
              type="email"
              required
            />
            <Input
              id="password"
              icon={<LockKey size={24} color="gray" />}
              type="password"
              required
            />
            <div className="flex justify-between gap-2">
              <Checkbox id="remember-me" label="Lembrar-me" />
              <Link href={"#"}>Esqueci a senha</Link>
            </div>
            <Button fullSize>Login</Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
