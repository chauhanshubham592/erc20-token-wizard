import {
  TextField as MUITextField,
  Stack,
  SxProps,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface Props extends Omit<TextFieldProps, "label"> {
  label?: string;
  children?: ReactNode;
  wrapperSxProp?: SxProps;
  isError?: boolean;
  errorMsg?: string;
}

export const CustomTextField: React.FC<Props> = ({
  label,
  children,
  wrapperSxProp,
  isError,
  errorMsg,
  sx,
  InputProps,
  ...other
}) => {
  return (
    <Stack gap={1} sx={{ ...wrapperSxProp }}>
      {label && (
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{label}</Typography>
      )}
      <Stack>
        <MUITextField
          size="small"
          placeholder="Enter Ethereum Address"
          sx={{
            borderRadius: "80px",
            width: "100%",
            ...sx,
          }}
          InputProps={{
            sx: { borderRadius: "12px", background: "#fff", ...InputProps },
          }}
          {...other}
        >
          {children}
        </MUITextField>
        {isError && errorMsg && (
          <Typography
            sx={{ color: "error.main", fontSize: 12, fontWeight: 400, ml: 1 }}
          >
            {errorMsg}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
