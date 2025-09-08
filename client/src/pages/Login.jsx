import React, { lazy, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
  Box,
  Divider,
  Fade,
} from "@mui/material";
import {
  CameraAlt as CameraAltIcon,
  Person as PersonIcon,
  Lock as LockIcon,
  AccountCircle as AccountCircleIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";
import {
  aliceBlueColor,
  blackBoardColor,
  brownColor,
  captionColor,
  mattBlack,
} from "../components/constants/color";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const about = useInputValidation("");
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: blackBoardColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container component="main" maxWidth="sm">
        <Fade in timeout={800}>
          <Paper
            elevation={24}
            sx={{
              p: { xs: 3, sm: 7 },
              borderRadius: 4,
              background: mattBlack,
              backdropFilter: "blur(20px)",
              border: `1px solid ${brownColor}`,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              color: "white",
            }}
          >
            {isLogin ? (
              <Stack spacing={3} alignItems="center">
                <Box textAlign="center" mb={2}>
                  <AccountCircleIcon
                    sx={{ fontSize: 60, color: aliceBlueColor, mb: 1 }}
                  />
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight="bold"
                    color={aliceBlueColor}
                  >
                    Welcome Back
                  </Typography>
                  <Typography variant="caption" color={captionColor} mt={1}>
                    Sign in to your account
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleLogin}
                  sx={{ width: "100%" }}
                >
                  <Stack spacing={3}>
                    <TextField
                      required
                      fullWidth
                      label="Username"
                      variant="outlined"
                      value={username.value}
                      onChange={username.changeHandler}
                      InputProps={{
                        startAdornment: (
                          <PersonIcon sx={{ color: aliceBlueColor, mr: 1 }} />
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: { captionColor },
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: { aliceBlueColor },
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: { aliceBlueColor },
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "#ff6b6b",
                        },
                      }}
                    />

                    <TextField
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password.value}
                      onChange={password.changeHandler}
                      InputProps={{
                        startAdornment: (
                          <LockIcon sx={{ color: aliceBlueColor, mr: 1 }} />
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: aliceBlueColor,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: aliceBlueColor,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: aliceBlueColor,
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(45deg, #1a1a2e 30%, #16213e 90%)",
                        border: "1px solid #64ffda",
                        color: aliceBlueColor,
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #64ffda 30%, #4fd1c7 90%)",
                          color: "#1a1a2e",
                          transform: "translateY(-1px)",
                          boxShadow: "0 8px 25px rgba(100, 255, 218, 0.4)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Sign In
                    </Button>

                    <Divider sx={{ my: 2 }}>
                      <Typography variant="body2" color={captionColor}>
                        OR
                      </Typography>
                    </Divider>

                    <Button
                      variant="text"
                      onClick={toggleLogin}
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "1rem",
                        color: aliceBlueColor,
                        "&:hover": {
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                        },
                      }}
                    >
                      Don't have an account? Sign Up
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            ) : (
              <Stack spacing={3} alignItems="center">
                <Box textAlign="center" mb={1}>
                  <Typography
                    component="h1"
                    variant="h4"
                    fontWeight="bold"
                    color={aliceBlueColor}
                  >
                    Create Account
                  </Typography>
                  <Typography variant="body2" color={captionColor} mt={1}>
                    Join us today and get started
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleSignUp}
                  sx={{ width: "100%" }}
                >
                  <Stack spacing={3} alignItems="center">
                    <Box position="relative">
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          border: "4px solid",
                          borderColor: aliceBlueColor,
                          boxShadow: "0 8px 20px rgba(100, 255, 218, 0.3)",
                        }}
                        src={avatar.preview}
                      />
                      <IconButton
                        component="label"
                        sx={{
                          position: "absolute",
                          bottom: -5,
                          right: -5,
                          backgroundColor: aliceBlueColor,
                          color: "#1a1a2e",
                          width: 40,
                          height: 40,
                          "&:hover": {
                            backgroundColor: "#4fd1c7",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 12px rgba(100, 255, 218, 0.4)",
                        }}
                      >
                        <CameraAltIcon fontSize="small" />
                        <VisuallyHiddenInput
                          type="file"
                          onChange={avatar.changeHandler}
                        />
                      </IconButton>
                    </Box>

                    {avatar.error && (
                      <Typography
                        variant="caption"
                        color="error"
                        textAlign="center"
                      >
                        {avatar.error}
                      </Typography>
                    )}

                    <Stack spacing={2.5} width="100%">
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        value={name.value}
                        onChange={name.changeHandler}
                        InputProps={{
                          startAdornment: (
                            <PersonIcon sx={{ color: aliceBlueColor, mr: 1 }} />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: aliceBlueColor,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: aliceBlueColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                            "&.Mui-focused": {
                              color: aliceBlueColor,
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        label="Username"
                        variant="outlined"
                        value={username.value}
                        onChange={username.changeHandler}
                        error={!!username.error}
                        helperText={username.error}
                        InputProps={{
                          startAdornment: (
                            <AccountCircleIcon
                              sx={{ color: aliceBlueColor, mr: 1 }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: aliceBlueColor,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: aliceBlueColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                            "&.Mui-focused": {
                              color: aliceBlueColor,
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                          "& .MuiFormHelperText-root": {
                            color: "#ff6b6b",
                          },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        label="About Yourself"
                        variant="outlined"
                        multiline
                        rows={2}
                        value={about.value}
                        onChange={about.changeHandler}
                        InputProps={{
                          startAdornment: (
                            <InfoIcon
                              sx={{ color: aliceBlueColor, mr: 1, mt: 1 }}
                            />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: aliceBlueColor,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: aliceBlueColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                            "&.Mui-focused": {
                              color: aliceBlueColor,
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                        }}
                      />

                      <TextField
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password.value}
                        onChange={password.changeHandler}
                        InputProps={{
                          startAdornment: (
                            <LockIcon sx={{ color: aliceBlueColor, mr: 1 }} />
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: aliceBlueColor,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: aliceBlueColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                            "&.Mui-focused": {
                              color: aliceBlueColor,
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                        }}
                      />
                    </Stack>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        mt: 2,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(45deg, #1a1a2e 30%, #16213e 90%)",
                        border: "1px solid #64ffda",
                        color: aliceBlueColor,
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #64ffda 30%, #4fd1c7 90%)",
                          color: "#1a1a2e",
                          transform: "translateY(-1px)",
                          boxShadow: "0 8px 25px rgba(100, 255, 218, 0.4)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Create Account
                    </Button>

                    <Divider sx={{ my: 2, width: "100%" }}>
                      <Typography variant="body2" color={captionColor}>
                        OR
                      </Typography>
                    </Divider>

                    <Button
                      variant="text"
                      onClick={toggleLogin}
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "1rem",
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "rgba(102, 126, 234, 0.04)",
                        },
                      }}
                    >
                      Already have an account? Sign In
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            )}
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default Login;
