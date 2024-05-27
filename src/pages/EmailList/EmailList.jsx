import React from "react";
import { EmailControlStrip, EmailFilter } from "../../components";

const EmailList = () => {
  return (
    <div className="">
      <EmailControlStrip />
      <hr className="w-[98%] mx-auto" />
      <EmailFilter />
      <hr className="w-[98%] mx-auto -my-[8px]" />
    </div>
  );
};

export default EmailList;
