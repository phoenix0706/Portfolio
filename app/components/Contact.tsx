"use client";
import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import CButton from "./button";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [modalmessage, setmodalmessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    emailjs.init("1RZ9GO0NjyaOZKXZb"); // Initialize EmailJS with your public key
  }, []);
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const closeModal = () => {
    setShowModal(false);
  };
  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(event.target);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (
      email.trim().length == 0 &&
      name.trim().length == 0 &&
      message.trim().length == 0
    ) {
      setmodalmessage("Please Enter Valid Details!");
      setShowModal(true);
      console.log(showModal);
    } else if (email.trim().length == 0) {
      setmodalmessage("Please Enter Valid Email!");
      setShowModal(true);
      console.log(showModal);
    } else if (name.trim().length == 0) {
      setmodalmessage("Name cannot be empty!");
      setShowModal(true);
      console.log(showModal);
    } else if (message.trim().length == 0) {
      setmodalmessage("Message cannot be empty!");
      setShowModal(true);
      console.log(showModal);
    } else {
      setmodalmessage("Mail Sent Successfully!");
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send("service_b7eswpd", "template_u4pvu41", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowModal(true);
          console.log(showModal);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" style={{ zIndex: 10 }}>
      <h1 className="text-6xl text-center font-extrabold my-8">Contact </h1>
      <div className=" rounded-md w-full border-divider max-h-100% border-medium px-5 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12  my-4  ">
          <div className="col-span-6 place-self-center mt-4 lg:mt-0 hidden lg:block  ">
            <div className="rounded-full w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] relative ">
              <Image
                src="/images/mail-2.jpg"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                alt="Intro Image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-span-6 place-self-center w-8/12 my-8 lg-mt-0">
            <div className="my-16">
              <Input
                size="lg"
                type="Name"
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your Name"
                onValueChange={setName}
                value={name}
              />
            </div>
            <div className="my-4">
              <Input
                size="lg"
                isInvalid={isInvalid}
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setEmail}
                value={email}
              />
            </div>
            <div className="my-4">
              <Textarea
                label="Message"
                placeholder="Enter your Message"
                labelPlacement="outside"
                onValueChange={setMessage}
                value={message}
              />
            </div>

            <CButton color="secondary" onClick={handleSubmit}>
              Send Mail
            </CButton>
          </div>
        </div>
      </div>
      {showModal && (
        // <>
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          backdrop="opaque"
          classNames={{
            backdrop:
              "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
        >
          <ModalContent>
            <ModalBody>
              <h2 className="text-center">{modalmessage}</h2>
            </ModalBody>
            <ModalFooter className="justify-center">
              <CButton color="secondary" onClick={closeModal}>
                Close
              </CButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
        // </>
      )}
    </section>
  );
}
