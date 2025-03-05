import { ArrowDown } from "lucide-react";
import React from "react";

const Easy = () => {
  return (
    <div className="flex-center text-center flex-row px-4 lg:px-2 mt-18 mb-4">
      <ArrowDown className="text-muted-foreground" size={20} />
      <p className="text-muted-foreground text-sm lg:text-lg font-medium">
        {`It's easier than you think`}
      </p>
    </div>
  );
};

export default Easy;
