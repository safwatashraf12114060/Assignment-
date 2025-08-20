import React from "react";
import Badge from "react-bootstrap/Badge";
import "./Status_Badges.css";

function StatusBadge({ status }) {
  let color = "secondary";
  if (status === "Published") color = "success";
  else if (status === "Draft") color = "warning";

  return (
    <Badge pill bg={color} className="status-badge">
      {status}
    </Badge>
  );
}

export default StatusBadge;
