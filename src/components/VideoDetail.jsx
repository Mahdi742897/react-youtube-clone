import { useState, useEffect } from "react";
import { Await, Link, useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle, Subtitles } from "@mui/icons-material";
import ReactPlayer from "react-player";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    fetchFromApi(`/videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`/search?part=snippet,id&relatedToVideoId=${id}`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  console.log(videoDetail);
  if (!videoDetail?.snippet) {
    return " Loading... ";
  }
  // Object destructuring

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="100vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={3}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              height="70vh"
              width="100%"
              
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              justifyContent="space-between"
              direction="row"
              py={1}
              px={2}
              color="#fff"
            >
              <Link
                to={`/channel/${channelId}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{ color: "#fff" }}
                  variant={{ sm: "Subtitles1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box flex={1} sx={{
          paddingLeft:{md:'70px'},paddingRight:{md:'10px'}}}>
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
