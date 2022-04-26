import { useEffect } from "react";
// @mui
import { useTheme, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
// components
import NewsCard from "./NewsCard";
// assets
import { ReactComponent as FileIcon } from "../../assets/file.svg";
import { ReactComponent as ExternalLinkIcon } from "../../assets/external-link.svg";
// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNews, selectNewsData } from "../../app/slices/news";

interface Props {
  sx?: SxProps;
}

export const LatestNews = ({ sx }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNewsData);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Paper
      sx={{
        p: theme.spacing(3),
        bordeRadius: 10,
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 3.5,
        }}
      >
        <Stack direction="row" alignItems="center">
          <SvgIcon
            component={FileIcon}
            htmlColor="transparent"
            inheritViewBox
          />
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              color: theme.palette.primary.dark,
            }}
          >
            Latest News
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Link
            variant="subtitle1"
            sx={{
              mr: 1,
              fontSize: 17,
              cursor: "pointer",
              color: theme.palette.primary.main,
            }}
            underline="always"
          >
            visit our blog
          </Link>
          <SvgIcon
            component={ExternalLinkIcon}
            htmlColor="transparent"
            inheritViewBox
            sx={{
              stroke: theme.palette.primary.main,
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: 2,
        }}
      >
        {news.map((item, index) => (
          <NewsCard
            key={index}
            url={item.url}
            image={item.image}
            title={item.title}
            category={item.category}
          />
        ))}
      </Box>
    </Paper>
  );
};
