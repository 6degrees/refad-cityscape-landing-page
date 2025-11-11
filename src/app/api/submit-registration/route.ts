import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value.toString());
        });

        // Server-side request to PHP form
        const response = await fetch(
            `https://link.by.refad.com.sa/u/register.php?${params.toString()}`,
            { method: "GET" }
        );

        console.log(response);

        if (!response.ok) {
            return NextResponse.json({ success: false, message: "Submission failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Submitted successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}