import { Box } from "@mui/material";
import React from "react";
import Cardimg from "./Cardimg";
import "./cardbackground.scss"
const CardBackground = () => {
  return (
    <Box
    sx={{
        height:"50vh"
    }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: "linear-gradient(15deg, #0f4667 0%, #2a6973 150%)",
        minHeight: "100%",
        padding: "64px 24px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridColumnGap: "24px",
          gridRowGap: "24px",
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
        <a className="card"
          style={{
            listStyle: "none",
            position: "relative"
          }}
        >
          <Cardimg backgroundImage="url(./banksampah.jpg)" />

          <div
            style={{
              left: "0",
              padding: "24px",
              position: "absolute",
              top: "0"
            }}
          >
            <p
              style={{
                color: "#ffffff99",
                fontSize: " 0.9rem",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}
            >
              category
            </p>
            <h3
              style={{
                color: "#ffffff99",
                fontSize: "0.9rem",
                marginBottom: "8px",
                textTransform: " uppercase",
              }}
            >
              example
            </h3>
          </div>
        </a>
      </div>
    </Box>
    </Box>
  );
};

export default CardBackground;
