import React, { useState, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  RadioGroup,
  FormGroup,
  Checkbox,
  Paper,
} from "@mui/material";
import { Close as CloseIcon, School as SchoolIcon } from "@mui/icons-material";
import dayjs from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useInputValidation } from "6pp";
import { useNavigate } from "react-router-dom";
import {
  aliceBlueColor,
  darkBlueColor,
  blackBoardColor,
  captionColor,
} from "../constants/color";

// Styled components with consistent theme
const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      background: blackBoardColor,
      color: "white",
      borderRadius: 3,
      border: `1px solid ${aliceBlueColor}30`,
      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5)`,
    },
  },
  dialogTitle: {
    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)`,
    backdropFilter: "blur(20px)",
    border: `1px solid ${aliceBlueColor}30`,
    borderRadius: 2,
    mb: 3,
    p: 2,
  },
  formContainer: {
    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
    backdropFilter: "blur(15px)",
    border: `1px solid ${aliceBlueColor}20`,
    borderRadius: 2,
    p: 3,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: `${aliceBlueColor}50`,
      },
      "&:hover fieldset": {
        borderColor: `${aliceBlueColor}70`,
      },
      "&.Mui-focused fieldset": {
        borderColor: aliceBlueColor,
      },
    },
    "& .MuiInputLabel-root": {
      color: captionColor,
      "&.Mui-focused": {
        color: aliceBlueColor,
      },
    },
  },
  formControl: {
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "bold",
      "&.Mui-focused": {
        color: aliceBlueColor,
      },
    },
    "& .MuiRadio-root": {
      color: captionColor,
      "&.Mui-checked": {
        color: aliceBlueColor,
      },
    },
    "& .MuiCheckbox-root": {
      color: captionColor,
      "&.Mui-checked": {
        color: aliceBlueColor,
      },
    },
    "& .MuiFormControlLabel-label": {
      color: "white",
    },
  },
  submitButton: {
    bgcolor: aliceBlueColor,
    color: darkBlueColor,
    fontWeight: "bold",
    py: 1.5,
    borderRadius: 2,
    boxShadow: `0 4px 15px ${aliceBlueColor}40`,
    "&:hover": {
      bgcolor: "#4fd3b8",
      boxShadow: `0 6px 20px ${aliceBlueColor}60`,
      transform: "translateY(-2px)",
    },
    transition: "all 0.3s ease",
  },
  closeButton: {
    color: aliceBlueColor,
    "&:hover": {
      bgcolor: `${aliceBlueColor}20`,
    },
  },
};

// Form configuration
const FORM_CONFIG = {
  levels: ["Beginner", "Intermediate", "Advanced"],
  schoolTypes: ["CBSE", "ICSE", "State Board"],
  languages: ["Hindi", "English", "Hinglish"],
  knowledgeLevels: ["Beginner", "Intermediate", "Advanced"],
};

