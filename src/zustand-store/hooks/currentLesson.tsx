import { useStore } from "../index"

export const useCurrentLesson = () => {
  return useStore(state => {
    const { currentModuleIndex, currentLessonIndex } = state

    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}