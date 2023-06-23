import { Grid } from "@mui/material";

export const Loading = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        margin: "30px 0 0 0",
        backgroundColor: "rgba(113, 34, 193, 0.4)",
        borderRadius: "10px",
      }}
    >
      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Grid
          item
          sx={{
            borderRadius: "50%",
            backgroundColor: "#cdb4d9",
            height: "225px",
            width: "225px",
            margin: "30px auto",
            border: "2px solid #cdb4d9",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9}>
        <Grid
          item
          sx={{
            padding: "40px",
          }}
        >
          <Grid
            item
            sx={{
              backgroundColor: "#cdb4d9",
              height: "50px",
              width: "210px",
              borderRadius: "6px",
              margin: {
                xs: "0 auto",
                sm: "0",
              },
            }}
          />
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            sx={{
              marginTop: "30px",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: "#cdb4d9",
                height: "15px",
                width: "90px",
                borderRadius: "6px",
              }}
            />
            <Grid
              item
              sx={{
                backgroundColor: "#cdb4d9",
                height: "15px",
                width: "90px",
                borderRadius: "6px",
              }}
            />
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#cdb4d9",
              height: {
                xs: "250px",
                sm: "100px",
              },
              width: "100%",
              borderRadius: "6px",
              marginTop: "50px",
            }}
          ></Grid>
          <Grid
            container
            gap="20px"
            sx={{
              marginTop: "40px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                sm: "start",
              },
              flexFlow: "row wrap",
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: "#cdb4d9",
                height: "22px",
                width: "150px",
                borderRadius: "6px",
                marginRight: {
                  md: "130px",
                  lg: "250px",
                },
              }}
            />
            <Grid
              item
              sx={{
                backgroundColor: "#cdb4d9",
                height: "22px",
                width: "150px",
                borderRadius: "6px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
