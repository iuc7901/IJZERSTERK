import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";

export default function Home() {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const loadCommunities = () => {
    setLoading(true);
    axios
      .get("https://api.test.kemnu.com/v2/available-communities")
      .then((response) => {
        const { data } = response;
        setData(data);
      })
      .catch((error) => {
        const data = error?.response?.data;
        enqueueSnackbar(data?.message || "Something went wrong", {
          variant: "error",
          anchorOrigin: {
            horizontal: "right",
            vertical: "bottom",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCommunities();
  }, []);

  return (
    <Box bgcolor="#F2F2F2" height="100vh" p={{ xs: 2, sm: 5 }}>
      <Typography variant={{ xs: "h6", sm: "h4" }} fontWeight="bold">
        All Communities
      </Typography>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="90vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container py={5} spacing={3}>
          {data && data.length > 0 ? (
            data.map((each) => (
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3}>
                  <Avatar
                    variant="square"
                    src={each?.avatar}
                    sx={{ width: "100%", height: 200 }}
                  />
                  <Typography bgcolor="#4194E6" color="white" align="center">
                    {each?.memberCount} Members
                  </Typography>
                  <Stack spacing={1} p={2}>
                    <Typography fontWeight="bold">
                      {each?.name || "No Name"}
                    </Typography>
                    <Typography variant="subtitle1">
                      Category : {each?.category?.name || "No Category"}
                    </Typography>
                    <Typography variant="subtitle2" color="#A5A5A5">
                      {each?.city || "No City"}, {each?.state || "No State"},
                      {each?.country || "No Country"}
                    </Typography>
                    <Typography fontWeight="bold">
                      Code : {each?.code}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))
          ) : (
            <> No Communities</>
          )}
        </Grid>
      )}
    </Box>
  );
}
