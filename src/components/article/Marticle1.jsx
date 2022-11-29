import { Box } from "@mui/material";
import React from "react";
import Ctypo from "../Ctypo/Ctypo";
import Cimg from "../Cimg/Cimg";
const Marticle = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "5rem",
        height: "40vh",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "85vw",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
            <Cimg
      width="460px"
      height="306px"
      backgroundSize="cover"
      backgroudImage="url(./f.jpg)"
      borderRadius="20px"
      />
          {/* <div
            style={{
              width: "460px",
              height: "306px",
              backgroundImage: "url(./9.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          ></div> */}

          <div
            style={{
              width: "636px",
              height: "306px",
              display: "flex",
              alignCenter: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid blue",
                  height: "145px",
                  widht: "630px",
                  margin: "10px",
                  borderRadius: "15px",
                  display: "flex",
                  alignCenter: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <div>
                <Ctypo
                  textButton="Sampah Yang Bisa di daur ulang"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  color="#2E582C"
                   my="1"
                   variant="body2" 
                  />
                  {/* <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2E582C", my: 1 }}>
                    Sampah Yang Bisa di daur ulang
                  </Typography> */}

                  <Ctypo
                  textButton="Sampah yang bisa didaur ulang artinya sampah yang bisa digunakan kembali atau setelah diubah menjadi bentuk lain. Material yang bisa didaur ulang terdiri dari sampah kaca, plastik, kertas, logam, tekstil, dan
                  lain-lain."
                  fontSize="1.1rem"
                  fontWeight="500"
                  color="#2E582C"
                   my="1"
                   variant="body2" 
                  />
                    {/* <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        color: "#2E582C",
                      }}
                    >
                      Sampah yang bisa didaur ulang artinya sampah yang bisa digunakan kembali atau setelah diubah menjadi bentuk lain. Material yang bisa didaur ulang terdiri dari sampah kaca, plastik, kertas, logam, tekstil, dan
                      lain-lain.
                    </Typography> */}
                </div>
              </div>
              <div
                style={{
                  border: "1px solid blue",
                  height: "145px",
                  widht: "630px",
                  margin: "10px",
                  borderRadius: "15px",
                  display: "flex",
                  alignCenter: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <div>
                  <Ctypo
                  textButton="Sampah yang tidak bisa didaur ulang"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  color="#2E582C"
                   my="1"
                   variant="body2" 
                  />
                  {/* <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2E582C", my: 1 }}>
                    Sampah yang tidak bisa didaur ulang
                  </Typography> */}

                  <Ctypo
                  textButton="Sampah yang tidak bisa didaur ulang artinya sampah yang tidak bisa digunakan kembali dan tidak bisa diolah menjadi bentuk lain. tisu, popok bekas, styrofoam, cermin, bola lampu, keramik rusak, sampah elektronik dan
                  lain-lain."
                  fontSize="1.1rem"
                  fontWeight="500"
                  color="#2E582C"
                  />
                    {/* <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        color: "#2E582C",
                      }}
                    >
                      Sampah yang tidak bisa didaur ulang artinya sampah yang tidak bisa digunakan kembali dan tidak bisa diolah menjadi bentuk lain. tisu, popok bekas, styrofoam, cermin, bola lampu, keramik rusak, sampah elektronik dan
                      lain-lain.
                    </Typography> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Marticle;