const NewBatch = ({ open, onClose }) => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    level: "",
    schoolType: "",
    languages: { hindi: false, english: false, hinglish: false },
    isCompetitiveExam: "",
    examName: "",
    examDate: null,
    knowledge: "",
  });

  // Input validations with required validation
  const batchName = useInputValidation("", { isRequired: true });
  const subject = useInputValidation("", { isRequired: true });
  const chapter = useInputValidation("", { isRequired: true });
  const duration = useInputValidation("", { isRequired: true });
  const other = useInputValidation("");

  // Memoized form sections for better organization
  const formSections = useMemo(
    () => [
      {
        title: "Basic Information",
        fields: [
          {
            component: "text",
            label: "Batch Name",
            validation: batchName,
            required: true,
          },
          {
            component: "text",
            label: "Subject",
            validation: subject,
            required: true,
          },
          {
            component: "text",
            label: "Chapter",
            validation: chapter,
            required: true,
          },
          {
            component: "number",
            label: "Duration (in Weeks)",
            validation: duration,
            inputProps: { min: 1 },
            required: true,
          },
        ],
      },
      {
        title: "Teaching Preferences",
        fields: [
          {
            component: "radio",
            label: "Level of Teaching",
            name: "level",
            options: FORM_CONFIG.levels,
            required: true,
          },
          {
            component: "radio",
            label: "Type of School",
            name: "schoolType",
            options: FORM_CONFIG.schoolTypes,
            required: true,
          },
          {
            component: "checkbox",
            label: "Language",
            name: "languages",
            options: FORM_CONFIG.languages,
            required: true,
          },
        ],
      },
    ],
    [batchName, subject, chapter, duration]
  );

  // Event handlers
  const handleFormChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleLanguageChange = useCallback((event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      languages: { ...prev.languages, [name]: checked },
    }));
  }, []);

  // Validation function
  const validateForm = useCallback(() => {
    // Check required fields
    if (
      !batchName.value ||
      !subject.value ||
      !chapter.value ||
      !duration.value
    ) {
      return false;
    }

    // Check required form data
    if (
      !formData.level ||
      !formData.schoolType ||
      !formData.isCompetitiveExam
    ) {
      return false;
    }

    // Check if at least one language is selected
    const hasLanguage = Object.values(formData.languages).some((lang) => lang);
    if (!hasLanguage) {
      return false;
    }

    // If competitive exam is Yes, check required fields
    if (formData.isCompetitiveExam === "Yes") {
      if (!formData.examName || !formData.examDate || !formData.knowledge) {
        return false;
      }
    }

    return true;
  }, [batchName.value, subject.value, chapter.value, duration.value, formData]);

  const handleSubmit = useCallback(() => {
    // Validate form first
    if (!validateForm()) {
      alert("Please fill in all required fields!");
      return;
    }

    // Form submission logic
    const formPayload = {
      batchName: batchName.value,
      subject: subject.value,
      chapter: chapter.value,
      duration: duration.value,
      other: other.value,
      ...formData,
    };
    console.log("Form submitted:", formPayload);

    // Close dialog first
    onClose();

    // Navigate to in-progress page
    navigate("/in-progress");
  }, [
    batchName,
    subject,
    chapter,
    duration,
    other,
    formData,
    onClose,
    navigate,
    validateForm,
  ]);

  const resetForm = useCallback(() => {
    setFormData({
      level: "",
      schoolType: "",
      languages: { hindi: false, english: false, hinglish: false },
      isCompetitiveExam: "",
      examName: "",
      examDate: null,
      knowledge: "",
    });
    batchName.clear();
    subject.clear();
    chapter.clear();
    duration.clear();
    other.clear();
  }, [batchName, subject, chapter, duration, other]);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  // Render form field based on type
  const renderFormField = useCallback(
    (field, index) => {
      switch (field.component) {
        case "text":
        case "number":
          return (
            <TextField
              key={index}
              label={field.label}
              type={field.component === "number" ? "number" : "text"}
              variant="outlined"
              fullWidth
              required={field.required}
              value={field.validation.value}
              onChange={field.validation.changeHandler}
              error={field.required && field.validation.value === ""}
              helperText={
                field.required && field.validation.value === ""
                  ? "This field is required"
                  : ""
              }
              inputProps={field.inputProps}
              sx={styles.textField}
            />
          );

        case "radio":
          return (
            <FormControl
              key={index}
              component="fieldset"
              fullWidth
              required={field.required}
              error={field.required && !formData[field.name]}
              sx={styles.formControl}
            >
              <FormLabel component="legend">
                {field.label} {field.required && "*"}
              </FormLabel>
              <RadioGroup
                row
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => handleFormChange(field.name, e.target.value)}
              >
                {field.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
              {field.required && !formData[field.name] && (
                <Typography variant="caption" sx={{ color: "#f44336", mt: 1 }}>
                  Please select an option
                </Typography>
              )}
            </FormControl>
          );

        case "checkbox":
          const hasSelectedLanguage = Object.values(formData.languages).some(
            (lang) => lang
          );
          return (
            <FormControl
              key={index}
              component="fieldset"
              required={field.required}
              error={field.required && !hasSelectedLanguage}
              sx={styles.formControl}
            >
              <FormLabel component="legend">
                {field.label} {field.required && "*"}
              </FormLabel>
              <FormGroup row>
                {field.options.map((option) => {
                  const fieldName = option.toLowerCase();
                  return (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          name={fieldName}
                          checked={formData.languages[fieldName] || false}
                          onChange={handleLanguageChange}
                        />
                      }
                      label={option}
                    />
                  );
                })}
              </FormGroup>
              {field.required && !hasSelectedLanguage && (
                <Typography variant="caption" sx={{ color: "#f44336", mt: 1 }}>
                  Please select at least one language
                </Typography>
              )}
            </FormControl>
          );

        default:
          return null;
      }
    },
    [formData, handleFormChange, handleLanguageChange]
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={styles.dialog}
    >
      <DialogTitle>
        <Paper elevation={0} sx={styles.dialogTitle}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <SchoolIcon sx={{ color: aliceBlueColor }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                Create Your Personalized Batch
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Paper>
      </DialogTitle>

      <DialogContent>
        <Paper elevation={0} sx={styles.formContainer}>
          <Stack spacing={4}>
            {/* Render form sections */}
            {formSections.map((section, sectionIndex) => (
              <Box key={sectionIndex}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={2}
                  sx={{ color: aliceBlueColor }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={3}>
                  {section.fields.map((field, fieldIndex) =>
                    renderFormField(field, fieldIndex)
                  )}
                </Stack>
              </Box>
            ))}

            {/* Competitive Exam Section */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={2}
                  sx={{ color: aliceBlueColor }}
                >
                  Competitive Exam Preparation
                </Typography>
                <Stack spacing={3}>
                  <FormControl component="fieldset" sx={styles.formControl}>
                    <FormLabel component="legend">
                      Preparing For Any Competitive Exam? *
                    </FormLabel>
                    <RadioGroup
                      row
                      value={formData.isCompetitiveExam}
                      onChange={(e) =>
                        handleFormChange("isCompetitiveExam", e.target.value)
                      }
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {!formData.isCompetitiveExam && (
                      <Typography
                        variant="caption"
                        sx={{ color: "#f44336", mt: 1 }}
                      >
                        Please select an option
                      </Typography>
                    )}
                  </FormControl>

                  {formData.isCompetitiveExam === "Yes" && (
                    <Stack spacing={3}>
                      <TextField
                        label="Competitive Exam Name"
                        value={formData.examName}
                        onChange={(e) =>
                          handleFormChange("examName", e.target.value)
                        }
                        fullWidth
                        required
                        error={!formData.examName}
                        helperText={
                          !formData.examName ? "This field is required" : ""
                        }
                        sx={styles.textField}
                      />
                      <DatePicker
                        label="Exam Date"
                        value={formData.examDate}
                        onChange={(newValue) =>
                          handleFormChange("examDate", newValue)
                        }
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            required: true,
                            error: !formData.examDate,
                            helperText: !formData.examDate
                              ? "This field is required"
                              : "",
                            sx: styles.textField,
                          },
                        }}
                        minDate={dayjs()}
                      />
                      <FormControl component="fieldset" sx={styles.formControl}>
                        <FormLabel component="legend">
                          Prior Knowledge Level *
                        </FormLabel>
                        <RadioGroup
                          row
                          value={formData.knowledge}
                          onChange={(e) =>
                            handleFormChange("knowledge", e.target.value)
                          }
                        >
                          {FORM_CONFIG.knowledgeLevels.map((level) => (
                            <FormControlLabel
                              key={level}
                              value={level}
                              control={<Radio />}
                              label={level}
                            />
                          ))}
                        </RadioGroup>
                        {!formData.knowledge && (
                          <Typography
                            variant="caption"
                            sx={{ color: "#f44336", mt: 1 }}
                          >
                            Please select a knowledge level
                          </Typography>
                        )}
                      </FormControl>
                    </Stack>
                  )}
                </Stack>
              </Box>
            </LocalizationProvider>

            {/* Additional Details */}
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
                sx={{ color: aliceBlueColor }}
              >
                Additional Information
              </Typography>
              <TextField
                label="Other Details (Optional)"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={other.value}
                onChange={other.changeHandler}
                sx={styles.textField}
              />
            </Box>

            {/* Submit Button */}
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              startIcon={<SchoolIcon />}
              fullWidth
              sx={styles.submitButton}
            >
              Create Batch
            </Button>
          </Stack>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default NewBatch;
