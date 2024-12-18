'use client'
import React, { useState } from "react";
import { Button } from "@mui/material";
import ValidateCouponDialog from "./ValidateCouponDialog";

interface ChangeCouponButtonProps {
  id: string;
  image: string;
  discount: number;
  referenceName: string;
  rules: string;
  expire: Date;
}

const ChangeCouponButton: React.FC<ChangeCouponButtonProps> = ({
  id,
  image,
  discount,
  referenceName,
  rules,
  expire,
}) => {
  const [openValidateDialog, setOpenValidateDialog] = useState(false);

  const handleTakeCoupon = () => {
    setOpenValidateDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenValidateDialog(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleTakeCoupon}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "5px 10px",
          borderRadius: "12px",
          backgroundColor: "#cddc39", // Color de fondo verde
          color: "black", // Color de texto negro
          "&:hover": {
            backgroundColor: "#e6ee9c", // Color al pasar el mouse
          },
        }}
      >
        Canjear
      </Button>
      <ValidateCouponDialog
        open={openValidateDialog}
        onClose={handleCloseDialog}
        id={id}
        image={image}
        discount={discount}
        referenceName={referenceName}
        rules={rules}
        expire={expire}
      />
    </>
  );
};

export default ChangeCouponButton;
