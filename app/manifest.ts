import { type MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vendoxpress",
    short_name: "Vendoxpress",
    description:
      "Premium vending solutions in UAE: massage chairs, arcade machines, and photo booths with zero investment and 24/7 support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    screenshots: [
      {
        src: "/screenshots/homepage-wide.png",
        type: "image/png",
        sizes: "1280x720",
        form_factor: "wide"
      },
      {
        src: "/screenshots/homepage-mobile.png",
        type: "image/png",
        sizes: "375x667" // typical mobile screenshot size
        // No form_factor or set to "narrow"
      }
    ]
  }
}
