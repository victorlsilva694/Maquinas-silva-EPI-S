import * as S from "./style";
import {
  Container,
  FloatingLabel,
  FormControl,
  Form,
  InputGroup,
  Carousel,
} from "react-bootstrap";
import imageSearch from "./img/search.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
const InitialPresentation = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <S.ContainerImage >
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="Second slide"
        />
      </S.ContainerImage>
      <br />
    </>
  );
};

export default InitialPresentation;
