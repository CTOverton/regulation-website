'use client'

import React, { useEffect } from 'react'
import { analytics } from '@/config/fbconfig'
import { logEvent } from '@firebase/analytics'

export function AnalyticsProvider() {
  useEffect(() => {
    if (analytics) logEvent(analytics, 'page_view')
  }, [])

  return <></>
}
