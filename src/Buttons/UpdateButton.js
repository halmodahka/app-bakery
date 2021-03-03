import React from "react";
import UpdateButtonStyled from "../styles";
import ProductModal from "../Modals/ProductModal";
import { useState } from "react";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        createProduct={props.createProduct}
      />
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
    </>
  );
};

export default UpdateButton;
