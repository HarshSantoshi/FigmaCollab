"use client";
import dotenv from 'dotenv';
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
// require('dotenv').config({ path: './.env.local' });
export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_kBqI7iQt73qvvDSDUFIc36cE4nmw7x3nx84AZNfrBuLYWmS1GY7RoPLSEw3zEYOa"}>
      <RoomProvider id="my-room" initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}