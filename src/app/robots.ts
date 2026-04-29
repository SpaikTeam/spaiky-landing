import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard web crawlers
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow AI / LLM crawlers (Generative Engine Optimization)
      { userAgent: "GPTBot", allow: "/" }, // OpenAI / ChatGPT
      { userAgent: "OAI-SearchBot", allow: "/" }, // OpenAI search
      { userAgent: "ChatGPT-User", allow: "/" }, // ChatGPT browsing
      { userAgent: "ClaudeBot", allow: "/" }, // Anthropic Claude
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" }, // Gemini training
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
      { userAgent: "Bytespider", allow: "/" }, // ByteDance / TikTok
      { userAgent: "Amazonbot", allow: "/" }, // Amazon
      { userAgent: "Meta-ExternalAgent", allow: "/" }, // Meta AI
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" }, // DuckDuckGo AI
      { userAgent: "MistralAI-User", allow: "/" }, // Mistral
      { userAgent: "YouBot", allow: "/" }, // You.com
    ],
    sitemap: "https://spaiky.app/sitemap.xml",
  };
}
