"use client";

import { Trans } from '@lingui/react/macro'
import { useBanner } from "./hooks/useBanner";

export default function HomePage() {
  const { data: banner, isLoading: bannerLoading } = useBanner();
  return (
    <div>
      <Trans>Hello</Trans>
    </div>
  );
}
