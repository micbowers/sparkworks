// /program is the main page for now (Mike, 2026-09-01). The previous homepage is preserved whole at
// /home-archive — unlinked and noindex — and can be restored by copying it back here.
//
// A redirect rather than moving the program content to the root: every existing link to /program
// keeps working, nothing internal has to be rewritten, and reverting is deleting this file.
//
// Worth revisiting before launch — the root URL currently serves no content of its own, which is
// fine for a soft launch but not where you'd want a site to stay.

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/program");
}
