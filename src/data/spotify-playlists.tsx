import { Year } from "./years";

export const spotifyPlaylistsByYear: Partial<Record<Year, (props: { height?: number }) => JSX.Element>> = {
    2025: ({ height = 152 }: { height?: number }) => (
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          title="2025 top songs Spotify playlist"
          src="https://open.spotify.com/embed/playlist/16Og0XG0WUH6JNafbKIuyv?utm_source=generator&theme=0"
          width="100%" height={height}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
    )
}