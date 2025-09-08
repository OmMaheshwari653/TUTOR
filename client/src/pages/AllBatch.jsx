import React, { useMemo, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  LinearProgress,
  Stack,
  Paper,
} from "@mui/material";
import {
  Schedule as ScheduleIcon,
  Star as StarIcon,
  PlayArrow as PlayIcon,
  SmartToy as AIIcon,
  MenuBook as ChapterIcon,
  TrendingUp as ProgressIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import { sampleBatches } from "../components/constants/sampleData";
import {
  aliceBlueColor,
  darkBlueColor,
  blackBoardColor,
  captionColor,
} from "../components/constants/color";

const AllBatch = () => {
  const navigate = useNavigate();

  // Styles matching Profile theme
  const styles = {
    container: {
      minHeight: "100%",
      background: blackBoardColor,
      py: 4,
    },
    headerCard: {
      p: 4,
      mb: 4,
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)`,
      backdropFilter: "blur(20px)",
      border: `1px solid ${aliceBlueColor}30`,
      borderRadius: 3,
      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${aliceBlueColor}20`,
    },
    batchCard: {
      height: "100%",
      position: "relative",
      overflow: "hidden",
      borderRadius: 3,
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: `0 12px 28px rgba(0, 0, 0, 0.4)`,
      },
    },
    cardBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.9,
    },
    cardOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)`,
    },
    cardContent: {
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      p: 3,
      color: "white",
    },
    title: {
      color: "white",
      fontWeight: "bold",
      mb: 2,
      textShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
    },
    subtitle: {
      color: "#e0e0e0",
      mb: 2,
      lineHeight: 1.5,
      textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)`,
    },
    chip: {
      bgcolor: `${aliceBlueColor}20`,
      color: aliceBlueColor,
      fontWeight: "bold",
      backdropFilter: "blur(10px)",
      border: `1px solid ${aliceBlueColor}40`,
    },
    statusChip: (isCompleted) => ({
      bgcolor: isCompleted
        ? "rgba(76, 175, 80, 0.8)"
        : "rgba(255, 152, 0, 0.8)",
      color: "white",
      fontWeight: "bold",
      backdropFilter: "blur(10px)",
    }),
    button: {
      bgcolor: aliceBlueColor,
      color: darkBlueColor,
      fontWeight: "bold",
      borderRadius: 2,
      boxShadow: `0 4px 15px ${aliceBlueColor}40`,
      "&:hover": {
        bgcolor: "#4fd3b8",
        boxShadow: `0 6px 20px ${aliceBlueColor}60`,
        transform: "translateY(-1px)",
      },
      transition: "all 0.3s ease",
    },
    sectionTitle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      mb: 2,
      textShadow: `0 0 10px ${aliceBlueColor}50`,
    },
    statsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: 4,
      mb: 4,
    },
    statItem: {
      textAlign: "center",
      color: "white",
    },
  };

  // Memoized stats calculation
  const batchStats = useMemo(() => {
    const totalBatches = sampleBatches.length;
    const completedBatches = sampleBatches.filter(
      (batch) => batch.isCompleted
    ).length;
    const totalProgress = sampleBatches.reduce(
      (sum, batch) => sum + parseInt(batch.progress),
      0
    );
    const avgProgress = Math.round(totalProgress / totalBatches);
    const avgRating = (
      sampleBatches.reduce((sum, batch) => sum + batch.rating, 0) / totalBatches
    ).toFixed(1);

    return { totalBatches, completedBatches, avgProgress, avgRating };
  }, []);

  // Navigate to batch details
  const handleBatchClick = useCallback(
    (batchId) => {
      navigate("/in-progress", { state: { batchId } });
    },
    [navigate]
  );

  // Batch card component
  const BatchCard = ({ batch }) => (
    <Card
      elevation={6}
      sx={styles.batchCard}
      onClick={() => handleBatchClick(batch.id)}
    >
      {/* Background Gradient */}
      <Box sx={{ ...styles.cardBackground, background: batch.bgGradient }} />

      {/* Dark Overlay */}
      <Box sx={styles.cardOverlay} />

      {/* Content */}
      <CardContent sx={styles.cardContent}>
        {/* Header with Status */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Chip label={batch.category} size="small" sx={styles.chip} />
          <Chip
            label={batch.isCompleted ? "Completed" : "Not Completed"}
            size="small"
            sx={styles.statusChip(batch.isCompleted)}
          />
        </Box>

        {/* Batch Name */}
        <Typography variant="h5" sx={styles.title}>
          {batch.name}
        </Typography>

        {/* Subject & Level */}
        <Typography variant="body1" sx={styles.subtitle}>
          {batch.subject} • {batch.level} Level
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            ...styles.subtitle,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 2,
          }}
        >
          {batch.description}
        </Typography>

        {/* Progress Bar */}
        <Box mb={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography
              variant="caption"
              sx={{ color: "#e0e0e0", fontWeight: "bold" }}
            >
              Progress
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: aliceBlueColor, fontWeight: "bold" }}
            >
              {batch.progress}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={parseInt(batch.progress)}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: "rgba(255, 255, 255, 0.2)",
              "& .MuiLinearProgress-bar": {
                bgcolor: aliceBlueColor,
                borderRadius: 3,
              },
            }}
          />
        </Box>

        {/* Stats Row */}
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ChapterIcon sx={{ fontSize: 16, color: aliceBlueColor }} />
            <Typography variant="caption" sx={{ color: "#e0e0e0" }}>
              {batch.currentChapter}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ScheduleIcon sx={{ fontSize: 16, color: aliceBlueColor }} />
            <Typography variant="caption" sx={{ color: "#e0e0e0" }}>
              {batch.duration}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <StarIcon sx={{ fontSize: 16, color: "#ffd700" }} />
            <Typography variant="caption" sx={{ color: "#e0e0e0" }}>
              {batch.rating}
            </Typography>
          </Box>
        </Stack>

        {/* AI Instructor */}
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <AIIcon sx={{ fontSize: 16, color: aliceBlueColor }} />
          <Typography variant="caption" sx={{ color: "#e0e0e0" }}>
            {batch.instructor}
          </Typography>
        </Box>

        {/* Next Session */}
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <ScheduleIcon sx={{ fontSize: 16, color: "#ffd700" }} />
          <Typography
            variant="caption"
            sx={{ color: "#ffd700", fontWeight: "bold" }}
          >
            {batch.nextSession}
          </Typography>
        </Box>

        {/* Action Button */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<PlayIcon />}
          sx={styles.button}
        >
          {batch.isCompleted ? "Review Course" : "Continue Learning"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Paper elevation={6} sx={styles.headerCard}>
          <Typography variant="h3" sx={styles.sectionTitle}>
            My Learning Dashboard
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: captionColor,
              textAlign: "center",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Track your personalized learning journey with AI-powered tutoring
          </Typography>

          {/* Stats Section */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            sx={styles.statsContainer}
          >
            <Box sx={styles.statItem}>
              <Typography
                variant="h3"
                sx={{ color: aliceBlueColor, fontWeight: "bold" }}
              >
                {batchStats.totalBatches}
              </Typography>
              <Typography variant="body2" sx={{ color: captionColor }}>
                Total Courses
              </Typography>
            </Box>
            <Box sx={styles.statItem}>
              <Typography
                variant="h3"
                sx={{ color: aliceBlueColor, fontWeight: "bold" }}
              >
                {batchStats.completedBatches}
              </Typography>
              <Typography variant="body2" sx={{ color: captionColor }}>
                Completed Courses
              </Typography>
            </Box>
            <Box sx={styles.statItem}>
              <Typography
                variant="h3"
                sx={{ color: aliceBlueColor, fontWeight: "bold" }}
              >
                {batchStats.avgProgress}%
              </Typography>
              <Typography variant="body2" sx={{ color: captionColor }}>
                Average Progress
              </Typography>
            </Box>
            <Box sx={styles.statItem}>
              <Typography
                variant="h3"
                sx={{ color: aliceBlueColor, fontWeight: "bold" }}
              >
                {batchStats.avgRating}
              </Typography>
              <Typography variant="body2" sx={{ color: captionColor }}>
                Learning Rating
              </Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Batches Grid */}
        <Grid container spacing={4}>
          {sampleBatches.map((batch) => (
            <Grid size={{ xs: 12, md: 6 }} key={batch.id}>
              <BatchCard batch={batch} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AppLayout()(AllBatch);
