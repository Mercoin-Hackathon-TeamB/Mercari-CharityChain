"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isPassConfVisible, setIsPassConfVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const handleSubmit = async () => {
    router.push("/products");
  };

  const togglePassVisibility = () => setIsPassVisible(!isPassVisible);
  const togglePassConfVisibility = () =>
    setIsPassConfVisible(!isPassConfVisible);

  return (
    <div className="flex justify-center items-center">
      <Card>
        <CardHeader>
          <div className="text-lg">Signup</div>
        </CardHeader>
        <CardBody>
          <div>
            <Input
              label="User Name"
              variant="bordered"
              placeholder="Enter your user name"
              className="max-w-xs mb-4"
              value={userName}
              onValueChange={setUserName}
            />
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
              label="wallet"
              variant="bordered"
              placeholder="Enter your wallet address"
              className="max-w-xs mb-4"
              value={wallet}
              onValueChange={setWallet}
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
                  onClick={togglePassVisibility}
                >
                  {isPassVisible ? (
                    <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPassVisible ? "text" : "password"}
              className="max-w-xs mb-4"
            />
            <Input
              label="Password Confirmation"
              variant="bordered"
              placeholder="Enter your password again"
              value={passwordConf}
              onValueChange={setPasswordConf}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePassConfVisibility}
                >
                  {isPassConfVisible ? (
                    <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPassConfVisible ? "text" : "password"}
              className="max-w-xs mb-4"
            />
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                color="primary"
                radius="full"
                className="transition-transform duration-100 ease-in-out transform hover:scale-105"
              >
                Register
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUpForm;
