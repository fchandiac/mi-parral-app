'use client';
import ReplayIcon from '@mui/icons-material/Replay';
import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { BrowserQRCodeReader } from '@zxing/browser';
import { validateCoupon } from '@/app/actions/coupons-actions';

export default function ValidatePage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validateError, setValidateError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();

    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(undefined, videoRef.current, (result, err) => {
          if (result) {
            setQrCode(result.getText());
            setError(null);
          } else if (err) {
            console.error(err);
            setError('Error al escanear. Intenta de nuevo.');
          }
        })
        .catch((err) => {
          console.error("Error al inicializar lector QR:", err);
          setError("No se pudo acceder a la cámara. Verifica los permisos.");
        });
    }

    // Limpiar al desmontar el componente
    return () => {
      //codeReader.reset();
    };
  }, []);

  const handleValidate = async () => {
    if (qrCode) {
      try {
        await validateCoupon(qrCode);
        setSuccess(true);
        setQrCode(null);
        setValidateError(null);
      } catch (error) {
        setValidateError('Cupón no válido.');
        console.error(error);
      }
    }
  };

  const resetState = () => {
    setQrCode(null);
    setError(null);
    setValidateError(null);
    setSuccess(false);
  };

  return (
    <Box
      px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
      mt={7}
      mb={10}
      minWidth={'330px'}
      pt={2}
    >
      {/* Botón para reiniciar el estado */}
      <Box display="flex" alignItems="right" justifyContent="right">
        <IconButton onClick={resetState}>
          <ReplayIcon />
        </IconButton>
      </Box>

      <Typography variant="body1" mb={3}>
        Para validar un cupón, escanea el código QR.
      </Typography>

      {/* Contenedor para el video */}
      <Box
        mb={3}
        sx={{
          maxWidth: '100%',
          textAlign: 'center',
          borderRadius: 5,
          border: '1px solid #1d1d1d',
          overflow: 'hidden',
          py: 5,
        }}
      >
        <video ref={videoRef} style={{ width: '100%' }} />
      </Box>

      {/* Mostrar mensajes dependiendo del estado */}
      {success ? (
        <Typography variant="h6" color="primary">
          Cupón validado con éxito.
        </Typography>
      ) : (
        <>
          {error && !qrCode && (
            <Typography color="white" fontSize={14} mb={2}>
              {error}
            </Typography>
          )}
          {validateError && (
            <Typography color="white" fontSize={14} mb={2}>
              {validateError}
            </Typography>
          )}
          {qrCode ? (
            <Typography fontSize={16} color="primary">
              Código escaneado:
              <br />
              {qrCode}
            </Typography>
          ) : (
            <Typography variant="h6" color="primary">
              No se ha escaneado ningún código.
            </Typography>
          )}
        </>
      )}

      <Button
        variant="contained"
        onClick={handleValidate}
        disabled={!qrCode || success}
        sx={{ mt: 3 }}
        fullWidth
      >
        Validar
      </Button>
    </Box>
  );
}
