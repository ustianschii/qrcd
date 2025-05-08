export interface ActivityItemProps {
  activity: {
    id: number;
    action: string;
    user?: string;
    description?: string;
  };
}
