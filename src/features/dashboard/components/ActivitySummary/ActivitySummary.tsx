import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { ActivityItem } from "~/features/dashboard/components/ActivityItem/ActivityItem";

export const ActivitySummary: FC = () => {
  const activitiesFetchMock = [
    {
      id: 1,
      action: "New QR Code Scan",
      user: "Samuel Carter",
      description: "scanned a QR code",
    },
    {
      id: 2,
      action: "QR Code Scanned",
      user: "Samuel Carter",
      description: "QR code for 'Event Promo' scanned",
    },
    {
      id: 3,
      action: "Scan Status",
      description: "Success",
    },
  ];
  const activities = activitiesFetchMock.map((activity) => {
    return <ActivityItem key={activity.id} activity={activity} />;
  });
  return (
    <Box>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Activity Summary
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {activities}
      </Timeline>
    </Box>
  );
};
