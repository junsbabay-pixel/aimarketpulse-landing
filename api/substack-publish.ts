import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUBSTACK_API = "https://substack.com/api/v1/comment/feed";
const PROXY_SECRET = "ap_proxy_2026_secure";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers["x-proxy-secret"] as string || "";
  if (authHeader !== PROXY_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { cookies, payload } = req.body;

    if (!cookies || !payload) {
      return res.status(400).json({ error: "Missing cookies or payload" });
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

    return res.status(resp.status === 200 ? 200 : 502).json({
      status: resp.status,
      data,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}
