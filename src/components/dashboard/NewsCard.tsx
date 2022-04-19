import { NewsType } from "../../interfaces/index";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
// assets
import placeholder from "../../assets/image.jpg";

const Image = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NewsCard = ({ title, image, category, url }: NewsType) => {
  const theme = useTheme();
  const excerpt = title.slice(0, 57).concat(" ...");

  return (
    <Stack direction="row" alignItems="center">
      <ButtonBase sx={{ width: 100 }}>
        <Image alt={title} src={image ? image : placeholder} />
      </ButtonBase>

      <Stack ml={1.5} direction="column" alignItems="center">
        <section>
          <Typography variant="overline" color={theme.palette.primary.main}>
            {category}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontSize: 15,
              color: theme.palette.primary.dark,
            }}
          >
            {excerpt}
          </Typography>

          <Link
            variant="caption"
            target="_blank"
            href={url}
            sx={{
              cursor: "pointer",
              fontWeight: 300,
              color: theme.palette.primary.dark,
            }}
            underline="always"
          >
            Read
          </Link>
        </section>
      </Stack>
    </Stack>
  );
};

export default NewsCard;
