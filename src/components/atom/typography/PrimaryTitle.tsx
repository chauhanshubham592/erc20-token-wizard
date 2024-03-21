import Typography, { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
  text: string;
}

export const PrimaryTitle: React.FC<Props> = ({ text, sx, ...other }) => {
  return (
    <Typography
      sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 600, ...sx }}
      {...other}
    >
      {text}
    </Typography>
  );
};
