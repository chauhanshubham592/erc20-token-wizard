import Card, { CardProps } from "@mui/material/Card";
import { ReactNode } from "react";

interface Props extends CardProps {
  children: ReactNode;
}

export const PrimaryCard: React.FC<Props> = ({ children, sx, ...other }) => {
  return (
    <Card
      sx={{
        maxWidth: 540,
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0px 2px 5px 0px #0000004D",
        width: "100%",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Card>
  );
};
