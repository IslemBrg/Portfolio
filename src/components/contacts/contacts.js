import { CircularProgress, TextField } from "@mui/material";
import Image from "next/image";
import React, { useContext, useRef, useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineSend } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { FiAtSign, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ThemeContext } from "../../contexts/theme-context";
import { contactsData } from "../../data/contacts-data";
import { socialsData } from "../../data/socials-data";
import styles from "../../styles/contacts.module.css";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

function Contacts() {
  const form = useRef();

  const { theme, isDark, colors } = useContext(ThemeContext);

  const textFieldStyles = {
    "& .MuiOutlinedInput-input": {
      color: isDark ? "lightgray" : "gray", // Adjust as needed
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "25px", // Adjust as needed
    },
    "& .MuiFormLabel-root": {
      // For floating label
      color: isDark ? "lightgray" : "gray",
    },
    "& .MuiInputLabel-root": {
      // For inside label
      color: isDark ? "lightgray" : "gray",
    },
    "& .MuiOutlinedInput-root": {
      borderColor: isDark ? "lightgray" : "gray", // Adjust as needed
      "& fieldset": {
        borderColor: isDark ? "lightgray" : "gray", // Adjust as needed
      },
      "&:hover fieldset": {
        borderColor: isDark ? "lightblue" : "blue", // Adjust as needed
      },
      "&.Mui-focused fieldset": {
        borderColor: isDark ? "lightblue" : "blue", // Adjust as needed
      },
    },
    "& label.Mui-focused": {
      color: isDark ? "lightblue" : "blue", // Adjust as needed
    },
  };

  const [toastId, setToastId] = useState(null);
  const [state, handleSubmit] = useForm("mdoqkeyb");
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  useEffect(() => {
    setErrors({
      name: null,
      email: null,
      message: null,
    });
    if (state.submitting) {
      toast.dismiss();
      setToastId(toast.loading("Sending message..."));
    }
  }, [state.submitting]);

  useEffect(() => {
    if (state.errors) {
      state.errors.getAllFieldErrors().forEach((error) => {
        setErrors((prev) => ({
          ...prev,
          [error[0]]: error?.[1]?.[0]?.message,
        }));
      });
      toast.update(toastId, {
        render:
          state.errors.getAllFieldErrors().length > 0
            ? "Something's wrong"
            : "please fill in the form",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.succeeded) {
      toast.update(toastId, {
        render: "Message sent successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  }, [state.succeeded]);

  return (
    <div
      className={styles.contacts}
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className={styles.contactsContainer}>
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className={styles.contactsBody}>
          <div className={styles.contactsForm}>
            <form
              ref={form}
              onSubmit={handleSubmit}
              onChange={() => {
                setErrors({ name: null, email: null, message: null });
              }}
            >
              <div className={styles.inputContainer}>
                <TextField
                  id="name"
                  type="text"
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={textFieldStyles}
                  error={errors.name}
                  helperText={errors.name}
                />
              </div>
              <div className={styles.inputContainer}>
                <br />
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={textFieldStyles}
                  error={errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className={styles.inputContainer}>
                <br />
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  sx={textFieldStyles}
                  error={errors.message}
                  helperText={errors.message}
                />
                <br />
                <br />
              </div>

              <div className={styles.submitBtn}>
                <button
                  type="submit"
                  className="bg-[#1D9BF0] 
                                    hover:bg-[#8B98A5] text-[#15202B]
                                     transition delay-200 "
                >
                  {state.submitting ? (
                    <CircularProgress size={24} />
                  ) : (
                    <>
                      <p style={{ color:  theme.type === "light" ? "white" : "black" }}>
                        {!state.succeeded ? "Send" : "Sent"}
                      </p>
                      <div className={styles.submitIcon}>
                        <AiOutlineSend
                          className={styles.sendIcon}
                          style={{
                            animation: !state.succeeded
                              ? "initial"
                              : "fly 0.8s linear both",
                            position: state.succeeded ? "absolute" : "initial",
                            display: state.succeeded ? "none" : "inline-flex",
                            color:  theme.type === "light" ? "white" : "black",
                          }}
                        />
                        <AiOutlineCheckCircle
                          className={styles.successIcon}
                          style={{
                            display: !state.succeeded ? "none" : "inline-flex",
                            opacity: !state.succeeded ? "0" : "1",
                            color: "black",
                          }}
                        />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className={styles.contactsDetails}>
            <a
              href={`mailto:${contactsData.email}`}
              className={styles.personalDetails}
            >
              <div
                className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                style={{
                  backgroundColor: isDark ? colors.primary : "white",
                  border: "1px solid",
                  borderColor: colors.primary,
                  color: isDark ? "black" : colors.primary,
                }}
              >
                <FiAtSign />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a
              href={`tel:${contactsData.phone}`}
              className={styles.personalDetails}
            >
              <div
                className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                style={{
                  backgroundColor: isDark ? colors.primary : "white",
                  border: "1px solid",
                  borderColor: colors.primary,
                  color: isDark ? "black" : colors.primary,
                }}
              >
                <FiPhone />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <div className={styles.personalDetails}>
              <div
                className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-[#8B98A5]
                              hover:bg-[#1D9BF0] hover:scale-[1.1]
                               shrink delay-200"
                style={{
                  backgroundColor: isDark ? colors.primary : "white",
                  border: "1px solid",
                  borderColor: colors.primary,
                  color: isDark ? "black" : colors.primary,
                }}
              >
                <HiOutlineLocationMarker />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className={styles.socialmediaIcons}>
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] 
                                    rounded-[50%] flex items-center 
                                    justify-center text-xl transition
                                     ease-in-out text-[#15202B] bg-[#8B98A5]
                                      hover:bg-[#1D9BF0]"
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    className={styles.landingSocial}
                    style={{
                      color: theme.primary,
                      width: "45px",
                      height: "45px",
                    }}
                    aria-label="GitHub"
                  />
                </a>
              )}
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedinIn
                    aria-label="LinkedIn"
                    className={styles.landingSocial}
                    style={{
                      color: theme.primary,
                      width: "45px",
                      height: "45px",
                    }}
                  />
                </a>
              )}

              {socialsData.medium && (
                <a
                  href={socialsData.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                >
                  <FaMediumM aria-label="Medium" />
                </a>
              )}

              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                >
                  <FaStackOverflow aria-label="Stack Overflow" />
                </a>
              )}
              {socialsData.facebook && (
                <a
                  href={socialsData.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook
                    aria-label="facebook"
                    className={styles.landingSocial}
                    style={{
                      color: theme.primary,
                      width: "45px",
                      height: "45px",
                    }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={theme.contactsimg}
        alt="contacts"
        className={styles.contactsImg}
      />
    </div>
  );
}

export default Contacts;
