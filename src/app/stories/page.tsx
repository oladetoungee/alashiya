import { redirect } from "next/navigation";
import { ALASIYA_STORY } from "@/lib/stories";

// Stories landing — for now, jump straight into the only act we ship.
export default function StoriesIndex() {
  redirect(`/stories/alasiya/${ALASIYA_STORY.scenes[0].id}`);
}
