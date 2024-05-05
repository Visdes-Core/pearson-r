import { Button } from "@/components/button";
import React, { useState } from "react";

function ModalOrganisasi() {
  const [isShown, setShown] = useState(true)
  const toggleModal = () => {
    setShown(!isShown)
  }
  return <div></div>;
}

export default ModalOrganisasi;
