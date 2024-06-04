import Image from "next/image";
import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import { ThemeContext } from "../../contexts/theme-context";
import styles from "../../styles/experience.module.css";
import { Modal, Typography, Box } from "@mui/material";

function ExperienceCard({ id, company, jobtitle, startYear, endYear, desc }) {
  const { theme } = useContext(ThemeContext);
  const style = {
    position: "absolute",
    color: theme.type === "light" ? "black" : "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: theme.type === "light" ? "lightgray" : "#1E2732",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  return (
    <Fade bottom>
      <div
        onClick={() => setOpen(true)}
        key={id}
        className={`${styles.experienceCard}`}
        style={{
          backgroundColor: theme.type === "light" ? "lightgray" : "#1E2732",
        }}
      >
        <div
          className={styles.expcardImg}
          style={{ backgroundColor: theme.primary }}
        >
          <Image
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className={styles.experienceDetails}>
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary }}>{company}</h5>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {jobtitle}
            <br />
            {company}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              {desc.map((item, index) => (
                <>
                  {" "}
                  <li key={item + index}>- {item}</li>
                  <br />
                </>
              ))}
            </ul>
          </Typography>
        </Box>
      </Modal>
    </Fade>
  );
}

export default ExperienceCard;
