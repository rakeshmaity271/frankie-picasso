import Heartbeat from '../acts/Heartbeat'
import ActPreview from './ActPreview'
import JourneyActBar from './JourneyActBar'
import { journeyActs, journeyHeartbeats } from '../../data/journey'

/**
 * JourneyPreviews — the eight short-form Act previews on the main Journey page.
 * Includes JourneyActBar (sticky Acts I–VIII quick jump navigation) and Heartbeat
 * transitions between chapters.
 */
export default function JourneyPreviews() {
  return (
    <>
      <JourneyActBar />
      {journeyActs.map((preview, i) => {
        const hb = journeyHeartbeats[i]
        return (
          <div key={preview.id}>
            <Heartbeat
              line={journeyActs[i].highlight}
              fromColor={hb.from}
              toColor={hb.to}
              accentColor={hb.accent}
            />
            <ActPreview preview={preview} index={i} />
          </div>
        )
      })}
    </>
  )
}
