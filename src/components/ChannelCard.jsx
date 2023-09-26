import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import ChannelDetail from "./ChannelDetail";

function ChannelCard({ channelDetail,marginTop }) {
  // console.log(channelDetail);
  return (
    <Box
      sx={{
        borderRadius: "none",
        boxShadow: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: {xs: "356px", md: "320px"},
        width: "394px",
        margin: "0 12px 12px 0",
        marginTop: {marginTop},
        zIndex: "20"
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              mb: 2,
              border: "2px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, ml: "5px", color: "green" }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
               subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
