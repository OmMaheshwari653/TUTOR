import React, { memo } from "react";
import { Box, Paper } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import MessageInput from "./MessageInput";
import { getScrollbarStyles } from "../../utils/batch/uiUtils";

/**
 * Complete chat section component
 */
const ChatSection = memo(
  ({
    chatMessages,
    newMessage,
    setNewMessage,
    onSendMessage,
    isDarkMode,
    isMobile,
    themeStyles,
    onClose,
  }) => {
    return (
      <Box
        sx={{
          height: { xs: "calc(100vh - 200px)", md: "calc(100vh - 300px)" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Chat Header */}
        <ChatHeader
          isDarkMode={isDarkMode}
          isMobile={isMobile}
          themeStyles={themeStyles}
          onClose={onClose}
        />

        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: { xs: 1, md: 2 },
            ...getScrollbarStyles(isDarkMode),
          }}
        >
          {chatMessages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isDarkMode={isDarkMode}
              isMobile={isMobile}
              themeStyles={themeStyles}
            />
          ))}
        </Box>

        {/* Message Input */}
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSendMessage={onSendMessage}
          isDarkMode={isDarkMode}
          isMobile={isMobile}
          themeStyles={themeStyles}
        />
      </Box>
    );
  }
);

ChatSection.displayName = "ChatSection";

export default ChatSection;
