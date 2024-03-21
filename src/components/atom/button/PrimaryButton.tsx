import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

interface Props extends ButtonProps {
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<Props> = ({
  isLoading,
  children,
  sx,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 10,
        color: "#fff",
        textTransform: "none",
        ...sx,
      }}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Stack alignItems="center" sx={{ py: 0.5 }}>
          <CircularProgress size={16} />
        </Stack>
      ) : (
        children
      )}
    </Button>
  );
};
