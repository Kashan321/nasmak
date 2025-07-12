"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

function Subscription() {
  const [startupPlanList, setstartupPlanList] = useState<any>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('/api/page-data')
  //       if (!res.ok) throw new Error('Failed to fetch')
  //
  //       const data = await res.json()
  //       setstartupPlanList(data?.startupPlanList)
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }
  //
  //   fetchData()
  // }, [])
  // Pricing section commented out
  return null;
}

export default Subscription
