"use client";
import React from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //ログインボタンを押された時の処理をここに書く
  const handleSubmit = async () => {
    router.push("/products");
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center">
      <Card>
        <CardHeader>
          <div className="text-lg font-bold">Login</div>
        </CardHeader>
        <CardBody>
          <div>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Enter your email"
              className="max-w-xs mb-4"
              value={email}
              onValueChange={setEmail}
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              value={password}
              onValueChange={setPassword}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs mb-4"
            />
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                color="primary"
                radius="full"
                className="transition-transform duration-100 ease-in-out transform hover:scale-105"
              >
                Login
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
