"use server";

const VALID_REGIONS = ["china", "central-asia"];

export type FormResult =
  | { success: true }
  | { success: false; errors: Record<string, string> };

export async function submitContact(_: unknown, data: FormData): Promise<FormResult> {
  const company = data.get("company")?.toString().trim() ?? "";
  const name = data.get("name")?.toString().trim() ?? "";
  const region = data.get("region")?.toString().trim() ?? "";
  const contact = data.get("contact")?.toString().trim() ?? "";

  const errors: Record<string, string> = {};
  if (!company) errors.company = "Company is required.";
  if (!name) errors.name = "Full name is required.";
  if (!VALID_REGIONS.includes(region)) errors.region = "Please select a region.";
  if (!contact) errors.contact = "Contact is required.";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // TODO: forward to email / CRM
  console.log("Contact submission:", { company, name, region, contact });

  return { success: true };
}
