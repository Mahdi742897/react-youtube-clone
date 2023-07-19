import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Height } from "@mui/icons-material";

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`/channels?part=snippet,statistics&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`/search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  console.log(channelDetail?.snippet?.thumbnails?.high?.url);

  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(132,255,223,1) 0%, rgba(29,197,210,1) 46%, rgba(0,42,138,1) 100%)",
            height: "300px",
            zIndex: "10",
            width: "100%",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-90px" />
      </Box>

      <Box display="flex" p={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
