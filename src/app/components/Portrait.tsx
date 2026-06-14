import React from "react";
import Image from "next/image";

export default function Portrait() {
  return (
    <div className="portrait-container">
      <div className="portrait-outer-ring">
        <div className="portrait-radial-bg"></div>
        <div className="portrait-wrapper">
          <Image
            src="https://plain-apac-prod-public.komododecks.com/202606/12/RmHVcf6mrXe0QAlWE4bh/image.png"
            alt="Himanshu Raj Portrait"
            width={374}
            height={374}
            className="portrait-img"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
