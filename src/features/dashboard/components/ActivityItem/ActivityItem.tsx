import { FC } from "react";
import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";

import { ActivityItemProps } from "./types/types";

export const ActivityItem: FC<ActivityItemProps> = ({ activity }) => {
  const { action, user, description } = activity;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{action}</Typography>
        <Typography fontSize="0.9rem">
          {user} {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
