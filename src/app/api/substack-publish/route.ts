import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.SUBSTACK_PROXY_KEY;
const SUBSTACK_API = "https://substack.com/api/v1/comment/feed";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!API_KEY || token !== API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { cookies, payload } = body;

    if (!cookies || !payload) {
      return NextResponse.json(
        { error: "Missing cookies or payload" },
        { status: 400 },
      );
    }

    const cookieStr = Object.entries(cookies as Record<string, string>)
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");

    const resp = await fetch(SUBSTACK_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStr,
        Origin: "https://substack.com",
        Referer: "https://substack.com/notes",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return NextResponse.json(
      { status: resp.status, data },
      { status: resp.status === 200 ? 200 : 502 },
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
