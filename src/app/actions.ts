"use server";

import { redirect } from "next/navigation";
import { storePhone } from "@/lib/db";

export async function submitPhoneNumber(phoneNumber: string) {
  try {
    storePhone(phoneNumber);
  } catch (err) {}
  redirect("https://digiimpact.tech");
}
