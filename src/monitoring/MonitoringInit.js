"use client";

import {useEffect} from "react";
import {init} from "@/monitoring/client";

export default function MonitoringInit() {
  useEffect(() => {
    init({
      appEnv: process.env.NEXT_PUBLIC_APP_ENV || "dev",
      appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "dev",
      endpoint: "/api/monitor/events",
      sampleRateInfo: 0.2,
      sampleRateWarn: 1,
      rateLimitPerMin: 60,
    });
  }, []);

  return null;
}
