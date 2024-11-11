import { getAccessTokenKeycloak } from "@/apis/auth/auth.api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;
    const code = searchParams.get("code");
    const cookiesStore = cookies();

    if (code) {
        const accessToken = await getAccessTokenKeycloak(code);
        console.log("Get access token: ", accessToken);

        // Set the access token in cookies
        cookiesStore.set("access_token", accessToken);
        console.log("Redirect to home page");
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.json({ message: "No code" });

}