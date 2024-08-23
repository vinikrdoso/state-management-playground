import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'
import { useCurrentLesson } from '../store/slices/hooks/currentLesson'

export function Video() {
  const dispatch = useDispatch()
  
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }
  
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}