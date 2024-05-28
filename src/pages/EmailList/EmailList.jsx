import React from "react";
import { EmailCard, EmailControlStrip, EmailFilter } from "../../components";
import { emailList } from "../../data/emailList";

const EmailList = () => {
  const lowerLimit = 1;
  const upperLimit = 50;
  const totalEmails = 2619;
  return (
    <div className="">
      <EmailControlStrip
        from={lowerLimit}
        to={upperLimit}
        total={totalEmails}
      />
      <hr className="w-[98%] mx-auto" />
      <EmailFilter />
      <hr className="w-[98%] mx-auto -my-[8px]" />
      <div className="mt-[12px]">
        {emailList.map((email) => (
          <EmailCard data={email} key={email.id} />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
