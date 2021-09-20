import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import Footer from "../Footer/Footer";
import FaqData from "./FaqData";
import { AccordionSection, Container, Wrap, Dropdown } from "./FaqElements";

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <AccordionSection>
          <h2
            style={{
              fontSize: "100px",
              alignItems: "center",
              textAlign: "center",
              margin: "none",
            }}
          >
            FAQ
          </h2>
          <Container>
            {FaqData.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
      <Footer />
    </>
  );
};

export default FAQ;
