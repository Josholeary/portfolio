import {
  Box,
  Divider,
  Grid,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="home">
        <Grid
          container
          textAlign="center"
          justifyContent="space-between"
          paddingTop={20}
        >
          <Grid xs={12} item>
            <Typography variant="h1" align="center" padding={1}>
              Josh O'Leary
            </Typography>
          </Grid>
          <Grid xs={12} item paddingTop={2}>
            <Divider />
            <Typography variant="h4" align="center" padding={1}>
              Software Development & Cyber Security
            </Typography>
            <Divider />
          </Grid>
        </Grid>
      </div>
      <div>
        <Card
          style={{
            padding: "20px 5px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h3" align="left">
              Designing, building and protecting your business software.
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              align="left"
            >
              By combining creativity with cutting-edge technology we work with
              the customers needs at heart to build bespoke applications to meet
              your business needs. Using industry leading software development
              techniques we deliever results that bring each of your ideas to
              reality to reach your business goals. Whether you want a desktop,
              mobile or web application, we've got you covered and can develop
              both internal organization or public-facing software.
            </Typography>
            <Box
              sx={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}
            >
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={buffer}
              />
            </Box>
            <Divider />
            <Typography
              gutterBottom
              variant="h3"
              align="left"
              marginBottom={5}
              marginTop={5}
            >
              Keeping your organization and customers safe.
            </Typography>
            <Grid container textAlign="center" justifyContent="space-between">
              <Grid xs={4} item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textSecondary"
                  align="left"
                >
                  Cyber attacks occur once every:{" "}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {" "}
                    39 Seconds{" "}
                  </Typography>
                </Typography>
              </Grid>

              <Grid xs={4} item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textSecondary"
                  align="left"
                >
                  Cyber criminals steal:{" "}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {" "}
                    $400 Billion Annually{" "}
                  </Typography>
                </Typography>
              </Grid>

              <Grid xs={4} item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textSecondary"
                  align="left"
                >
                  Percentage of avoidable cyber attacks:{" "}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {" "}
                    95%{" "}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              align="left"
              marginTop={2}
            >
              You can trust us to ensure your enterprise systems stay safe from
              cyber criminals. We actively detect vulnerabilities in your
              systems and software that a real hacker would seek to attack and
              patch them. By reviewing your operations we can educate your
              organizations employees how to maintain security best practices
              and prevent internal human errors from being exploited.
            </Typography>

            <Divider />

            <Typography
              gutterBottom
              variant="h3"
              align="left"
              marginBottom={5}
              marginTop={5}
            >
              Check out:
            </Typography>

            <Grid container textAlign="center" justifyContent="space-between">
              <Grid xs={4} item>
                <Typography gutterBottom variant="h4" align="center">
                  {" "}
                  About Us{" "}
                </Typography>
              </Grid>
              <Grid xs={4} item>
                <Typography gutterBottom variant="h4" align="center">
                  {" "}
                  Our Projects{" "}
                </Typography>
              </Grid>
              <Grid xs={4} item>
                <Typography gutterBottom variant="h4" align="center">
                  {" "}
                  Contact Us{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
