import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Grid,
  Tab,
  Tabs,
  Badge,
  Typography,
  Button,
} from "@mui/material";
import { MenuBook as NotesIcon, Chat as ChatIcon } from "@mui/icons-material";
import AppLayout from "../components/layouts/AppLayout";
import {
  sampleBatches,
  sampleBatchNotes,
  sampleChatMessages,
} from "../components/constants/sampleData";

// Custom hooks
import { useTheme } from "../hooks/useTheme";
import { useChat } from "../hooks/useChat";
import { useResponsive } from "../hooks/useResponsive";

// Components
import BatchHeader from "../components/batch/BatchHeader";
import NotesSection from "../components/batch/NotesSection";
import ChatSection from "../components/batch/ChatSection";

// Utils
import { getBatchById, getBatchNotesById } from "../utils/batch/batchUtils";

const Batch = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();

  // Custom hooks
  const { isDarkMode, themeStyles, toggleTheme } = useTheme();
  const { isMobile, isTablet } = useResponsive();

  // State
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  // Get batch data with memoization
  const batchData = useMemo(() => {
    return getBatchById(sampleBatches, batchId);
  }, [batchId]);

  const batchNotes = useMemo(() => {
    return getBatchNotesById(sampleBatchNotes, batchId);
  }, [batchId]);

  // Initialize chat with sample messages
  const initialMessages = useMemo(() => {
    return sampleChatMessages[batchId] || [];
  }, [batchId]);

  const {
    chatMessages,
    newMessage,
    setNewMessage,
    setChatMessages,
    sendMessage,
    sendExplanation,
    sendDoubtMessage,
  } = useChat(batchId, initialMessages);

  // Initialize chat messages from sample data
  useEffect(() => {
    if (batchId && sampleChatMessages[batchId]) {
      setChatMessages(sampleChatMessages[batchId]);
    }
  }, [batchId, setChatMessages]);

  // Event handlers with useCallback for performance
  const handleBack = useCallback(() => {
    navigate("/batch");
  }, [navigate]);

  const handleTabChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);

  const handleSectionExpand = useCallback(
    (sectionId) => {
      setExpandedSection(expandedSection === sectionId ? null : sectionId);
    },
    [expandedSection]
  );

  const handleAskDoubt = useCallback(
    (sectionId, sectionTitle) => {
      setActiveTab(1);
      sendDoubtMessage(sectionTitle);
      if (isMobile) {
        // Mobile specific logic can be added here
      }
    },
    [setActiveTab, sendDoubtMessage, isMobile]
  );

  const handleExplainSection = useCallback(
    (sectionId, sectionTitle) => {
      setActiveTab(1);
      sendExplanation(sectionTitle);
      if (isMobile) {
        // Mobile specific logic can be added here
      }
    },
    [setActiveTab, sendExplanation, isMobile]
  );

  const handleOpenChat = useCallback(() => {
    setActiveTab(1);
  }, []);

  const handleCloseChat = useCallback(() => {
    setActiveTab(0);
  }, []);

  // Error handling for missing data
  if (!batchData || !batchNotes) {
    return (
      <Box sx={themeStyles.container}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h4" sx={themeStyles.primaryText}>
            Batch not found
          </Typography>
          <Button onClick={handleBack} sx={{ mt: 2 }}>
            Go Back
          </Button>
        </Container>
      </Box>
    );
  }

  // Tab panel component for mobile
  const TabPanel = ({ children, value, index }) => (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{
        height:
          value === index
            ? { xs: "calc(100vh - 200px)", md: "calc(100vh - 250px)" }
            : 0,
        overflow: value === index ? "visible" : "hidden",
        display: value === index ? "block" : "none",
      }}
    >
      {value === index && children}
    </Box>
  );

  return (
    <Box sx={themeStyles.container}>
      <Container maxWidth="xl" sx={{ py: { xs: 1, md: 2 } }}>
        {/* Header */}
        <BatchHeader
          batchData={batchData}
          batchNotes={batchNotes}
          isDarkMode={isDarkMode}
          isMobile={isMobile}
          themeStyles={themeStyles}
          chatMessagesCount={chatMessages.length}
          onBack={handleBack}
          onToggleTheme={toggleTheme}
          onOpenChat={handleOpenChat}
        />

        {/* Main Content */}
        {isMobile ? (
          // Mobile: Tab-based layout
          <Paper elevation={6} sx={themeStyles.contentCard}>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  isDarkMode ? "rgba(100, 255, 218, 0.2)" : "rgba(0, 0, 0, 0.1)"
                }`,
              }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={themeStyles.tabsStyle}
                variant="fullWidth"
              >
                <Tab
                  icon={<NotesIcon />}
                  label="Study Notes"
                  sx={{ py: 2, fontSize: "0.9rem" }}
                />
                <Tab
                  icon={
                    <Badge badgeContent={chatMessages.length} color="primary">
                      <ChatIcon />
                    </Badge>
                  }
                  label="AI Chat"
                  sx={{ py: 2, fontSize: "0.9rem" }}
                />
              </Tabs>
            </Box>

            <TabPanel value={activeTab} index={0}>
              <Box
                sx={{ height: "100%", overflowY: "auto", p: { xs: 1, md: 2 } }}
              >
                <NotesSection
                  batchData={batchData}
                  batchNotes={batchNotes}
                  isDarkMode={isDarkMode}
                  isMobile={isMobile}
                  themeStyles={themeStyles}
                  expandedSection={expandedSection}
                  onToggleExpand={handleSectionExpand}
                  onExplainSection={handleExplainSection}
                  onAskDoubt={handleAskDoubt}
                />
              </Box>
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <ChatSection
                chatMessages={chatMessages}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                onSendMessage={sendMessage}
                isDarkMode={isDarkMode}
                isMobile={isMobile}
                themeStyles={themeStyles}
                onClose={handleCloseChat}
              />
            </TabPanel>
          </Paper>
        ) : (
          // Desktop: Side by side layout
          <Grid container spacing={3}>
            {/* Left Panel - Notes */}
            <Grid size={{ xs: 12, lg: isTablet ? 12 : 8 }}>
              <Paper elevation={6} sx={themeStyles.contentCard}>
                <NotesSection
                  batchData={batchData}
                  batchNotes={batchNotes}
                  isDarkMode={isDarkMode}
                  isMobile={isMobile}
                  themeStyles={themeStyles}
                  expandedSection={expandedSection}
                  onToggleExpand={handleSectionExpand}
                  onExplainSection={handleExplainSection}
                  onAskDoubt={handleAskDoubt}
                />
              </Paper>
            </Grid>

            {/* Right Panel - Chat (Desktop only) */}
            {!isTablet && (
              <Grid size={{ lg: 4 }}>
                <Paper
                  elevation={6}
                  sx={{
                    ...themeStyles.contentCard,
                    position: "sticky",
                    top: "100px",
                    height: "calc(100vh - 120px)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ChatSection
                    chatMessages={chatMessages}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    onSendMessage={sendMessage}
                    isDarkMode={isDarkMode}
                    isMobile={false}
                    themeStyles={themeStyles}
                  />
                </Paper>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default AppLayout()(Batch);
