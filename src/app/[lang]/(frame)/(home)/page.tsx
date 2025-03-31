"use client";

import { Trans } from "@lingui/macro";
import { useBanner } from "./hooks/useBanner";

export default function HomePage() {
  const { data: banner, isLoading: bannerLoading } = useBanner();
  console.log(banner)
  return (
    <div>
      <Trans>Hello</Trans>
    </div>
  );
}
