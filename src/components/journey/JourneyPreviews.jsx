import Heartbeat from '../acts/Heartbeat'
import ActPreview from './ActPreview'
import { journeyActs, journeyHeartbeats } from '../../data/journey'

/**
 * JourneyPreviews — the five short-form Act previews on the main Journey page.
 * Each preview is introduced by a Heartbeat transition carrying the upcoming
 * act's highlight line (mirrors the original inter-act behavior).
 */
export default function JourneyPreviews() {
  return (
    <>
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
