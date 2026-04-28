"use client";

import OpenInvitation from "@/components/OpenInvitation";
import { useRouter } from "next/navigation";

export default function OpenInvitationPage() {
  const router = useRouter();
  return <OpenInvitation onOpen={() => router.push("/invitation")} autoOpenEnvelope={false} />;
}

