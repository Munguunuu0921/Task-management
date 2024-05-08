import { authMiddleware } from "@clerk/nextjs";

const CLERK_FRONTEND_API_KEY = process.env.CLERK_FRONTEND_API_KEY;

if (!CLERK_FRONTEND_API_KEY) {
  throw new Error("Clerk API key is missing. Make sure to set CLERK_FRONTEND_API_KEY environment variable.");
}

export default authMiddleware({
  apiKey: CLERK_FRONTEND_API_KEY,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
